import { useEffect, useState } from "react";
import MyEvents from "./Components/MyEvents";
import { eventData } from "./data";
import Ticket from "./Components/Ticket";

function App() {
  const [events, setEvents] = useState(eventData);
  const [flagIndex, setFlagIndex] = useState(0);
  const [isIndexSelected, setIsIndexSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [seatIndex, setSeatIndex] = useState(0);
  const [transX, setTransX] = useState('');
  const [isBarcodeOpen, setIsBarcodeOpen] = useState(null);
  const [isWalletOpen, setIsWalletOpen] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(null);
  const [showWalletBtn, setShowWalletBtn] = useState(false);
  const [isTicketDetailsOpen, setIsTicketDetailsOpen] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const firstEvents = events.map(item => item[0]);
  const eventIndex = events[selectedIndex];
  const selectSeatIndex = eventIndex[seatIndex];

  useEffect(() => {
    const measureLayout = () => {
      const ticketWrapper = document.getElementById('ticket-wrapper');
      const singleTicket = document.getElementById('single-ticket');
      const wrapperHeight = document.getElementById('wrapperheight');
      
      if (ticketWrapper && singleTicket && wrapperHeight) {
        const wrapperWidth = ticketWrapper.offsetWidth;
        const ticketWidth = singleTicket.offsetWidth;
        const containerWidth = wrapperHeight.offsetWidth;
        
        console.log('=== LAYOUT MEASUREMENTS ===');
        console.log('Container width:', containerWidth);
        console.log('Ticket wrapper width:', wrapperWidth);
        console.log('Single ticket width:', ticketWidth);
        console.log('Screen width:', window.innerWidth);
        console.log('Is small screen:', isSmallScreen);
        
        // Calculate ideal center offset
        const centerOffset = (containerWidth - ticketWidth) / 2;
        console.log('Ideal center offset:', centerOffset);
        
        // Calculate translations for each index
        const calculatedTranslations = {};
        for (let i = 0; i < 5; i++) {
          calculatedTranslations[i] = `${centerOffset - (ticketWidth * i)}px`;
        }
        
        console.log('Calculated translations:', calculatedTranslations);
        console.log('========================');
      }
    };

    // Measure after component mounts and when screen size changes
    const timer = setTimeout(measureLayout, 500);
    return () => clearTimeout(timer);
  }, [isSmallScreen, isIndexSelected]);

  // Updated translations to center the first ticket
  const translations = {
    bigScreen: {
      0: "30px",     // Will be combined with calculated margin to center
      1: "-318px",   // ticket width + spacing ≈ 350px
      2: "-668px",   // 2 * 350px
      3: "-1018px",  // 3 * 350px  
      4: "-1368px" ,  // 4 * 350px
          5: "-1718px"   // 5 * 350px
    },
    smallScreen: {
      0: "15px",     // Already adjusted for small screen centering
      1: "-338px",   // smaller ticket width ≈ 320px
      2: "-687px",   // 2 * 320px
      3: "-1038px",   // 3 * 320px
      4: "-1387px" ,  // 4 * 320px
            5: "-1737px" ,  // 4 * 320px

    }
  };

  // Function to calculate the margin needed to center the first ticket
  const getCenteringMargin = () => {
    const width = window.innerWidth;
    
    if (width < 390) {
      // Small screen (< 390px) - minimal margin
      return '10px';
    } else if (width >= 414) {
      // Big screen (>= 414px) - calculate centering margin
      const containerWidth = width > 1024 ? 1200 : width * 0.8;
      const ticketWidth = 350;
      const centeringMargin = (containerWidth - ticketWidth) / 2;
      return `${Math.max(20, centeringMargin)}px`; // Minimum 20px margin
    } else {
      // Medium screen (390px - 413px) - moderate margin
      return '30px';
    }
  };

  // const getTicketStyle = (index) => {
  //   const width = window.innerWidth;
  //   const translation = width < 390 
  //     ? translations.smallScreen[index] 
  //     : translations.bigScreen[index];
    
  //   return {
  //     transform: `translateX(${translation})`,
  //     translateX: (width >= 414 && index === 0) ? getCenteringMargin() : 
  //                 (width < 390 && index === 0) ? '-20px' : 
  //                 (index === 0) ? '-25px' : '-20px', // Medium screen gets 15px
  //   };
  // };

  // Screen size detection with debug logging
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isSmall = width < 390; // Small screen is less than 390px
      const isBigScreen = width >= 414; // Big screen starts from 414px
      console.log('Screen width:', width, 'Is small screen:', isSmall, 'Is big screen:', isBigScreen);
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle ticket button click with debug logging
  const handleTicketbtn = (index) => {
    console.log('handleTicketbtn called with index:', index);
    console.log('Current screen size - isSmallScreen:', isSmallScreen);
    
    setSeatIndex(index);
    
    const currentTranslations = isSmallScreen ? translations.smallScreen : translations.bigScreen;
    const newTransX = currentTranslations[index];
    
    console.log('Setting transX to:', newTransX);
    setTransX(newTransX);
  };

  // Handle event click
  const handleEventClick = (index) => {
    setSelectedIndex(index);
    setIsIndexSelected(true);
    setShowWalletBtn(false);
  };

  // Initialize translation when component mounts
  useEffect(() => {
    const initialTransX = isSmallScreen ? "15px" : "0px"; // Updated to match translations
    console.log('Initial transX set to:', initialTransX, 'isSmallScreen:', isSmallScreen);
    setTransX(initialTransX);
  }, [isSmallScreen]);

  // Update translation when screen size changes for current seat
  useEffect(() => {
    if (seatIndex !== undefined) {
      const currentTranslations = isSmallScreen ? translations.smallScreen : translations.bigScreen;
      const newTransX = currentTranslations[seatIndex];
      console.log('Screen size changed, updating transX to:', newTransX, 'for seatIndex:', seatIndex);
      setTransX(newTransX);
    }
  }, [isSmallScreen, seatIndex]);

  // Debug: Log transX changes
  useEffect(() => {
    console.log('transX updated to:', transX);
  }, [transX]);

  useEffect(() => {
    if (isWalletOpen) {
      setIsBarcodeOpen(false);
    }
  }, [isWalletOpen]);

  useEffect(() => {
    setEvents(events);
  }, [events]);

  const handleCloseIndex = () => {
    setIsIndexSelected(false);
    setSeatIndex(0);
    handleTicketbtn(0);
    setIsFormOpen(false);
  };

  useEffect(() => {
    if (events[0][0]?.eventData?.region.startsWith("Canada")) {
      setFlagIndex(3);
    } else if (events[0][0].eventData?.region.startsWith("AUS")) {
      setFlagIndex(2);
    } else if (events[0][0]?.eventData?.region.startsWith("UK")) {
      setFlagIndex(1);
    } else if (events[0][0]?.eventData?.region.startsWith("IE")) {
      setFlagIndex(4);
    } else if (events[0][0]?.eventData?.region.startsWith("GER")) {
      setFlagIndex(5);
    } else {
      setFlagIndex(0);
    }
  }, [events]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div id="fullbody" className="lg:w-2/3 m-auto flex flex-col bg-white/80 overflow-hidden">
      {/* Debug info - remove after testing */}
      {/* <div style={{ position: 'fixed', top: '10px', left: '10px', background: 'black', color: 'white', padding: '10px', zIndex: 9999, fontSize: '12px' }}>
        <div>Screen: {window.innerWidth}px</div>
        <div>Is Small (&lt;390px): {window.innerWidth < 390 ? 'Yes' : 'No'}</div>
        <div>Is Big (≥414px): {window.innerWidth >= 414 ? 'Yes' : 'No'}</div>
        <div>Seat Index: {seatIndex}</div>
        <div>TransX: {transX}</div>
        <div>Centering Margin: {getCenteringMargin()}</div>
      </div> */}

      {isIndexSelected ? 
        <div className="ticket-slide-up">
          <Ticket  
            showWalletBtn={showWalletBtn} 
            handleCloseIndex={handleCloseIndex} 
            setSeatIndex={setSeatIndex} 
            events={events} 
            selectedIndex={selectedIndex} 
            setIsIndexSelected={setIsIndexSelected} 
            selectSeatIndex={selectSeatIndex} 
            eventIndex={eventIndex}  
            transX={transX} 
            seatIndex={seatIndex} 
            handleTicketbtn={handleTicketbtn} 
            flagIndex={flagIndex} 
            isBarcodeOpen={isBarcodeOpen} 
            setIsBarcodeOpen={setIsBarcodeOpen}  
            isWalletOpen={isWalletOpen} 
            setIsWalletOpen={setIsWalletOpen} 
            isFormOpen={isFormOpen} 
            setIsFormOpen={setIsFormOpen} 
            openForm={openForm} 
            setIsTicketDetailsOpen={setIsTicketDetailsOpen} 
            isTicketDetailsOpen={isTicketDetailsOpen}
         isSmallScreen={isSmallScreen}
         />
        </div>  
        : 
        <div>
          <MyEvents 
            events={events} 
            flagIndex={flagIndex}  
            handleEventClick={handleEventClick}  
            setIsIndexSelected={setIsIndexSelected}
            setSelectedIndex={setSelectedIndex}  
            eventIndex={eventIndex} 
            firstEvents={firstEvents} 
            transX={transX} 
            selectSeatIndex={selectSeatIndex} 
          />
        </div> 
      }
    </div>
  );
}

export default App;