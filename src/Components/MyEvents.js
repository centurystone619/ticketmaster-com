import React from 'react'
import { Flag } from './flags'
import ticketWhite from '../assets/tickwhite.png'
import eventFooter from '../assets/eventFooter.jpg'


const MyEvents = ({eventIndex, events,flagIndex,handleEventClick,setIsIndexSelected, setSelectedIndex,firstEvents}) => {

 

  return (
    <>
     {(eventIndex[0].eventData?.region.startsWith("UK") || 
    eventIndex[0].eventData?.region.startsWith("IE") || 
    eventIndex[0].eventData?.region.startsWith("GER"))?
     ( 
     <div className="flex flex-col min-h-screen bg-#ffffff">
      <div>
        <nav className="bg-black/80 py-3 text-azure-white px-5">
       
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

        <ul className="flex  " style={{ fontSize: "14px" }}>
              <li className="border-azure-black  text-center border-b-4 w-1/2 text-azure-black font-semibold py-2 ">
                UPCOMING ({ events.length})
              </li>
              <li className="border-black/20  text-center border-b-4 w-1/2 text-black/20 font-semibold py-2 ">
                PAST ({events.length + 6})
              </li>
            </ul>

        </div>
        
        <div>
          {firstEvents.map(({artiste, img, venue, date, time,transfers},index)=>(
            <div
            key={index}
                id="cover-bg"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "96vw",
                }}
                className="relative h-48 w-full z-10 mx-2 inset-0 opacity-85 mt-3"
                onClick={(e)=>handleEventClick(index)}
              >
         
                <div
                  id="text-wrapper"
                  className="absolute w-full z-20 px-3 py-2 "
                >
                  <div
                    id="event-name"
                    className="flex item-center justify-start text-center text-wrap "
                  >
                    <div id="artiste-ev" className=" w-full">
                      {artiste}
                    </div>
                  </div>

                  <div className="flex justify-start item-start text-center whitespace-nowrap -mt-1  w-full text-xs ">
                    {date}, {time} <em className="mx-1">•</em> {venue}
                  </div>
                  <div className="flex items-start text-center w-full justify-start text-xs">
                      <img src={ticketWhite} className="w-3 h-4 flex" />
                     <p>{
    // Check for the first available tickets (seats or ticketId)
    (events[index] && events[index][0] && events[index][0].transfers) 
      ? (
        events[index][0].transfers.seats?.length || events[index][0].transfers.ticketId?.length
          ? `${events[index][0].transfers.seats?.length || events[index][0].transfers.ticketId?.length} tickets`
          : "No tickets available"
      ) 
      : "No tickets available"
  }</p>
                    </div>

                 
                </div>
              </div>
          ))}
        </div>
        
        
        <div className="mt-auto  ">
            <img src={eventFooter} className="w-full pb-2 max-h-20" />
          </div>
        
        </div>)
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
          style={{ fontSize: "14px" }}
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
       
       
       <div className='h-[77vh]  overflow-auto'>
        {firstEvents.map(({artiste,time,img,venue,date,transfers},index)=>(
          <div
          key={index}
              id="cover-bg"
              style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "96vw",
              }}
              className="relative h-48 w-full z-10 mx-2 my-1 inset-0 opacity-85 "
           onClick={(e)=>handleEventClick(index)}
            >
              <div
                id="text-wrapper"
                className="absolute w-full z-20 px-3 py-2 "
              >
                <div
                  id="event-name"
                  className="flex item-center justify-start text-center text-wrap "
                >
                  <div id="artiste-ev" className=" w-full">
                    {artiste}
                  </div>
                </div>

                <div
                  // id="event-date"
                  className="flex justify-start item-start text-center whitespace-nowrap -mt-1  w-full text-xs "
                >
                 
                  {date}, {time} <em className="mx-1">•</em> {venue}
                </div>
               


<div className="flex items-start text-center w-full justify-start text-xs">
                      <img src={ticketWhite} className="w-3 h-4 flex" />
                     <p>{
    // Check for the first available tickets (seats or ticketId)
    (events[index] && events[index][0] && events[index][0].transfers) 
      ? (
        events[index][0].transfers.seats?.length || events[index][0].transfers.ticketId?.length
          ? `${events[index][0].transfers.seats?.length || events[index][0].transfers.ticketId?.length} tickets`
          : "No tickets available"
      ) 
      : "No tickets available"
  }</p>
                    </div>



              </div>
            </div>
        ))}
       </div>
     
  
      
      </div>
    
    )}

    
    
    <div className="mt-auto  ">
            <img src={eventFooter} className="w-full pb-4 max-h-20" />
          </div>

    </>
   
  )
}

export default MyEvents
