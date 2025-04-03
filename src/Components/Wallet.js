import React, { useEffect, useRef } from 'react';
import More from '../assets/more.png';
import Tixmast from '../assets/ticketmasterlogonew.svg';
import volumebg from '../assets/bg-volume.png';
import Screenreader from '../assets/screenreaderbg.png';
import IndexBtn from './IndexBtn';
import logoImg from '../assets/tml.PNG'

const Wallet = ({ setIsWalletOpen, eventIndex, seatIndex, handleTicketbtn }) => {
  const walletWrapperRef = useRef(null);

  // Get color style based on transfers
  // const getColorClass = () => {
  //   const firstEvent = eventIndex?.[0];
  //   if (!firstEvent) return '#004EE7'; // Fallback color
  //   if (firstEvent.transfers?.GA && !firstEvent.transfers?.color) {
  //     return '#004EE7';
  //   } else if (!firstEvent.transfers?.GA && !firstEvent.transfers?.color) {
  //     return '#004EE7';
  //   }
  //    else {
  //     return firstEvent.transfers?.color;
  //   }

   
  // };


  const getColorClass = () => {
    const firstEvent = eventIndex?.[0];
    if (!firstEvent) return '#20252f'; // Fallback color
    if (firstEvent.transfers?.GA && !firstEvent.transfers?.color) {
      return '#20252f';
    } else if (!firstEvent.transfers?.GA && !firstEvent.transfers?.color) {
      return '#20252f';
    }
     else {
      return firstEvent.transfers?.color;
    }

   
  };
  const colorStyle = getColorClass();

  // TranslateX calculation
  const getTranslateX = (index) => {
    if (index ) return '8px';
    
    if (index === seatIndex.length - 1) return '15px';
  };

  const translateX = getTranslateX(seatIndex);
  const marginRight = seatIndex === eventIndex?.length - 1 ? '8px' : '0px';

  useEffect(() => {
    if (walletWrapperRef.current && eventIndex?.length) {
      const activeElement = document.getElementById(`ticket-${seatIndex}`);
      if (activeElement) {
        const offset = parseFloat(getTranslateX(seatIndex) || '0');
        walletWrapperRef.current.scrollTo({
          left: activeElement.offsetLeft - offset,
          behavior: 'smooth',
        });
      }
    }
  }, [seatIndex, eventIndex]);

  return (
    <div className="bg-azure-white ticket-slide-up h-screen w-screen absolute top-0 lg:w-2/3 lg:flex lg:flex-col">
      {/* Top Section */}
      <div className="flex justify-between items-center mx-3" style={{ height: '8vh' }}>
        <button onClick={() => setIsWalletOpen(false)} id="doneBtn" className="font-bold cursor-pointer">
          Done
        </button>
        <button>
          <img src={More} className="w-5" alt="More" />
        </button>
      </div>

      {/* Ticket List */}
      <div
        id="wallet-wrapper"
        className="relative overflow-x-auto lg:w-[325px] lg:mx-48 overflow-x-hidden cursor-pointer"
        style={{
          height: '50vh',
          whiteSpace: 'nowrap',
          marginRight: marginRight,
        }}
        ref={walletWrapperRef}
      >
        <div
          id="wallet-t"
          className="flex flex-col relative"
          style={{
            height: '50vh',
            width: '95vw',
            display: 'flex',
            flexDirection: 'row',
            transform: `translateX(${translateX})`,
            transition: 'transform 0.3s ease',
          }}
        >
          {eventIndex?.map((t, index) => (
            <div
              id={`ticket-${index}`}
              key={index}
              className="flex flex-col mx-1 relative lg:w-[300px] w-[94vw]"
              style={{
                height: '50vh',
                minWidth: '300px',
                flexShrink: 0,
                background: colorStyle || '#004EE7',
              }}
            >
              <div className="flex text-white py-2">
                <div className="w-5/12 flex justify-center items-center text-azure-white px-5">
                  <img src={Tixmast} alt="Ticket Master Logo" />
                </div>
                <div className="w-2/12 border-none bg-transparent overflow-hidden -mt-2">
                  <div
                    id="wallet-rounded"
                    className="bg-azure-white border-azure-white border-2 w-full h-12 border-none"
                  ></div>
                </div>
                <div className="w-5/12">
                  <ul className="px-5 -space-y-1">
                    <li id="walletTitle" className={`${t.transfers?.walletBlank? 'text-start text-[#006ce6] font-[800]' : 'text-end font-[500]'}`}>
                      {t.time}
                    </li>
                    <li id="walletInfo" className={`${t.transfers?.walletBlank? 'text-start' : 'text-end'}`}>
                      {t?.eventData?.month} {t?.eventData?.day}, {t?.eventData?.year}
                    </li>
                  </ul>
                </div>
              </div>

{t.transfers.walletBlank? (
  <div
  style={{
    backgroundImage: `url(${logoImg}) `,
    // backgroundImage: `${t.transfers.walletBlank? <img src={logoImg} alt='img'/> : `url(${t.img})`} `,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 50%',
    backgroundColor:'#006ce6'
  }}
  className="h-20 w-full"
></div>
):(
  <div
  style={{
    backgroundImage: `url(${t.img}) `,
    // backgroundImage: `${t.transfers.walletBlank? <img src={logoImg} alt='img'/> : `url(${t.img})`} `,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 5%',
  }}
  className="h-20 w-full"
></div>
)}

              {/* <div
                style={{
                  backgroundImage: `url(${t.img}) `,
                  // backgroundImage: `${t.transfers.walletBlank? <img src={logoImg} alt='img'/> : `url(${t.img})`} `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center 5%',
                }}
                className="h-20 w-full"
              ></div> */}
              <div className="flex flex-col justify-between">
                <ul className="text-azure-white mx-4 space-y-3 pt-2 text-wrap">
                  <li>
                    {/* <p id="walletTitle">{t.venue}</p> */}
                    {t.transfers.walletBlank? (<p id="blankTitle">{t.venue}</p>):(<p id="walletTitle" className='font-[500]'>{t.venue}</p>) }
                    {/* <p
                      id="walletInfo"
                      className="w-full leading-none"
                      style={{
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                      }}
                    >
                      {t.artiste}
                    </p> */}
                    {t.transfers.walletBlank?  
                    <p
                      id="blankInfo"
                      className="w-full leading-none"
                      style={{
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                      }}
                    >
                      {t.artiste}
                    </p> : 
                     <p
                      id="walletInfo"
                      className="w-full leading-none"
                      style={{
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                      }}
                    >
                      {t.artiste}
                    </p> }
                  </li>
                  <li>
                    {t.transfers?.GA ? (
                      <ul className="flex item-center justify-around">
                        <li>
                          <p id="walletTitle" >SECTION</p>
                          <p id="walletInfo">{t.sec}</p>
                        </li>

                        
                        <li id="walletInfo" className="flex m-auto">
                          {t.transfers?.GA}
                        </li>
                      </ul>
                    ) : (
                      <ul className="flex justify-between items-center">
                        {/* <li>
                          <p id="walletTitle">SECTION</p>
                          <p id="walletInfo">{t.sec}</p>
                        </li> */}

                        {t.transfers?.walletBlank?( <li>
                          <p id="blankSec">SECTION</p>
                          <p id="walletInfoSec" >{t.sec}</p>
                        </li>):(
                           <li>
                           <p id="walletTitle">SECTION</p>
                           <p id="walletInfo">{t.sec}</p>
                         </li>
                        )}
                        {/* <li>
                          <p id="walletTitle">ROW</p>
                          <p id="walletInfo">{t.row}</p>
                        </li> */}

                        {t.transfers?.walletBlank?(
 <li className='text-center'>
 <p id="blankSec">ROW</p>
 <p id="walletInfoSec">{t.row}</p>
</li>
                        ):(
                          <li>
                          <p id="walletTitle">ROW</p>
                          <p id="walletInfo">{t.row}</p>
                        </li>
                        )}
                        {/* <li>
                          <p id="walletTitle">SEAT</p>
                          <p id="walletInfo">{t.seat}</p>
                        </li> */}

                        {t.transfers?.walletBlank?(
                            <li className='text-end'>
                            <p id="blankSec">SEAT</p>
                            <p id="walletInfoSec">{t.seat}</p>
                          </li>
                        ):(
                          <li>
                          <p id="walletTitle">SEAT</p>
                          <p id="walletInfo">{t.seat}</p>
                        </li>
                        )}
                      </ul>
                    )}
                  </li>
                  <li>
                  {/* {t.transfers?.gate? (<div>
                    {t.transfers?.walletBlank?(               
                           <p id="blankSec">ENTRY INFO</p>
):(                   
                       <p id="walletTitle">ENTRY INFO</p>
)}
                    <p id="walletInfo">{t.transfers?.gate}</p></div>) : (<div><p id="walletTitle">ENTRY INFO</p>
                      <p id="walletInfo">{t.transfers?.desc}</p></div>) } */}
                    
                    {t.transfers.walletBlank? (
                                                 <p id="blankSec">ENTRY INFO</p>

                    ): (
                      <p id="walletTitle">ENTRY INFO</p>

                    )}

                    {t.transfers.gate ? (
                      <p id="walletInfo">{t.transfers?.gate}</p>
                    ):(
                      <p id="walletInfo">{t.transfers?.desc}</p>
                    )  }
                  </li>
                </ul>

                {t.transfers.walletBlank?(
                  <div className="absolute bottom-0  w-full mb-2">
                  {/* <img src={volumebg} className="w-10" alt="Volume Background" /> */}
                  <div className='flex  justify-between items-center mx-3 '>
                    <p >                           
                             <img src={logoImg} className="w-6" alt="Volume Background" />


                    </p>
                    <p>      
                                  <img src={volumebg} className="w-10" alt="Volume Background" />
                    </p>
                  </div>
                </div>
                ):(
                  <div className="absolute bottom-0 right-0 mb-2">
                  <img src={volumebg} className="w-10" alt="Volume Background" />
                </div>
                )}
                {/* <div className="absolute bottom-0 right-0 mb-2">
                  <img src={volumebg} className="w-10" alt="Volume Background" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div id="wallet-b" className="bg-azure-white" style={{ height: '42vh' }}>
        <div className='p-5'>
          <IndexBtn
            showWalletBtn={true} // or false depending on the condition
            eventIndex={eventIndex}
            seatIndex={seatIndex}
            handleTicketbtn={handleTicketbtn}
            colorStyle={colorStyle}
          />
        </div>
        <div className="flex item-center justify-center my-10">
          <img src={Screenreader} alt="Screen Reader Background" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
