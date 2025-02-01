import React from 'react'
import BackIcon from "../assets/backblu.png"
import TransferSel from "../assets/Transferselect.png"
import TransferImg from "../assets/TransfertoImg.jpeg"
import close from "../assets/close.png";

const TransferToForm = ({eventIndex,selectedItems,closeTransfer,transferTo, setTransferTo}) => {
  return (
    <div >
      {transferTo? (
        <div id="select-modal" className="ticket-slide-up  ">
<form id="select-form" className="mt-[40vh] lg:mt-16  ">
<fieldset className="lg:text-center lg:w-[690px]  ">
                  <legend id="form-header" className=" w-full py-3 text-center lg:w-[650px] font-semibold text-azure-black ">
                  TRANSFER TO
                  </legend>
</fieldset>

<div className="lg:w-[690px] lg:mx-5">
                  <ul
                    className=" space-y-10"
                    onClick={(e) => setTransferTo(false)}
                  >
                    <li>
                      <div className=" mx-3 flex flex-col item-center justify-center">
                        <button>
                          <img src={TransferSel} className="" />
                        </button>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className=" mx-8 flex flex-col item-center justify-center">
                        <button>
                          <img src={TransferImg} className=''/>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>

                <footer className="bg-[#f6f7f9] py-3 mt-8">
                  <button
                    onClick={closeTransfer}
                    id="transfer-to-btn"
                    type="submit"
                    className="flex items-center  item-center justify-center bg-azure-azure-white px-2 py-1 text-azure-deepblue  font-semibold rounded  hover:bg-azure-deepblue hover:text-azure-white "
                  >
                    <img src={BackIcon} alt="next-icon" className="w-5 ml-1" />{" "}
                    BACK
                  </button>
                </footer>
</form>

        </div>
        
        
      ): (
        <div >
             <form
        id="transfer-wrapper"
        className="mt-[39vh] pb-8    pl-8 lg:mx-40 ticket-slide-up bg-white px-4 rounded shadow-lg w-[100vw] max-w-md flex border-none  flex-col "
      >
        <div className="flex justify-around items-center pt-2 pb-3 w-11/12">
          <div className="w-1/12"></div>
          <legend
            id="form-header"
            className=" text-azure-black text-center font-semibold w-9/12 "
          >
            {selectedItems.length > 1
              ? "TRANSFER TICKETS"
              : "TRANSFER TICKET"}
          </legend>
          <div
            className="flex items-center justify-end w-3 ml-10"
            onClick={(e) => setTransferTo(true)}
          >
            <img src={close} alt="close" className="w-3" />
          </div>
        </div>

        <div
          id="select-counter"
          className="item-start flex justify-start  w-11/12"
        >
          {selectedItems.length > 1 ? (
            <div>{selectedItems.length} Tickets Selected</div>
          ) : (
            <div>{selectedItems.length} Ticket Selected</div>
          )}
        </div>

        <ul className="flex space-x-3 pb-3  w-11/12">
          <li className="flex">
            <p className="mr-1 text-black/80">Sec</p>{" "}
            <span className='font-semibold'>{eventIndex[0].sec}</span>
          </li>
          <li className="flex ">
            {eventIndex[0].row && (
              <div className="text-center text-nowrap flex">
                {" "}
                <p className="mr-1 text-black/80 flex text-nowrap items-center justify-center">
                  Row
                </p>{" "}
                <span className='font-semibold'>{eventIndex[0].row}</span>{" "}
              </div>
            )}
          </li>
         

          {eventIndex[0].transfers?.ticketId ? (    <div className="flex">
                      <p className=" flex mr-1 text-black/80">Seat</p>
                      <span className='font-semibold'>
                        -
                      </span>
                    </div>) : (<li className="flex">
              {selectedItems.length > 1 ? (
                <div>
                  {selectedItems.length >= 3 ? (
                    <div className="flex">
                      <p className=" flex mr-1 text-black/80">Seats</p>
                      <span className='font-semibold'>
                        {selectedItems[0]} -{" "}
                        {selectedItems[selectedItems.length - 1]}
                      </span>
                    </div>
                  ) : (
                    <div className="flex">
                      <p className=" flex mr-1 text-black/80">Seats</p>
                      <span className='font-semibold'>{selectedItems.join("-")}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex">
                  {" "}
                  <p className=" flex mr-1 text-black/80">Seat</p>
                  <span className='font-semibold'>{selectedItems}</span>
                </div>
              )}
            </li>)}
        </ul>

        <div className="w-11/12 flex flex-col item-center justify-center box-border">
          {" "}
          <div className="flex flex-col mb-2 ">
            <label
              id="label-text"
              className=" font-semibold text-azure-black mb-1 "
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-azure-black px-2 h-10 w-80"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              id="label-text"
              className=" font-semibold text-azure-black mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-azure-black px-2 h-10 w-80 "
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              id="label-text"
              className=" font-semibold text-azure-black mb-1"
            >
              Email or Mobile Number
            </label>
            <input
              type="email"
              placeholder="Email or Mobile Number"
              className="border-2 border-azure-black px-2 h-10 w-80 "
            />
          </div>
          <div>
            <label id="label-text" className=" font-semibold">
              Note <em className="font-light">(Optional)</em>
            </label>
            <textarea cols={40} rows={2} className=" w-80 border-4" />
          </div>
          <div className="flex items-center justify-end mt-1 w-[86vw]">
            <div className="flex w-1/2 justify-start">
              <button
                id="transfer-ticketbtn"
                type="submit"
                className="bg-azure-deepblue text-azure-white hover:bg-azure-lightblue  w-full  py-2 rounded-md"
              >
                {selectedItems.length > 1
                  ? `Transfer ${selectedItems.length} Tickets`
                  : `Transfer ${selectedItems.length} Ticket`}
              </button>
            </div>
          </div>
        </div>
      </form></div>)}
    </div>
  )
}

export default TransferToForm
