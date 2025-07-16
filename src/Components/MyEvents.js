import React, { useState } from 'react'
import { Flag } from './flags'
import ticketWhite from '../assets/tixnew.jpg'
import eventFooter from '../assets/eventFooter.jpg'
import CountDownEvent from './CountdownEvent'
import eventCalendar from '../assets/eventcal.jpg'



const MyEvents = ({eventIndex, events,flagIndex,handleEventClick,setIsIndexSelected, setSelectedIndex,firstEvents}) => {

 const {artiste,time,img,venue,date,transfers,artisteLineBreak,eventData,state}= events[0][0]








  return (
    <>
     {(eventIndex[0].eventData?.region.startsWith("UK") || 
    eventIndex[0].eventData?.region.startsWith("IE") || 
    eventIndex[0].eventData?.region.startsWith("GER"))?
     ( 
 

  <div className=''>
              
        <nav className="bg-black   text-azure-white px-5 py-3">
          <ul
            className="flex items-center justify-start space-x-4"
            style={{ fontSize: "14px" }}
          >
            <li className="flex items-center w-1/4"></li>
            <li
              className="flex justify-center items-center  text-white w-2/4 "
              style={{ fontSize: "14px" }}
            >
              <h1 className="text-nowrap text-center">My Events</h1>
              <div className="border-grey border rounded-full mx-2 ">
                <img src={Flag[flagIndex]} alt="us-flag" id="usFlag" />
              </div>
            </li>

            <li className="flex items-center  text-white w-1/4 ">
              <h1
                id="eventUl"
                className="text-center w-full"
                style={{ fontSize: "14px" }}
              >
                Help
              </h1>
            </li>
          </ul>
        </nav>



   
   
             <ul
          className="flex bg-azure-black     "
          style={{ fontSize: "12px" }}
        >
          <li className="border-azure-white  text-center border-b-4 w-1/2 text-azure-white font-semibold py-2  ">
            UPCOMING ({events.length})
          </li>
          <li
            className="border-b-4 border-none w-1/2   text-center font-semibold py-2"
            style={{ color: "#B7C7ED" }}
          >
            PAST ({events.length + 6})
          </li>
        </ul>

     
  <div className='h-[77vh]  w-[100vw] overflow-x-hidden '>




<section className=''>
  {events.length > 1 && (
  <ul className='w-[100vw] overflow-hidden'>
    <li className=' overflow-hidden'>
       <ul className='py-1  relative w-[100vw] overflow-x-hidden' >
  <div
    className="absolute inset-0 blur-md   bg-contain bg-center z-0"
    style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', backgroundColor:'#686d70'
    }}
  ></div>
        
    <li className='text-azure-white flex items-center justify-between px-2 relative  pt-2 z-10'>
<div className=''><CountDownEvent eventTime={eventData} /></div>     <p><img src={eventCalendar} alt='evcal' className='scale-75 mr-5'/></p>
    </li>

    <li className='relative z-10' onClick={() => handleEventClick(0)}>
      <ul className='my-3'>
  <li style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "96vw",
              //  filter: "contrast(120%) brightness(100%) "
              }} 
              
               className="h-48 w-full mx-2 inset-0 z-0 relative"
          // onClick={(e)=>handleEventClick()}
              
              ></li>

              <li id='eventdetails' className='w-full mx-2  inset-0 z-10 relative'> 
                <ul className='w-[96vw] z-1'>
                   <li className='bg-black w-[55%] -mb-1 text-azure-white px-3 pt-1 text-nowrap font-[500] whitespace-nowrap '>{(date).toUpperCase()}, {eventData.year} <em className="mx-1">•</em> {(time).toUpperCase()}</li>

 <li className='flex flex-col px-3 bg-black text-azure-white'>
                      <ul className='py-2 bg-black'>
                          <li className='inline-block max-w-[91.6667%] text-white bg-black pb-2' id="artiste-ev">
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        <li className='pb-2 pt-2 flex justify-between items-center'>
                          
                             <p className='text-nowrap whitespace-nowrap flex-1 '>{venue}, {state} </p>

 <div className="flex items-start text-center w-full justify-end font-[500]">
                     <div className='flex items-center justify-center text-center'>
                       <div className='mr-1 flex items-center justify-center'> <img src={ticketWhite} id='' alt='ticketIcon' className="w-[18px]" /> </div>
                     <p className='text-center flex items-center justify-center text-[12px]' id=''>x{events[0][0].transfers.seats?.length || events[0][0].transfers.ticketId?.length}</p>
                     </div>
                    </div>

                        </li>
                </ul>
                </li>

                <li className='w-full'>
      <button className='bg-azure-deepblue text-white py-2 font-[600] px-3 text-center  w-full text-[14px]'>View Tickets</button>
    </li>
                </ul>
              </li>

</ul>
    </li>
   </ul>
    </li>

    <li className='my-4 px-2'>
      <p className=' text-black font-[700] text-[14px]'>All Upcoming Events</p>
    </li>

   
  </ul>
  )}
