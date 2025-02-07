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



const Ticket = ({showWalletBtn, eventIndex, events,selectedIndex,setIsIndexSelected,transX,selectSeatIndex, handleTicketbtn,flagIndex,seatIndex,isBarcodeOpen,setIsBarcodeOpen,setSeatIndex,isWalletOpen,setIsWalletOpen,setIsFormOpen,isFormOpen,openForm,handleCloseIndex}) => {

  const [isEmailVerificationOpen,setIsEmailVerificationOpen]=useState(null)
 
  return (
    <main  className='lg:w-2/3 overflow-hidden lg:mx-auto'>
    <nav>
        {/* <ul className="flex  item-center justify-between px-5 text-center  bg-black   py-3 "> */}
        <ul className={`flex  item-center justify-between px-5 text-center  ${
    eventIndex[0].transfers?.color ? eventIndex[0].transfers?.color : `bg-black`
  }  py-3 `}    style={{
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
      </nav>

      <section className='flex  min-h-[600px] lg:w-1/2  lg:mx-auto  '>
        <div id='ticket-wrapper' className='relative   ' >
<div className='absolute min-w-100   overflow-x-auto   transform transition-transform duration-300 ease-in-out '   style={{
    transform: `translateX(${transX})`,
  }} >



   <ul className='w-full flex   space-x-10 overflow-x-hidden  w-[100vw]'  >

   {events[selectedIndex].map((subArray)=>(
    <li id='single-ticket' className=" rounded-xl " >
     
<div >
  {subArray.transfers?.color? (<header className=" text-white text-center py-2 sm:rounded-tl-2xl sm:rounded-tr-2xl" style={{ backgroundColor: subArray?.transfers?.color }}>{subArray.type}</header>):(<header className="bg-azure-deepblue text-white text-center py-2 sm:rounded-tl-2xl sm:rounded-tr-2xl">{subArray.type}</header>)}
</div>

<div   id="sec-wrapper"
                  style={{ backgroundColor: subArray.transfers?.color || "#004ee7" }}
                  className=" flex items-center  px-2 justify-around text-center text-azure-white  ">
  {subArray.transfers?.GA? ( 
     <div className="flex items-center justify-around text-center text-azure-white  bg-transparent w-full">
                      {subArray.sec && (
                        <div className="">
                          
                          <p id="sec-GA" className="">
                            SEC
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
                          SEC
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
                              ROW
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
                              SEAT
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
                  }}
                  className="relative h-48 w-full z-10 inset-0 opacity-85"
                >
                   <div id="text-wrapper" className="absolute w-full z-20   ">
                    <div
                      id="ticket-name"
                      className="flex item-center justify-center text-center text-nowrap "
                    >
                      <div id="artiste" className={`max-w-80 `}  style={{
    fontSize: subArray.artiste.length <= 35 ? '18px' : '16px', 
   
  }}>
                        {subArray.artiste}
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
                        <em>,</em>
                        <p className="px-1">{subArray.time}</p> <em>•</em>
                      </p>
                      <p className="text-nowrap text-center pl-1">
                        {subArray.venue}
                      </p>
                    </div>
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
                                subArray.transfers?.colorBtn || "#004ee7",
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
                            color: subArray.transfers?.colorBtn || "#004ee7",
                          }}
                        >
                          {" "}
                          <button id="GA-btn" >Ticket Details</button>
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
                              <button id="GA-btn" >Ticket Details</button>
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
    </main>
  )
}

export default Ticket
