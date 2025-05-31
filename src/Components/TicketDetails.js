import React from 'react'
import deleteImg from '../assets/delete.png'

const TicketDetails = ({eventIndex,events,selectedIndex,setIsTicketDetailsOpen}) => {
    const details =eventIndex[0]
    const {artiste,img,date,time,venue,eventData,state,transfers,sec,row,yourName,seat,type,promoter,artisteName,showName,street} = details

   
    
let number = parseFloat(transfers.ticketPrice.replace(/[^\d.]/g, ''))
let displayDate = date.replace(',', '').toUpperCase()
const calculateFee = number * 28/100 
const fee = calculateFee.toFixed(2)

const calculateTax=number * 9/100
const tax = calculateTax.toFixed(2)
 // Use calculateFee (number) not fee (string)
const calculateTotal = calculateFee + number + calculateTax
const grandTotal = calculateTotal.toFixed(2)


  return (
    < div className="ticket-slide-up absolute  top-0 w-full lg:w-[710px] h-full bg-[#fafafa]  ">
        <div className='h-[100vh] overflow-auto w-[100vw] pb-5'>
<nav>
          {/* <ul className="flex  item-center justify-between px-5 text-center  bg-black   py-3  "> */}
          <ul className={`flex  item-center justify-between px-5 text-center space-x-10 ${
      eventIndex[0].transfers?.color ? eventIndex[0].transfers?.color : `bg-black`
    }  py-3\  `}    style={{
      backgroundColor: eventIndex[0]?.transfers?.color || 'black',
    }}>
            <li id="back-icon" className="flex item-center justify-start ">
              <button  onClick={()=>setIsTicketDetailsOpen(false)}>
                <img src={deleteImg} alt='close ticket' />
              </button>
            </li>
            <li className="flex-1 item-center text-center font-semibold text-white">
              Ticket Details
            </li>

            <li id="back-icon" className="flex item-center justify-start ">
              {/* <button  onClick={''}>
                <img src={deleteImg} alt='close ticket' />
              </button> */}
            </li>
          </ul>
          </nav>


          <ul className=''>
           

          

      <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>{artiste}</p>
<span className='text-azure-black text-[14px] font-[400]  '>
                      <div className="px-5 mb-1">
                        <span className="inline">
                          {date}
                          {time && <em>,</em>}
                          {time && <span className="px-1">{time}</span>}
                          
                        </span>
                        
                      </div>
    </span>            </li>

               <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>Entry Info</p>
<span className='text-azure-black text-[14px] font-[400] px-5  '>
                      {transfers.gate? `${transfers.gate}`: `${transfers.desc}`}
    </span>            </li>

           <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>Ticket Info</p>
<span className='text-azure-black text-[14px] font-[400]  '>
                      {/* <div className="px-5 mb-1">
                        <span className="inline">
                          {date}
                          {time && <em>,</em>}
                          {time && <span className="px-1">{time}</span>}
                          {(date || time) && <em> • </em>}
                        </span>
                        <span className="inline break-words">
                          {venue}
                        </span>
                      </div> */}
                      <ul className='px-5'>
                  {promoter &&   <li>{promoter}</li>}     
                  {artisteName &&   <li>{artisteName}</li>} 
                  {showName && <li>{showName}</li>}
                  {venue && <li>{venue}</li>}
                  {state && <li>{street.toUpperCase()}</li>}
                  <li> <div className=" mb-1">
                        <span className="inline ">
                          {displayDate.toUpperCase()}
                          {/* {time && <em>,</em>} */}
                        <span  className='ml-1'>{eventData.year && eventData.year}</span>  
                          {time && <span className="px-1">{time.toUpperCase()}</span>}
                          {/* {(date || time) && <em> • </em>} */}
                        </span>
                        {/* <span className="inline break-words">
                          {venue}
                        </span> */}
                      </div></li>
                      </ul>
    </span>            </li>


             <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>Barcode Number</p>
                <span className='text-azure-black text-[14px] font-[400] px-5'>{eventData.barcodeNo}</span>
            </li>


             <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>{venue}</p>
                <span className='text-azure-black text-[14px] font-[400] px-5'>{state}</span>
            </li>

             <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>Order Number</p>
                <span className='text-azure-black text-[14px] font-[400] px-5'>{eventData.orderNo}</span>
            </li>

           <li className='  py-3' id='details-border' >
                <p className='text-azure-black text-[16px] font-[500] px-5'>Ticket Type</p>
                <span className='text-azure-black text-[16px] font-[400] px-5'>{type}</span>
            </li>

     

               <li  className='  py-3'  >
                <p className='text-azure-black text-[16px] font-[500] px-5'>Ticket Price</p>
<ul className=''>
    
   <li className='flex justify-between items-center px-5  text-azure-black text-[14px] font-[400] text-center'>
    
    <p>Face Price</p>
    <span>{transfers.ticketPrice}</span>
    
    </li> 

     <li className='flex justify-between items-center  text-azure-black text-[14px] font-[400] px-5'>
    
    <p>Fee</p>
    <span>{transfers.ticketPrice[0]}{fee}</span>
    
    </li> 

      <li className='flex justify-between items-center  text-azure-black text-[14px] font-[400] px-5'>
    
    <p>Tax</p>
    <span>{transfers.ticketPrice[0]}{tax}</span>
    
    </li> 

      <li className='flex justify-between items-center  text-azure-black text-[16px] font-[400] px-5'>
    
    <p>GRAND TOTAL</p>
    <span>{transfers.ticketPrice[0]}{grandTotal}</span>
    
    </li> 

 

    </ul>       

     </li>
          </ul>

          {/* <div>
           <img src={terms} alt='terms'/>
          </div> */}

        
        </div>
        </div>
  )
}

export default TicketDetails
