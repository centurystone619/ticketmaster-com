import React, { useState } from 'react'
import CountDownTimer from './CountDownTimer'
import ViewTicket from '../assets/viewnobg3.png'
import Check from '../assets/walletCheck.png'
import verifiedIcon from '../assets/tvnobg.png'
import Ticketbtns from './Ticketbtns'
import deleteImg from '../assets/delete.png'
import Barcode from './Barcode'
import Wallet from './Wallet'
import Form from './Form'
import VerificationEmail from './VerificationEmail'
import Sports from './Sports'
import TicketDetails from './TicketDetails'



const Ticket = ({showWalletBtn,isSmallScreen, eventIndex, events,selectedIndex,setIsIndexSelected,transX,selectSeatIndex, handleTicketbtn,flagIndex,seatIndex,isBarcodeOpen,setIsBarcodeOpen,setSeatIndex,isWalletOpen,setIsWalletOpen,setIsFormOpen,isFormOpen,openForm,handleCloseIndex,setIsTicketDetailsOpen,isTicketDetailsOpen}) => {

  const [isEmailVerificationOpen,setIsEmailVerificationOpen]=useState(null)
 
  return (
    <>
    {eventIndex[0].transfers?.sport? (<Sports eventIndex={eventIndex} handleCloseIndex={handleCloseIndex}/>):(
      <main  className='lg:w-2/3 overflow-hidden lg:mx-auto'>
      <nav>
          {/* <ul className="flex  item-center justify-between px-5 text-center  bg-black   py-3 "> */}
          <ul className={`flex  item-center justify-between px-5 text-center  ${
      eventIndex[0].transfers?.color ? eventIndex[0].transfers?.color : `bg-black`
    }  py-3\ `}    style={{
      backgroundColor: eventIndex[0]?.transfers?.color || 'black',
    }}>
            <li id="back-icon" className="flex item-center justify-start ">
              <button  onClick={handleCloseIndex}>
                <img src={deleteImg} alt='close ticket' />
              </button>
            </li>
            <li className="flex item-center font-semibold text-white">
              My Tickets
            </li>
            <li className="flex item-center  cursor-pointer" ><button className='font-semibold text-white' onClick={(e)=>setIsEmailVerificationOpen(true)}>Help</button></li>
          </ul>

          {eventIndex[0].transfers?.addOns && <ul
          className="flex      "
          // style={{ fontSize: "14px" }}
          style={{ fontSize: "14px", backgroundColor: eventIndex[0].transfers?.btnColor? `${eventIndex[0].transfers?.btnColor}`: `#004ee7` }}
        >
          <li className="border-azure-white  text-center border-b-4 w-1/2 text-azure-white font-semibold py-3 ">
            {/* UPCOMING ({events.length}) */}
            {events.length > 1? 'MY TICKETS' : `MY TICKET`} {eventIndex.length}
          </li>
          <li
            className="border-b-4 border-none w-1/2  text-center font-semibold py-3"
            // style={{ color: "#B7C7ED" }}
            style={{color: "#B7C7ED", fontSize: "14px", backgroundColor: eventIndex[0].transfers?.btnColor? `${eventIndex[0].transfers?.btnColor}`: `#004ee7` }}
          >
            ADD-ONS
          </li>
        </ul>}

        </nav>
  
        {/* <section id='wrapperheight' className={`flex  h-[585px] lg:w-1/2  lg:mx-auto  `}> */}
 <section
            id="wrapperheight"
            className={`flex h-[585px] lg:w-1/2 lg:mx-auto `}
          >        
          <div id='ticket-wrapper' className='relative   ' >
  <div className='absolute min-w-100   overflow-x-auto   transform transition-transform duration-300 ease-in-out '   style={{
      transform: `translateX(${transX})`,
    }} >
  
  
  
     <ul className='w-full flex   space-x-10 overflow-x-hidden  w-[100vw]'  >
  
     {events[selectedIndex].map((subArray)=>(
      <li id='single-ticket' className=" rounded-[10px]  "  >
       
  <div >
    {subArray.transfers?.color? (<header className=" text-white text-center py-2 sm:rounded-tl-[10px] sm:rounded-tr-[10px]" style={{ backgroundColor: subArray?.transfers?.color }}>{subArray.type}</header>):(<header className="bg-azure-deepblue text-white text-center py-2 sm:rounded-tl-[10px] sm:rounded-tr-[10px]">{subArray.type}</header>)}
  </div>
  
  <div   id="sec-wrapper"
                    style={{ backgroundColor: subArray.transfers?.color || "#004ee7" }}
                    className=" flex items-center  px-2 justify-around text-center text-azure-white  ">
    {subArray.transfers?.GA? ( 
       <div className="flex items-center justify-around text-center text-azure-white  bg-transparent w-full">
                        {subArray.sec && (
                          <div className="">
                            
                            <p id="sec-GA" className="">
                              {subArray.transfers?.sportSec? 'Section' : 'SEC'}
                            </p>
                            <p id="numSec" className="text-center text-nowrap">
                              {subArray.sec}
                            </p>
                          </div>
                        )}
  
                        <div className="">
                          <p id="numSec" className="text-center text-nowrap">
                            {subArray.transfers?.GA}
                          </p>
                        </div>
                      </div>): (   <div className="flex items-center justify-around text-center text-azure-white   bg-transparent w-full" >
                        <div>
                          <p id="sec-GA" className=" ">
                            {subArray.transfers?.sportSec? 'Section' : 'SEC'}
                          </p>
                          <p id="num" className="text-center text-nowrap">
                            {subArray.sec}{" "}
                          </p>
                        </div>
                        <div>
                          {subArray.row && (
                            <div>
                              {" "}
                              <p id="sec-GA" className="text-center">
                                {subArray.transfers?.sportSec? 'Row' : ' ROW'}
                              </p>
                              <p id="num" className="text-center text-nowrap  ">
                                {subArray.row}
                              </p>
                            </div>
                          )}
                        </div>
                        <div>
                          {subArray.seat && (
                            <div className="text-nowrap text-center">
                              {" "}
                              <p id="sec-GA" className=" ">
                                                                {subArray.transfers?.sportSec? 'Seat' : ' SEAT'}

                              </p>
                              <p id="num" className="text-center text-nowrap ">
                                {subArray.seat}
                              </p>{" "}
                            </div>
                          )}
                        </div>{" "}
                      </div>)}
  </div>
  <div
                    id="cover-bg"
                    style={{
                      backgroundImage: `url(${subArray.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                     filter: "contrast(120%) brightness(100%) " 
                    }}
                    className="relative h-48 w-full z-10 inset-0 opacity-85"
                  >
                     <div id="text-wrapper" className="absolute w-full z-20   ">
                      <div
                        id="ticket-name"
                        className="flex item-center justify-center text-center text-nowrap "
                      >
                        <div id="artiste" className={`max-w-80 `}  style={{
      fontSize: '18px', 
     
    }}>
                          {subArray.artiste}
              {subArray.artisteLineBreak && <p style={{lineHeight:'1.4'}}>{subArray.artisteLineBreak}</p>}            
                        </div>
                      </div>
  
                      <div
                        id="ticket-date"
                        className="flex justify-center item-center text-center text-nowrap mb-1"
                      >
                        <p className="text-nowrap text-center">
                          {subArray.date}
                        </p>
                        <p className="flex text-nowrap text-center">
                        {subArray.time &&<em>,</em>}  
                          <p className="px-1">{subArray.time}</p> <em>•</em>
                        </p>
                        <p className="text-nowrap text-center pl-1">
                          {subArray.venue}
                        </p>
                      </div>

      {/* {
  subArray?.date?.length  >= 13 ? (
    <div
                        id="ticket-date"
                        className="flex justify-center item-center text-center text-nowrap mb-1"
                      >
                        <p className="text-nowrap text-center">
                          {subArray.date}
                        </p>
                        <p className="flex text-nowrap text-center">
                        {subArray.time &&<em>,</em>}  
                          <p className="px-1">{subArray.time}</p> <em>•</em>
                        </p>
                        <p className="text-nowrap text-center pl-1">
                          {subArray.venue}
                        </p>
                      </div>
  ) : (
   <div
                        id="ticket-date"
                        className="flex justify-center item-center text-center text-nowrap mb-1"
                      >
                        <p className="text-nowrap text-center">
                          {subArray.date}
                        </p>
                        <p className="flex text-nowrap text-center">
                        {subArray.time &&<em>,</em>}  
                          <p className="px-1">{subArray.time}</p> <em>•</em>
                        </p>
                        <p className="text-nowrap text-center pl-1">
                          {subArray.venue}
                        </p>
                      </div>
  )
} */}
                    </div>
                  </div>
  
                  <div >
                    {subArray.transfers?.timer? (<CountDownTimer events={events} selectedIndex={selectedIndex}/>) :
                    (
                      <div className='relative'>
                      
                      {subArray.transfers?.GA ? (
                        <ul
                          id="ticket-btns"
                          className={`flex flex-col item-center justify-center text-center space-y-3 pt-6 ${eventIndex[0].transfers?.verify? 'h-[205px]' : 'h-[230px]'}  `}
                        >
                          <li id="GA-desc">{subArray.transfers?.desc}</li>
                          <li className="py-2">
                            <button
                              className="flex hover:bg-opacity-20 py-1  w-10/12 m-auto text-xs text-azure-white font-semibold item-center justify-center"
                              id="checkmark"
                              style={{
                                backgroundColor:
                                  subArray.transfers?.btnColor || "#004ee7",
                              }}
                              onClick={(e) => setIsBarcodeOpen(true)}
                            >
                              <div className="flex">
                                <div
                                  className="flex items-center justify-center m-auto
                              text-center m-auto py-1 "
                                 >
                                  <img
                                    src={ViewTicket}
                                    alt="checkmark"
                                    className="h-6 pr-2"
                                  />
                                  View tickets
                                </div>
                              </div>
                            </button>
                          </li>
  
                          <li
                            className="pb-5"
                            style={{
                              color: subArray.transfers?.btnColor || "#004ee7",
                            }}
                          >
                            {" "}
                            <button onClick={()=>setIsTicketDetailsOpen(true)} id="GA-btn" >Ticket Details</button>
                          </li>
                        </ul>
                      ) : (
                        <ul
                              id="ticket-btns"
                              className={`flex flex-col item-center justify-center text-center space-y-3 pt-6 ${eventIndex[0].transfers?.verify? 'h-[205px]' : 'h-[230px]'} `}
                            >
                              <li id="GA-desc">{subArray.transfers?.desc}</li>
                              <li className="py-2">
                                <button
                                  className="flex hover:bg-opacity-20 py-1  w-10/12 m-auto text-xs text-azure-white font-semibold item-center justify-center"
                                  id="checkmark"
                                  style={{
                                    backgroundColor:
                                      subArray.transfers?.btnColor || "#004ee7",
                                  }}
                                  onClick={(e) => setIsBarcodeOpen(true)}
                                >
                                  <div className="flex">
                                    <div
                                      className="flex items-center justify-center m-auto
                              text-center m-auto py-1 "
                                     >
                                      <img
                                        src={ViewTicket}
                                        alt="checkmark"
                                        className="h-6 pr-2"
                                      />
                                      View tickets
                                    </div>
                                  </div>
                                </button>
                              </li>
  
                              <li
                                className="pb-5"
                                style={{
                                  color: subArray.transfers?.btnColor || "#004ee7",
                                }}
                              >
                                {" "}
                                <button onClick={()=>setIsTicketDetailsOpen(true)} id="GA-btn" >Ticket Details</button>
                              </li>
                            </ul>
                      )}
                    </div>
                    )}
  
                  </div>
                  <div>
                    {subArray.transfers?.verify ? (
                      <div>
                        {subArray.transfers.GA ? (
                          <footer className="bg-azure-deepblue text-white text-center font-semibold py-4 sm:rounded-bl-2xl sm:rounded-br-2xl flex items-center justify-center"></footer>
                        ) : (
                          <div>
                            {subArray.transfers?.color ? (
                              <footer
                              style={{ border: subArray.transfers?.color }}
                                className=" text-white text-center font-semibold py-4 sm:rounded-bl-2xl sm:rounded-br-2xl flex items-center justify-center"
                              ></footer>
                            ) : (
                              <footer className="bg-azure-deepblue text-white text-center font-semibold  sm:rounded-bl-2xl sm:rounded-br-2xl py-1  flex items-center justify-center">
                                <img
                                  src={verifiedIcon}
                                  alt="verifiedIcon"
                                  className="w-36"
                                />
                              </footer>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <footer
                      style={{ 
                        backgroundColor: subArray.transfers?.color || '#004ee7',
                        borderColor: subArray.transfers?.color || '#004ee7'
                      }}
                        className="  text-center font-semibold border-2  sm:rounded-bl-2xl sm:rounded-br-2xl flex items-center justify-center"
                      ></footer>
                    )}
                  </div>
  
         </li>
  ))}
  
     </ul>
  
  
  
  
  
  </div>
  
          </div>
  
         
        </section>
  
        
        <div className=''><Ticketbtns  showWalletBtn={showWalletBtn} events={events} selectSeatIndex={selectSeatIndex} eventIndex={eventIndex} selectedIndex={selectedIndex} handleTicketbtn={handleTicketbtn} seatIndex={seatIndex} setIsFormOpen={setIsFormOpen} openForm={openForm} isWalletOpen={isWalletOpen}/></div>
        {isBarcodeOpen && <Barcode selectSeatIndex={selectSeatIndex} eventIndex={eventIndex} flagIndex={flagIndex} events={events} selectedIndex={selectedIndex} seatIndex={seatIndex} handleTicketbtn={handleTicketbtn} setIsBarcodeOpen={setIsBarcodeOpen} setSeatIndex={setSeatIndex} isWalletOpen={isWalletOpen} setIsWalletOpen={setIsWalletOpen}/>}
        {isWalletOpen && 
        <Wallet isWalletOpen={isWalletOpen} setIsWalletOpen={setIsWalletOpen} eventIndex={eventIndex} seatIndex={seatIndex} handleTicketbtn={handleTicketbtn} />}
  {isFormOpen && <Form  setIsFormOpen={setIsFormOpen} selectedIndex={selectedIndex} eventIndex={eventIndex} /> }
  {isEmailVerificationOpen && <VerificationEmail events={events} selectedIndex={selectedIndex} setIsEmailVerificationOpen={setIsEmailVerificationOpen} />}
  {isTicketDetailsOpen && <TicketDetails eventIndex={eventIndex} events={events} selectSeatIndex={selectedIndex} setIsTicketDetailsOpen={setIsTicketDetailsOpen}/>}
      </main>
    )}
    </>
  )
}

export default Ticket
