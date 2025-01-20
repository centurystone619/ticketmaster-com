import React from 'react'
import close from "../assets/close.png";
import error from "../assets/error.png";
import ticketImg from "../assets/ticket.png";
import check from "../assets/check.png";
import nextIcon from "../assets/next.png";

const SelectSeatForm = ({ setOpenSelection,selectedItems,isSelected, ticketId,transfers,handleChange,handleSubmit,setIsFormOpen,selectedIndex,eventTransfers ,eventIndex}) => {
  return (
    <div id="select-modal" className="ticket-slide-up lg:w-2/3  ">
<form onSubmit={handleSubmit} id="select-form" className={`${eventTransfers.seats.length > 4? ' mt-[29vh]': ' mt-[43vh]'} pb-8 lg:mt-[32vh]`}>
        <section id='form-section'>
        <div className='container mx-auto px-4'>

<div className="lg:w-[650px] flex justify-around items-center border-b-2 py-2 mb-4  ">
            <div className="w-1/12"></div>
            <legend id="form-header" className=" my-2 w-10/12 text-center font-semibold nowrap">
              SELECT TICKET TO TRANSFER{" "}
            </legend>
            <div className="flex items-center justify-end w-1/12 mr-4">
              <img
                src={close}
                alt="close"
                onClick={() => setIsFormOpen(false)}
                className="w-3"
              />
            </div>

            



          </div>

          <div className="flex border-2 border-black/80 p-2 max-w-[650px] ">
            <div className="w-14">
              <img src={error} alt="notice" />
            </div>
            <div id="ctext" className=''>
              Only transfer tickets to people you know and trust to ensure
              everyone stays safe and socially distanced
            </div>
          </div>

          <div className="flex item-center justify-between my-2">
          <ul className="flex space-x-1  ">
<li>
<p className="text-nowrap text-center ">
                   Sec
                  <span className="font-semibold">{eventIndex[0].sec}</span>,
                </p>
</li>

<li><p className="text-nowrap text-center ">
                   Row
                  <span className="font-semibold">{eventIndex[0].row}</span>,
                </p></li>
            </ul>

            <div className="flex items-center justify-center ">
              <div className=" mr-2 w-4">
                <img src={ticketImg} alt="ticket" />
              </div>
              <p id="ticket-length">
                {eventIndex.length <= 1
                  ? `${eventIndex.length} Ticket`
                  : `${eventIndex.length} Tickets`}{" "}
                `
              </p>
            </div>
            </div>

            <div className="overflow-x-auto">
{(
eventTransfers.seats.length > 0 
  ? eventTransfers.seats 
  : eventTransfers.ticketId
)
.reduce((chunks, item, index) => {
  const chunkIndex = Math.floor(index / 4); // Split into groups of 4
  if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
  chunks[chunkIndex].push(item);
  return chunks;
}, [])
.map((chunk, chunkIndex) => (
  <ul
    key={chunkIndex}
    className="flex space-x-4  text-azure-white mb-5 mt-10 flex-wrap lg:my-5 "
  >
    {chunk.map((item, index) => (
      <li
        key={index}
        className="cursor-pointer"
        onClick={() => handleChange(item)}
      >
        <div
          style={{
            backgroundColor: eventIndex[0]?.transfers?.btnColor || "#004ee7", // Ensure `btnColor` is used
          }}
          className="py-1 px-2 w-18" // Add consistent padding via className
        >
          {eventTransfers.seats.length > 0 ? (
            <div>
              SEAT <em>{item}</em>
            </div>
          ) : (
            <div className="py-2 px-3 min-w-16">
              {item}
            </div>
          )}
        </div>
        <div className="rounded-xl shadow-md flex items-center justify-center py-3 border-b-2 ">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 p-1 ${
              isSelected(item) ? "bg-azure-deepblue" : ""
            }`}
            style={{
              backgroundColor: isSelected(item)
                ? eventIndex[0]?.transfers?.btnColor || "#004ee7"
                : "inherit",
            }}
          >
            <div className="border-2 h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>
      </li>
    ))}
  </ul>
))}
</div>


</div>

<div
 id="transfer-to-container"
 className="lg:w-[690px] mx-5 bg-[#f6f7f9] py-3  flex items-center  justify-between  "
