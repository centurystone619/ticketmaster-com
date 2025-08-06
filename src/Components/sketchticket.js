<div className='max-h-[77vh] relative'>
  {/* More heavily blurred background */}
  <div className='absolute inset-0 blur-sm' style={{backgroundImage:`url(${img})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
  
  {/* Clear content */}
  
    <ul className='relative z-10 h-full '>
    <li className='text-azure-white flex items-center justify-between px-2 pt-2'>
      <div className=''><CountDownEvent countdown={countdown} setCountdown={setCountdown} eventTime={eventData} /></div>     
      <p><img src={eventCalendar} alt='evcal' className='scale-75 mr-5'/></p>
    </li>


    <li className='relative  z-10' onClick={() => handleEventClick(0)}>
       <ul className='my-3'>
   <li style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "92vw",
                height:'40vh'
              //  filter: "contrast(120%) brightness(100%) "
              }} 
              
               className="h-48 w-full mx-4 inset-0 z-0 relative"
          // onClick={(e)=>handleEventClick()}
              
              ></li>

              <li id='eventdetails' className='w-full mx-4  inset-0 z-10 relative'> 
                <ul className='w-[92vw] z-1'>
                      <li className='flex w-full  justify-between border-azure-white items-start -mb-1'>
                    <p className='bg-black text-azure-white px-3 pt-2 text-nowrap font-[500]  whitespace-nowrap'>{(date).toUpperCase()} <em className="mx-1">•</em> {formatTime(time)}</p>

                    <p className='flex'></p>
                  </li>
 <li className='flex flex-col px-3 bg-black text-azure-white'>
                      <ul className='py-2 bg-black'>
                          <li className={`inline-block max-w-[91.6667%] text-white bg-black pb-2 border-b-[2px] `} id="artiste-ev-single"  style={getInlineBorderStyle(events[0][0].transfers?.borderColor)}>
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        <li className='pb-2 pt-2 flex justify-between items-center'>
                          
                            <p className='text-nowrap whitespace-nowrap flex-1 '>   {truncateAtCommaInRange(venue, state)} </p>

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
      <button className='bg-azure-deepblue text-white py-2 font-[600] px-3 text-center  w-full text-[16px]'>View Tickets</button>
    </li>
                </ul>
              </li>

</ul>
    </li>
   </ul>
  
</div>



     <section>
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
<div className=''><CountDownEvent countdown={countdown} setCountdown={setCountdown} eventTime={eventData} /></div>     <p><img src={eventCalendar} alt='evcal' className='scale-75 mr-5'/></p>
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
                      <li className='flex w-full  justify-between border-azure-white items-start -mb-1'>
                    <p className='bg-black text-azure-white px-3 pt-2 text-nowrap font-[500]  whitespace-nowrap'>{(date).toUpperCase()} <em className="mx-1">•</em> {formatTime(time)}</p>

                    <p className='flex'></p>
                  </li>
 <li className='flex flex-col px-3 bg-black text-azure-white'>
                      <ul className='py-2 bg-black'>
                          <li className='inline-block max-w-[91.6667%] text-white bg-black pb-2 border-b-[2px] ' id="artiste-ev" style={getInlineBorderStyle(events[0][0].transfers?.borderColor)} >
{/*                           
                          <li className={`inline-block max-w-[91.6667%] text-white bg-black pb-2 border-b-2 border-${events[0][0].transfers.borderColor || 'green'}`} id="artiste-ev"> */}
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        <li className='pb-2 pt-2 flex justify-between items-center'>
                          
                            <p className='text-nowrap whitespace-nowrap flex-1 '>   {truncateAtCommaInRange(venue, state)} </p>

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
              </section>



<section>
                  <ul >
    <li className=' overflow-hidden '>
       <ul className='py-1  relative ' >
  <div
    className="absolute inset-0 blur-md h-full  border-gray-500   "
    style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', 
      filter:'blur(4px) brightness(60%)'
    }}
  ></div>
        
    <li className='text-azure-white flex items-center justify-between px-2 relative  pt-2 z-10'>
<div className=''><CountDownEvent countdown={countdown} setCountdown={setCountdown} eventTime={eventData} /></div>     <p><img src={eventCalendar} alt='evcal' className='scale-75 mr-5'/></p>
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
                      <li className='flex w-full  justify-between border-azure-white items-start -mb-1'>
                    <p className='bg-black text-azure-white px-3 pt-2 text-nowrap font-[500]  whitespace-nowrap'>{(date).toUpperCase()} <em className="mx-1">•</em> {formatTime(time)}</p>

                    <p className='flex'></p>
                  </li>
 <li className='flex flex-col px-3 bg-black text-azure-white'>
                      <ul className='py-2 bg-black'>
                          <li className='inline-block max-w-[91.6667%] text-white bg-black pb-2 border-b-[2px] ' id="artiste-ev" style={getInlineBorderStyle(events[0][0].transfers?.borderColor)} >
{/*                           
                          <li className={`inline-block max-w-[91.6667%] text-white bg-black pb-2 border-b-2 border-${events[0][0].transfers.borderColor || 'green'}`} id="artiste-ev"> */}
  {artiste} {artisteLineBreak && <span>{artisteLineBreak}</span>}
</li>
                        <li className='pb-2 pt-2 flex justify-between items-center'>
                          
                            <p className='text-nowrap whitespace-nowrap flex-1 '>   {truncateAtCommaInRange(venue, state)} </p>

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
              </section>