</section>



        {firstEvents.map(({artiste,time,img,venue,date,transfers,artisteLineBreak,eventData,state},index)=>(


<ul   key={index} className=' my-3  '>
  <li style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "96vw",
              //  filter: "contrast(120%) brightness(100%) "
              }} 
              
               className=" h-48 w-full   mx-2  inset-0 z-0 relative  "
          onClick={(e)=>handleEventClick(index)}
              
              ></li>

              <li id='eventdetails'  className='w-full  mx-2   inset-0 z-10 relative  '> 
                <ul className='w-[96vw] z-1'>
                 <li className='bg-black w-[55%] -mb-1 text-azure-white px-3 pt-1 text-nowrap font-[500] whitespace-nowrap '>{(date).toUpperCase()}, {eventData.year} <em className="mx-1">•</em> {(time).toUpperCase()}</li>


 <li className='flex flex-col px-3  bg-black text-azure-white'>
                      <ul className='py-2  bg-black'>
                        {/* <li  className='text-white bg-black border-b-4' id="artiste-ev">
                          {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}</li> */}

                          <li className='inline-block max-w-[91.6667%] text-white bg-black pb-2 ' id="artiste-ev">
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        {/* <li  className=' mt-2 w-11/12'></li> */}
                        <li className='pb-2 pt-2 flex justify-between items-center'>
                          
                              <p className='text-nowrap whitespace-nowrap flex-1 '>{venue}, {state} </p>

                          
                          

 <div className="flex items-start text-center w-full justify-end  font-[500]">
                     

                     <div className='flex items-center justify-center text-center'>
                       <div className='mr-1 flex items-center justify-center'> <img src={ticketWhite} id='' alt='ticketIcon' className="w-[18px] " /> </div>
                     <p className='text-center flex items-center justify-center text-[12px]' id=''>x{events[index][0].transfers.seats?.length || events[index][0].transfers.ticketId?.length}</p>
                     </div>
                    </div>

                        </li>

                  
                </ul>
                </li>
                </ul>
             

               
              </li>

</ul>



        ))}
       </div>
      
      </div>
        )
      :
      (  
      <div className=''>
              
        <nav className="bg-black   text-azure-white px-5 py-3">
          <ul
            className="flex items-center justify-start space-x-4"
            style={{ fontSize: "14px" }}
          >
            <li className="flex items-center w-1/4"></li>
            <li
              className="flex justify-center items-center  text-white w-2/4 "
              style={{ fontSize: "14px" }}
            >
              <h1 className="text-nowrap text-center">My Events</h1>
              <div className="border-grey border rounded-full mx-2 ">
                <img src={Flag[flagIndex]} alt="us-flag" id="usFlag" />
              </div>
            </li>

            <li className="flex items-center  text-white w-1/4 ">
              <h1
                id="eventUl"
                className="text-center w-full"
                style={{ fontSize: "14px" }}
              >
                Help
              </h1>
            </li>
          </ul>
        </nav>
        <ul
          className="flex   bg-azure-deepblue   "
          style={{ fontSize: "12px" }}
        >
          <li className="border-azure-white  text-center border-b-4 w-1/2 text-azure-white font-semibold py-2 ">
            UPCOMING ({events.length})
          </li>
          <li
            className="border-b-4 border-none w-1/2  text-center font-semibold py-2"
            style={{ color: "#B7C7ED" }}
          >
            PAST ({events.length + 6})
          </li>
        </ul>
       
       
       <div className='h-[77vh]  w-[100vw] overflow-x-hidden'>




<section className=''>
  {events.length > 1 && (
  <ul>
    <li className=' overflow-hidden'>
       <ul className='py-1  relative' >
  <div
    className="absolute inset-0 blur-md  bg-contain bg-center z-0"
    style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', backgroundColor:'#686d70'
    }}
  ></div>
        
    <li className='text-azure-white flex items-center justify-between px-2 relative  pt-2 z-10'>
<div className=''><CountDownEvent eventTime={eventData} /></div>     <p><img src={eventCalendar} alt='evcal' className='scale-75 mr-5'/></p>
    </li>

    <li className='relative z-10' onClick={() => handleEventClick(0)}>
      <ul className='my-3'>
  <li style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "96vw",
              //  filter: "contrast(120%) brightness(100%) "
              }} 
              
               className="h-48 w-full mx-2 inset-0 z-0 relative"
          // onClick={(e)=>handleEventClick()}
              
              ></li>

              <li id='eventdetails' className='w-full mx-2  inset-0 z-10 relative'> 
                <ul className='w-[96vw] z-1'>
                     <li className='bg-black w-[55%] -mb-1 text-azure-white px-3 pt-1 text-nowrap font-[500] whitespace-nowrap '>{(date).toUpperCase()}, {eventData.year} <em className="mx-1">•</em> {(time).toUpperCase()}</li>
 <li className='flex flex-col px-3 bg-black text-azure-white'>
                      <ul className='py-2 bg-black'>
                          <li className='inline-block max-w-[91.6667%] text-white bg-black pb-2' id="artiste-ev">
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        <li className='pb-2 pt-2 flex justify-between items-center'>
                          
                            <p className='text-nowrap whitespace-nowrap flex-1 '>{venue}, {state} </p>

 <div className="flex items-start text-center w-full justify-end font-[500]">
                     <div className='flex items-center justify-center text-center'>
                       <div className='mr-1 flex items-center justify-center'> <img src={ticketWhite} id='' alt='ticketIcon' className="w-[18px]" /> </div>
                     <p className='text-center flex items-center justify-center text-[12px]' id=''>x{events[0][0].transfers.seats?.length || events[0][0].transfers.ticketId?.length}</p>
                     </div>
                    </div>

                        </li>
                </ul>
                </li>

                <li className='w-full'>
      <button className='bg-azure-deepblue text-white py-2 font-[600] px-3 text-center  w-full text-[14px]'>View Tickets</button>
    </li>
                </ul>
              </li>

