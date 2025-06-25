import React from 'react'
import { Flag } from './flags'
import HomeIcon from '../assets/homeIcon.gif'
import plusIcon from '../assets/plus.png'
import TicketmasterIconG from '../assets/ticketmasterIconG.GIF'
import ShowBar from '../assets/ShowBarcode.gif'
import BarcodeUk from '../assets/Blankbar.jpg'
import close from '../assets/delete.png'
import barcodeGif from '../assets/barcode.GIF'
import Check from '../assets/check.png'
import nextIcon from '../assets/angle-small-right.png'


const Barcode = ({eventIndex,flagIndex,selectSeatIndex,events,selectedIndex,seatIndex,handleTicketbtn,setIsBarcodeOpen,setSeatIndex,isWalletOpen,setIsWalletOpen}) => {
    const validSeatIndex =
    seatIndex < 0 || seatIndex >= eventIndex.length ? 0 : seatIndex;

  return (
    < div className="ticket-slide-up absolute  top-0 w-full lg:w-[710px] h-full  ">
         {(eventIndex[0].eventData?.region?.startsWith("UK") || 
    eventIndex[0].eventData?.region?.startsWith("IE") || 
    eventIndex[0].eventData?.region?.startsWith("GER")
  ) ? (
    <div
          id="ukbarcodewrapper"
          className="  relative  top-0    w-full left-0 flex flex-col "
        >
  <nav>
            <ul className="flex items-center px-5 text-center bg-nav-color py-3 border-b-4">
              <li className="flex-grow text-center font-semibold text-white">
                My Tickets
              </li>
              <li className="flex-shrink-0 ml-auto font-semibold text-white">
                <img src={Flag[flagIndex]} id="flagimg" alt="UK Flag" />
              </li>
            </ul>
          </nav>

<div>
<div className="flex flex-start  relative z-1  px-2 text-azure-white ">
              <button
                className="w-full z-50  translate-x-40 absolute top-5"
                onClick={() => setIsBarcodeOpen(false)}
              >
                <img src={HomeIcon} alt='home icon' className="my-2 w-14 h-2 rounded lg:mx-40 " />
              </button>
            </div>

            <div
              id="barcodebodyuk"
              className=" rounded-t-3xl  z-50  text-azure-white mt-6 flex item-center justify-center  "
              style={{ background: eventIndex[0].transfers.color || "#051441" }}
            >
              <ul className="space-y-4 pt-6 pb-3 z-80">
                <li className="text-center italic font-bold text-1xl text-white/70">
                  ticketmaster
                </li>
                <li id="ticketmasterGIF" className="">
                  <img src={TicketmasterIconG} alt='logo-imf' className="sm:w-full lg:mx-auto lg:w-[710px] " />
                </li>
                <li>
                  <ul className="text-center">
                    <li>{eventIndex[0].artiste}</li>
                    <li>
                      <div
                        id="ticket-date"
                        className="flex justify-center item-center text-center text-nowrap text-1xs"
                      >
                        <p className="text-nowrap text-center pr-1">
                          {eventIndex[0].date}
                        </p>
                        <p className="flex text-nowrap text-center">
                        {eventIndex[0].time && <em>,</em>}  
                          <p className="px-1">{eventIndex[0].time}</p> <em>•</em>
                        </p>
                        <p className="text-nowrap text-center pl-1">
                          {eventIndex[0].venue}
                        </p>
                      </div>
                    </li>
                    <li className="flex item-center justify-center py-8">
                      {eventIndex[0].transfers?.showBar ? (
                        <img src={ShowBar} alt='show bar' className="w-44" />
                      ) : (
                        <img src={BarcodeUk} alt='ukbarcode' className="w-44" />
                      )}
                    </li>
                    <li className=" flex item-center justify-center ">
                      <div className="border-t border-azure-white border-dashed w-11/12"></div>
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="text-center mt-10">
                    <li className="font-semibold ">{eventIndex[0].type}</li>
                    <li>
                      <li className="mt-5">
                        {eventIndex[0].transfers.GA ? (
                          <ul className="flex space-x-3 m-auto item-center justify-center ">
                            <li className="leading-none">
                              <p id="barcodeSec">SEC</p>
                              <p id="barcodeSecIndex">{eventIndex[0].sec}</p>
                            </li>
                            <li>
                              <p id="barcodeSecIndex">{eventIndex[0].transfers.GA}</p>
                            </li>
                          </ul>
                        ) : (
                          <ul className="flex items-center justify-center space-x-12">
                            <li className="">
                              <p id="sec-GA">SECTION</p>
                              <p id="barcodeSecIndexUK">
                                {eventIndex[0].sec}
                              </p>
                            </li>
                            <li className="">
                              <p id="sec-GA">ROW</p>
                              <p id="barcodeSecIndexUK">
                                {eventIndex[0].row}
                              </p>
                            </li>
                            <li className="">
                              <p id="sec-GA">SEAT</p>
                              <p id="barcodeSecIndexUK">
                                {selectSeatIndex.seat}
                              </p>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="flex item-center justify-center mt-4 ">
                        <h1 className="bg-white/70 w-11/12 rounded-sm text-azure-black font-semibold">
                          {eventIndex[0].transfers?.desc}
                        </h1>
                        <div className="absolute right-5">
                          <img
                            src={plusIcon}
                            className="w-12 h-12 mt-2 rounded-full"
                          />
                        </div>
                      </li>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
</div>

         <div id="barcodeindex" className="   ">
            <ul className="flex py-2 space-x-2 justify-center items-center bg-azure-white pb-40  ">
              {events[selectedIndex].map((_, index) => (
                <li
                  key={index}
                  id="index-btn"
                  className={`rounded-full border-4 h-1 w-1 ${
                    seatIndex === index
                      ? "border-white/40"
                      : "border-azure-lightblue"
                  }`}
                  onClick={(e) => handleTicketbtn(index)}
                ></li>
              ))}
            </ul>
          </div>  
            </div>
  ) :
  (
    <div
          style={{
            backgroundImage: `url(${eventIndex[0].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            zIndex: "1",
              filter: "contrast(120%) brightness(100%) "
          }}
          className="absolute top-0 h-screen lg:mx-auto left-0  flex flex-col "
        >
               <nav
            className=" flex text-azure-white h-12 "
            style={{
              background: `${eventIndex[0].transfers?.color ? eventIndex[0].transfers?.color : `black`}`,
            }}
          >
            <button className="px-2" onClick={(e) => setIsBarcodeOpen(false)}>
              <img src={close} alt="Close" />
            </button>
            <div className={`flex items-start justify-center flex-col  `}>
              <h1>
                {eventIndex[0].artiste.length > 40
                  ? `${eventIndex[0].artiste.substring(0, 40)} ...`
                  : eventIndex[0].artiste}

           {eventIndex[0].artisteLineBreak && <span className='ml-1'>{eventIndex[0].artisteLineBreak}</span>}       
              </h1>
              
              <div
                id="ticket-date"
                className="flex justify-center items-center text-center text-nowrap -mt-1 "
              >
                <p className="text-nowrap text-center pr-1">{eventIndex[0].date}</p>
                <p className="flex text-nowrap text-center">
                {eventIndex[0].time && <em>,</em>}  
                  <span className="px-1">{eventIndex[0].time}</span> <em>•</em>
                </p>
                <p className="text-nowrap text-center pl-1">
                  {eventIndex[0].venue}
                </p>
              </div>
            </div>
          </nav>

          <div
            id="fixdisplay"
            className="relative   lg:w-[890px]  w-full h-full flex items-center justify-center"
          >
            <div className="absolute inset-0   bg-opacity-40 z-10"></div>
            {/* Background overlay */}
            <ul className="relative  text-center  space-y-10 p-4 rounded-lg bg-black bg-opacity-30 w-full h-full flex flex-col items-center justify-center z-20">
              <li
                id="barcodeType"
                className="text-white font-bold text-2xl p-2 rounded mb-4"
              >
                {eventIndex[0].type}
              </li>
              <li className="text-white">
                {eventIndex[0].transfers?.GA ? (
                  <ul className="text-white flex space-x-2">
                    <li className="leading-none mb-4">
                      <p id="barcodeSec" className="font-semibold -mb-2">
                        SEC
                      </p>
                      <p
                        id="barcodeSecIndex"
                        className="text-2xl  bg-opacity-60 p-2 rounded"
                      >
                        {eventIndex[0].sec}
                      </p>
                    </li>
                    <li className="mb-4">
                      <p
                        id="barcodeSecIndex"
                        className="text-2xl  bg-opacity-60 p-2 rounded"
                      >
                        {eventIndex[0].transfers?.GA}
                      </p>
                    </li>
                  </ul>
                ) : (
                  <ul className="flex items-center justify-center space-x-12 text-white">
                    <li className="leading-none mb-4">
                      <p id="barcodeSec" className="font-semibold">
                        SEC
                      </p>
                      <p
                        id="barcodeSecIndex"
                        className="text-2xl  bg-opacity-60 p-2 rounded"
                      >
                        {eventIndex[0].sec}
                      </p>
                    </li>
                    <li className="leading-none mb-4">
                      <p id="barcodeSec" className="font-semibold">
                        ROW
                      </p>
                      <p
                        id="barcodeSecIndex"
                        className="text-2xl  bg-opacity-60 p-2 rounded"
                      >
                        {eventIndex[0].row}
                      </p>
                    </li>
                    <li className="leading-none mb-4">
                      <p id="barcodeSec" className="font-semibold">
                        SEAT
                      </p>
                      <p
                        id="barcodeSecIndex"
                        className="text-2xl  bg-opacity-60 p-2 rounded"
                      >
                        {selectSeatIndex.seat}
                      </p>
                    </li>
                  </ul>
                )}
              </li>
              <li className="w-8/12 m-auto flex items-center justify-center mb-4 ">
                <img src={barcodeGif} alt="Barcode" className="rounded-md" />
              </li>
              <li className="w-8/12   flex m-auto mb-4 ">
                <button
                  className="flex lg:mx-auto  hover:bg-opacity-20 py-1  w-10/12 mx-5 text-xs text-azure-white font-semibold item-center justify-center"
                  id="checkmark"
                  style={{ backgroundColor: eventIndex[0].transfers.btnColor || "#004ee7" }}
                  onClick={(e) => setIsWalletOpen(true)}
                >
                  <div className="flex ">
                    <div
                      className="flex items-center justify-center m-auto
                                  text-center m-auto py-2 pl-1"
                    >
                      <img
                        src={Check}
                        alt="checkmark"
                        className="w-4 h-4 mr-1"
                      />
                      View in Wallet
                    </div>
                  </div>
                </button>
              </li>
              <li>
                <p className="font-semibold text-white p-2 rounded">
                  {eventIndex[0].transfers?.desc}
                </p>
              </li>
            </ul>
          </div>

          <footer
            className="bg-azure-black lg:w-[890px]  text-azure-white  flex items-center justify-center m-0 h-12"
            style={{
              background: `${eventIndex[0].transfers?.color ? eventIndex[0].transfers.color : `black`}`,
            }}
          >
            <button
              className="flex items-center justify-center "
              onClick={() => setSeatIndex(validSeatIndex - 1)}
            >
              <img src={nextIcon} alt="Previous" id="rotateImg" />
            </button>
            <p id="barcodeIndexCount" className="px-2">
              {validSeatIndex + 1} of {eventIndex.length}
            </p>
            <button
              className="flex items-center justify-center"
              onClick={() => setSeatIndex(validSeatIndex + 1)}
            >
              <img src={nextIcon} alt="Next" id="barcodeIndexNext" />
            </button>
          </footer>
          </div>
         )}
       
    </div>
        
  )
}

export default Barcode
