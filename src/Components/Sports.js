import React, { useEffect, useRef, useState } from 'react'
import Hamburger from '../assets/sport-Hamburger.png'
import ShoppingCart from '../assets/shopping-cart.png'
import SportCaution from '../assets/sportC.JPG'
import mysafetix from '../assets/mysafetix.JPG'
import sportstixiconsmall from '../assets/sporttixiconsmall.jpg'
import toolbarVideo from '../assets/toolbar.mp4'
import toolbarPic from '../assets/toolbarpick.jpg'
import sportLoc from '../assets/Sportloc.JPG'
import sportCal from '../assets/SportCal.JPG'
import next from '../assets/sportnext.jpg'



const Sports = ({eventIndex,handleCloseIndex}) => {
    const videoRef = useRef(null);
    const [showVideo, setShowVideo] = useState(true);
    const scrollContainerRef = useRef(null);

    const{transfers,img,artiste,venue,date,state,time,sportsdow,eventData,yourName}=eventIndex[0]

    useEffect(() => {
        const container = scrollContainerRef.current;
        
        const handleScroll = () => {
          const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
          setShowVideo(isAtBottom);
        };
    
        if (container) {
          container.addEventListener('scroll', handleScroll);
          return () => container.removeEventListener('scroll', handleScroll);
        }
      }, []);

  return (
    <div className=''>
      <nav onClick={handleCloseIndex} className='bg-black h-[6vh] flex items-center justify-around px-3'>
        <div><img src={Hamburger} className='w-6'/></div>
        <div className='flex-1 h-full  ml-10' style={{background:`url(${transfers.teamLogo})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:'contain'}}></div>
        <div className='flex items-center justify-between '>
            <p className='w-5 h-5 rounded-full  text-center flex item-center justify-between  ' style={{background:transfers.color? transfers.color :"black"}}>
                <span className=' w-full text-center text-[12px] font-semibold ' style={{color:transfers.btnColor? transfers.btnColor :"black"}} >{yourName[0]}</span>
            </p>
            <p><img src={ShoppingCart} alt='shopping-cart' className='w-6 ml-5'/></p>
            </div>

      </nav>

      <div className='h-[94vh] pb-32 overflow-auto'  ref={scrollContainerRef}>
        <div className=''  ><img src={img}/></div>
        
        <div className='px-4 '>
        <h1 className='text-[14px] py-7 font-semibold'>{artiste}</h1>
        <ul className='space-y-3 text-[12px]'>
            <li className='flex items-center'>
                <p><img src={sportCal} className='w-4'/></p>
           <p className='mx-2'> {eventData.sportsdow} <em className="">•</em> {eventData.month} {eventData.day}, {eventData.year} <em className="">•</em> {time.toUpperCase()}</p>
            </li>
            <li className='flex items-center'> <p>
                <img src={sportLoc} className='w-4'/>
                </p>        
                       <p className='leading-tight mx-2'>{state} &mdash; {venue}</p>
            </li>
        </ul>
      </div>

      <div><img src={SportCaution} className='px-2 pt-8 '/></div>
      
        <div className='px-4 py-5'><img src={mysafetix}/></div>

        <ul className='mx-5 mt-8 text-[12px]'>
            {eventIndex.map((item,index)=>{
const{seat,row,sec} = item
return(
    <li key={index} className='flex items-center justify-between py-3 border-y-2 font-semibold'>
        <div className='flex items-center ' >
        <p className='mr-5'><img src={sportstixiconsmall} className='w-4'/></p> 
        <p>Sec {sec}, Row {row}, Seat {seat}</p>
        </div>

        <div><img src={next}/></div>
        
    </li>
)
            })}
        </ul>
      
        

      </div>

     {/* <div className='absolute bottom-4 h-[14vh] border-8'>
     <p>
    <video 
      src={toolbarVideo}
      autoPlay
      muted
      playsInline
      onEnded={(e) => e.target.pause()}
    />
  </p>

  <p><img src={toolbarPic} /></p>
     </div> */}

<div 
  className={`absolute w-[100vw] ${showVideo ? 'bg-[#4a4a4a]' : 'bg-transparent'} ${showVideo ? '-bottom-0' : 'bottom-10'}`}
  style={{height: showVideo ? '14vh' : '10vh'}}
>
          {showVideo ? (
            <p className='  w-[100vw]'>
              <video 
                ref={videoRef}
                src={toolbarVideo}
                autoPlay
                muted
                playsInline
                onEnded={(e) => e.target.pause()}
                width="full"
              />
            </p>
          ) : (
            <p className='bg-[#f0e8e1] translate-y-16 pb-12 border-8 '><img src={toolbarPic} alt="toolbar"  className='w-100 ' /></p>
            
          )}
        </div>
      


    </div>
  )
}

export default Sports
