import React, { useState } from 'react'
import mailNavIcon from '../assets/mailnavIcon.jpg'
import BlankStar from '../assets/BlankStar.jpeg'
import colorStar from '../assets/ColorStar.jpeg'
import mailSmileyIcon from '../assets/mail-smiley.jpeg'
import logotxt from '../assets/logotxt.jpeg'
import logoLineIcon from '../assets/logoline.jpg'
import mailProfilepic from '../assets/mailprofile.jpg'
import Bluebg from '../assets/emailorderbg.PNG'
import emailHero from '../assets/email2friends.jpg'
import EmailTime from '../assets/emailTimeSmall.jpg'
import EmailLocation from '../assets/emailLoc.jpg'
import emailTIx from '../assets/emailTix.jpg'
import emailMobile from '../assets/emailmobile .jpg'
import emailend from '../assets/emailend.jpg'
import viewEmailTicket from '../assets/emailmobileviewbtn.jpeg'

const VerificationEmail = ({events,selectedIndex,setIsEmailVerificationOpen}) => {
    const [clickedStar, setClickedStar] = useState(false)


    const mailInfo =events[selectedIndex][0]
    const {artiste,img,date,time,venue,eventData,state,transfers,sec,row,yourName,seat} = mailInfo

  
    
    
  return (
   
<section className='absolute top-0 w-[100vw] h-[100vh] bg-[#202124] text-2xl text-[#d4d4d4] left-0 '>
    <div className='h-full w-full'>
<div className='  w-[100vw]'>
<nav className='h-1/12' onClick={()=>setIsEmailVerificationOpen(false)}><img src={mailNavIcon}/></nav>
</div>
<div className='h-[100%]  overflow-y-auto px-5'>
<header className=' font-roboto  flex items-center justify-between'>
            <p className=' mr-4'><span className='text-[21px] font-[400] ' >You got the tickets to {artiste}</span>
            <span className='mx-2 text-[11px] px-2  text-center border-emailblack border text-emailblack'>inbox</span>
            </p>
          

<span className='w-1/6 cursor-pointer' onClick={() => clickedStar ? setClickedStar(false) : setClickedStar(true)}>
  {clickedStar ? <p><img src={colorStar}/></p> : <p><img src={BlankStar}/></p>}
</span>
        </header>

        <div id='logo-text' className='flex mt-5'>
            <p><img src={logotxt} alt='logotext'/></p>
            <p><img src={mailSmileyIcon} alt='mailsmiley'/></p>
        </div>

        <div><img src={logoLineIcon} alt='logoline'/></div>
        <div className='flex font-roboto justify-end mx-4 text-[14px] items-center  '>
            <p className=''><img src={mailProfilepic} className='scale-50 -mt-1' alt='profilenameicon'/></p> <p className='text-[10px] font-bold -mx-1 text-center'>{yourName}</p>
        </div>

        <div><img src={Bluebg} alt='bluebg'/></div>
        
        <div id='det' className='mx-2  my-5 flex   justify-start '>
            <div className='w-5/12 h-full  px-2 '>
              
                <div className={` h-[100px] `} style={{background:`url(${img}) `, backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
            </div>
          
            
            <div className='w-7/12'>
    <div>
        <ul className='font-roboto text-[12px] space-y-1 '>
            <li className='text-[12px] font-semibold leading-tight'>{artiste}</li>
            <li>
                <p className='leading-tight flex'>
                    <p><img src={EmailTime} id='emailsmallicon'/></p> 
                    <p>{date}, {eventData?.year} {time && <em className="mx-1">•</em>} {time}</p>
                </p>
            </li>
            <li className='flex'> 
                <p className='-mt-1' id='emailsmallicon'><img src={EmailLocation}/></p> 
                <p className='leading-tight'>{venue} &mdash; {state}</p>
            </li>
        </ul>
    </div>

    <div className='text-[11px] text-[#d07b7f] -mt-1 -mb-3 mx-5 font-semibold'>Get Directions</div>

    <ul className='flex '>
        
        <div><img src={emailTIx} className='mt-2' id='emailsmallicon'/></div>
       
        {/* <div>
  {transfers.GA || transfers.ticketId ? (
    <div>
      {!transfers.GA && transfers.ticketId && (row?.startsWith('-') || !row) ? (
        <ul className="text-[11px] -space-y-4">
        {transfers.seats.map((seat, index) => (
          <li key={index}>
            <p>
              <span>Sec {sec},</span>
              <span className="mx-2">Row {row},</span>
              <span>Seat -</span>
            </p>
          </li>
        ))}
      </ul>
      ) : (
        <div className="text-[11px] -space-y-4 text-center">
          <ul className="-space-y-4">
            <li className="flex">
              {sec && <p>Sec {sec}</p>}, {row && <p>Row {row}</p>}
            </li>
            <li>{String(transfers.GA).toUpperCase()} x {transfers.ticketId.length}</li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <ul className="text-[11px] -space-y-4">
      {transfers.seats.map((seat, index) => (
        <li key={index}>
          <p>
            <span>Sec {sec},</span>
            <span className="mx-2">Row {row},</span>
            <span>Seat {seat}</span>
          </p>
        </li>
      ))}
    </ul>
    
  )}
</div> */}
        
        <div>
  {transfers.GA || transfers.ticketId ? (
    <div>
      {!transfers.GA && transfers.ticketId && (row?.startsWith('-') || !row) ? (
        // <ul className='text-[11px] '>
        //   {sec && <li>Sec {sec}</li>}
        //   <li>GENERAL ADMISSIONS x {transfers.ticketId.length}</li>
        // </ul>
        <ul className="text-[11px] -space-y-4">
          {transfers.ticketId.map((_, index) => (
            <li key={index}>
              <p>
                <span>Sec {sec},</span>
                <span className="mx-2">Row {row},</span>
                <span>Seat -</span>
              </p>
            </li>
          ))}
        </ul>
      ) : transfers.ticketId && row && seat && seat.startsWith('-') ? (
        <ul className="text-[11px] -space-y-4">
          {transfers.ticketId.map((_, index) => (
            <li key={index}>
              <p>
                <span>Sec {sec},</span>
                <span className="mx-2">Row {row},</span>
                <span>Seat -</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-[11px] -space-y-4 text-center">
          <ul className="-space-y-4">
            <li className="flex">
              {sec && <p>Sec {sec}</p>}, {row && <p>Row {row}</p>}
            </li>
            <li>{String(transfers.GA).toUpperCase()} x {transfers.ticketId.length}</li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <ul className="text-[11px] -space-y-4">
      {transfers.seats.map((seat, index) => (
        <li key={index}>
          <p>
            <span>Sec {sec},</span>
            <span className="mx-2">Row {row},</span>
            <span>Seat {seat}</span>
          </p>
        </li>
      ))}
    </ul>
  )}
</div>

    </ul>
   <div className='mx-5'>
   <p><img src={viewEmailTicket} className='w-24'/></p>
   </div>
</div>
           
        </div>

        <div className='pb-20  w-[98vw]  -mx-4'>
        <div className=' -mt-3 '><img src={emailHero}/></div>
        < div className=''><img src={emailMobile}/></div>
        <div className='flex mx-7 justify-between items-center'>
            <div className='text-[11px] font-semibold '>
                <ul className='-space-y-4'><li className='text-[#d6d6d6]'>Payment Method</li>
                <li className='text-emailblack'>Visa &mdash; 8373</li></ul>
                
            </div>
            <div className='text-[11px] font-semibold text-[#d6d6d6]'>Total: {transfers?.ticketPrice}</div>
        </div>
        < div className=''><img src={emailend}/></div>
        </div>
     </div>
    </div>


</section>
  )
}

export default VerificationEmail