</ul>
    </li>
   </ul>
    </li>

    <li className='my-4 px-2'>
      <p className=' text-black font-[700] text-[14px]'>All Upcoming Events</p>
    </li>

   
  </ul>
  )}
</section>



        {firstEvents.map(({artiste,time,img,venue,date,transfers,artisteLineBreak,eventData,state},index)=>(


<ul   key={index} className=' my-3  '>
  <li style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "96vw",
              //  filter: "contrast(120%) brightness(100%) "
              }} 
              
               className=" h-48 w-full   mx-2  inset-0 z-0 relative  "
          onClick={(e)=>handleEventClick(index)}
              
              ></li>

              <li id='eventdetails'  className='w-full  mx-2   inset-0 z-10 relative  '> 
                <ul className='w-[96vw] z-1'>
                  <li className='bg-black w-[55%] -mb-1 text-azure-white px-3 pt-1 text-nowrap font-[500] whitespace-nowrap '>{(date).toUpperCase()}, {eventData.year} <em className="mx-1">•</em> {(time).toUpperCase()}</li>


 <li className='flex flex-col px-3  bg-black text-azure-white'>
                      <ul className='py-2  bg-black'>
                        {/* <li  className='text-white bg-black border-b-4' id="artiste-ev">
                          {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}</li> */}

                          <li className='inline-block max-w-[91.6667%] text-white bg-black pb-2 ' id="artiste-ev">
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        {/* <li  className=' mt-2 w-11/12'></li> */}
                        <li className='pb-2 pt-2 flex justify-between items-center'>

                            <p className='text-nowrap whitespace-nowrap flex-1 '>{venue}, {state} </p>

                          
                          

 <div className="flex items-start text-center w-full justify-end  font-[500]">
                     

                     <div className='flex items-center justify-center text-center'>
                       <div className='mr-1 flex items-center justify-center'> <img src={ticketWhite} id='' alt='ticketIcon' className="w-[18px] " /> </div>
                     <p className='text-center flex items-center justify-center text-[12px]' id=''>x{events[index][0].transfers.seats?.length || events[index][0].transfers.ticketId?.length}</p>
                     </div>
                    </div>

                        </li>

                  
                </ul>
                </li>
                </ul>
             

               
              </li>

</ul>



        ))}
       </div>
     
  
      
      </div>
    
    )}

    
    
    <div className="mt-auto  ">
            <img src={eventFooter} alt='footer' className="w-full pb-4 max-h-20" />
          </div>

    </>
   
  )
}

export default MyEvents