>
 <div>
   <button className="text-[#b1b2b5] font-semibold">
     {selectedItems.length} Selected
   </button>
 </div>
 <button
   id="transfer-to-btn"
   type="submit"
   className="flex items-center  item-center justify-center bg-azure-azure-white px-2 py-1 text-azure-deepblue  font-semibold rounded  hover:underline  "
onClick={()=>setOpenSelection(true)}
>
   TRANSFER TO
   <img src={nextIcon} alt="next-icon" className="w-4 ml-1" />
 </button>
</div>
        </section>
    {/* <div className='container mx-auto px-4'>

    <div className="flex justify-around items-center border-b-2 py-2 mb-4 ">
                <div className="w-1/6"></div>
                <legend className=" my-2 w-4/6 text-center">
                  SELECT TICKET TO TRANSFER{" "}
                </legend>
                <div className="flex items-center justify-end w-1/6 mr-4">
                  <img
                    src={close}
                    alt="close"
                    onClick={() => setIsFormOpen(false)}
                    className="w-3"
                  />
                </div>

                



              </div>

              <div className="flex border-2 border-black/80 p-2  ">
                <div className="w-14">
                  <img src={error} alt="notice" />
                </div>
                <div id="ctext">
                  Only transfer tickets to people you know and trust to ensure
                  everyone stays safe and socially distanced
                </div>
              </div>

              <div className="flex item-center justify-between my-2">
              <ul className="flex space-x-1">
<li>
<p className="text-nowrap text-center ">
                       Sec
                      <span className="font-semibold">{eventIndex[0].sec}</span>,
                    </p>
</li>

<li><p className="text-nowrap text-center ">
                       Row
                      <span className="font-semibold">{eventIndex[0].row}</span>,
                    </p></li>
                </ul>

                <div className="flex items-center justify-center ">
                  <div className=" mr-2 w-4">
                    <img src={ticketImg} alt="ticket" />
                  </div>
                  <p id="ticket-length">
                    {eventIndex.length <= 1
                      ? `${eventIndex.length} Ticket`
                      : `${eventIndex.length} Tickets`}{" "}
                    `
                  </p>
                </div>
                </div>

                <div className="overflow-x-hidden">
  {(
    eventTransfers.seats.length > 0 
      ? eventTransfers.seats 
      : eventTransfers.ticketId
  )
    .reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / 4); // Split into groups of 4
      if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
      chunks[chunkIndex].push(item);
      return chunks;
    }, [])
    .map((chunk, chunkIndex) => (
      <ul
        key={chunkIndex}
        className="flex space-x-4 text-azure-white my-10 flex-wrap"
      >
        {chunk.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer"
            onClick={() => handleChange(item)}
          >
            <div
              style={{
                backgroundColor: eventIndex[0]?.transfers?.btnColor || "#004ee7", // Ensure `btnColor` is used
              }}
              className="py-1 px-2 w-18" // Add consistent padding via className
            >
              {eventTransfers.seats.length > 0 ? (
                <div>
                  SEAT <em>{item}</em>
                </div>
              ) : (
                <div className="py-2 px-3 min-w-16">
                  {item}
                </div>
              )}
            </div>
            <div className="rounded-xl shadow-md flex items-center justify-center py-3 border-b-2">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 p-1 ${
                  isSelected(item) ? "bg-azure-deepblue" : ""
                }`}
                style={{
                  backgroundColor: isSelected(item)
                    ? eventIndex[0]?.transfers?.btnColor || "#004ee7"
                    : "inherit",
                }}
              >
                <div className="border-2 h-3 w-3 rounded-full bg-azure-white"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ))}
</div>


    </div>

    <div
     id="transfer-to-container"
     className=" mx-5 bg-[#f6f7f9] py-3 flex items-center  justify-between  "
   >
     <div>
       <button className="text-[#b1b2b5] font-semibold">
         {selectedItems.length} Selected
       </button>
     </div>
     <button
       id="transfer-to-btn"
       type="submit"
       className="flex items-center  item-center justify-center bg-azure-azure-white px-2 py-1 text-azure-deepblue  font-semibold rounded  hover:underline  "
    onClick={()=>setOpenSelection(true)}
    >
       TRANSFER TO
       <img src={nextIcon} alt="next-icon" className="w-4 ml-1" />
     </button>
   </div> */}
    </form>
        </div>
  )
}

export default SelectSeatForm
