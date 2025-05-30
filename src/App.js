import { useEffect, useState } from "react";
import MyEvents from "./Components/MyEvents";
import { eventData } from "./data";
import Ticket from "./Components/Ticket";




function App() {
  const [events,setEvents] = useState(eventData)
  const [flagIndex,setFlagIndex] = useState(0)
  const[isIndexSelected,setIsIndexSelected]=useState(false)
 const[selectedIndex,setSelectedIndex]= useState(0)
 const[seatIndex,setSeatIndex]= useState(0)
const [transX,setTransX]= useState('')
const[isBarcodeOpen,setIsBarcodeOpen]=useState(null)
const [isWalletOpen,setIsWalletOpen] =useState(null)
const [isFormOpen,setIsFormOpen] = useState(null)
const [showWalletBtn ,setShowWalletBtn] = useState(false)
const [isTicketDetailsOpen,setIsTicketDetailsOpen]=useState(null)




 const firstEvents = events.map(item => item[0]);

 


 const eventIndex=events[selectedIndex]

 const selectSeatIndex = eventIndex[seatIndex]


 useEffect(() => {
  if (isWalletOpen) {
    setIsBarcodeOpen(false);
  }
}, [isWalletOpen]);

 const handleEventClick = (index) => {
  setSelectedIndex(index);
  setIsIndexSelected(true);
 setShowWalletBtn(false)
 
};


const handleTicketbtn = (index) => {
  // Directly set the new index
  setSeatIndex(index);
  
  // Then update the translation based on the new index (big screen)
  if (index === 0) {
    setTransX("22px");
  } else if (index === 1) {
    setTransX("-332px");
  }
  else if (index === 2) {
    setTransX("-692px")
  }
  else if(index === 3){
    setTransX("-1054px")
  } else if(index === 4){
    setTransX("-1413px")
  }
    
};

// const handleTicketbtn = (index) => {
//   // Directly set the new index
//   setSeatIndex(index);
  
//   // Then update the translation based on the new index (small screen)
//   if (index === 0) {
//     setTransX("13px");
//   } else if (index === 1) {
//     setTransX("-337px");
//   }
//   else if (index === 2) {
//     setTransX("-687px")
//   }
//   else if(index === 3){
//     setTransX("-1037px")
//   } else if(index === 4){
//     setTransX("-1384px")
//   }
    
// };

// const handleTicketbtn = (index) => {
//   // Directly set the new index
//   setSeatIndex(index);
  
//   // Then update the translation based on the new index
//   if (index === 0) {
//     setTransX("27px");
//   } else if (index === 1) {
//     setTransX("-293px");
//   }
//   else if (index === 2) {
//     setTransX("-607px")
//   }
//   else if(index === 3){
//     setTransX("-932px")
//   } else if(index === 4){
//     setTransX("-1248px")
//   }
    
// };

// useEffect(() => {
//   if (selectSeatIndex !== null) {
//     // Adjust the translation for the selected index
//     setTransX("13px");
//     setSeatIndex(0)
//   } 
// }, []);

useEffect(() => {
  if (selectSeatIndex !== null) {
    // Adjust the translation for the selected index (big screen)
    setTransX("22px");
    setSeatIndex(0)
  } 
}, []);

useEffect(() => {
 setEvents(events)
}, [events]);


const handleCloseIndex =()=>{
  setIsIndexSelected(false)
  setSeatIndex(0)
  handleTicketbtn(0)
  setIsFormOpen(false)
}

  useEffect(() => {
    if (events[0][0]?.eventData?.region.startsWith("Canada")) {
      setFlagIndex(3); // Set flagIndex to 2 or any value you want
    } else if (events[0][0].eventData?.region.startsWith("AUS")) {
      setFlagIndex(2);
    } else if (events[0][0]?.eventData?.region.startsWith("UK")) {
      setFlagIndex(1);
    } else if (events[0][0]?.eventData?.region.startsWith("IE")) {
      setFlagIndex(4);
    } else if (events[0][0]?.eventData?.region.startsWith("GER")) {
      setFlagIndex(5);
    }else{setFlagIndex(0)}
  }, [events]);

  const openForm = () => {
    setIsFormOpen(true);
    
  };

 

   

  return (
<div id="fullbody" className="lg:w-2/3 m-auto flex flex-col bg-white/80 overflow-hidden">

{isIndexSelected? <div className="ticket-slide-up"><Ticket  showWalletBtn={showWalletBtn} handleCloseIndex={handleCloseIndex} setSeatIndex={setSeatIndex} events={events} selectedIndex={selectedIndex} setIsIndexSelected={setIsIndexSelected} selectSeatIndex={selectSeatIndex} eventIndex={eventIndex}  transX={transX} 
seatIndex={seatIndex} handleTicketbtn={handleTicketbtn} flagIndex={flagIndex} isBarcodeOpen={isBarcodeOpen} setIsBarcodeOpen={setIsBarcodeOpen}  isWalletOpen={isWalletOpen} setIsWalletOpen={setIsWalletOpen} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} openForm={openForm} setIsTicketDetailsOpen={setIsTicketDetailsOpen} isTicketDetailsOpen={isTicketDetailsOpen} /></div>  : <div><MyEvents events={events} flagIndex={flagIndex}  handleEventClick={handleEventClick}  setIsIndexSelected={setIsIndexSelected}
setSelectedIndex={setSelectedIndex}  eventIndex={eventIndex} firstEvents={firstEvents} transX={transX} selectSeatIndex={selectSeatIndex} /></div> }


</div>
  );
}

export default App;
