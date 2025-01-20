import React, { useState } from 'react'
import ticketImg from "../assets/ticket.png";
import check from "../assets/check.png";
import error from "../assets/error.png";
import close from "../assets/close.png";
import TransferSel from "../assets/Transferselect.png"
import TransferImg from "../assets/TransfertoImg.jpeg"

import nextIcon from "../assets/next.png";

import SelectSeatForm from './SelectSeatForm';
import TransferToForm from './TransferToForm';

const Form = ({setIsFormOpen,selectedIndex,eventIndex}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [openSelection, setOpenSelection] = useState(false);
    const [transferTo, setTransferTo] = useState(true)
   
   
    // const handleChange = (event) => {
    //     const { value, checked } = event.target;
    //     if (checked) {
    //       setSelectedItems([...selectedItems, value]);
    //     } else {
    //       setSelectedItems(selectedItems.filter((item) => item !== value));
    //     }
    //   };


    
    const handleChange = (seatOrTicket) => {
        if (selectedItems.includes(seatOrTicket)) {
          setSelectedItems(selectedItems.filter((item) => item !== seatOrTicket));
        } else {
          setSelectedItems([...selectedItems, seatOrTicket]);
        }
      };


      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Selected Items: ", selectedItems);
        setOpenSelection(true);
      };
   
    const closeTransfer = () => {
        setOpenSelection(false);
        setSelectedItems([]);
      };

    const isSelected = (seat) => selectedItems.includes(seat);

    const { sec = "", seats = [], transfers = {}, ticketId = [] } = selectedIndex;
    const eventTransfers = eventIndex[0]?.transfers || {};
  
  return (
    <div id="form-wrapper" className=' absolute ticket-slide-up top-0'>
  {openSelection ? (<TransferToForm  selectedItems={selectedItems} closeTransfer={closeTransfer} transferTo={transferTo} setTransferTo={setTransferTo} eventIndex={eventIndex}/>) :(
    <SelectSeatForm setOpenSelection={setOpenSelection} selectedItems={selectedItems} ticketId={ticketId} isSelected={isSelected} handleChange={handleChange} transfers={transfers} selectedIndex={selectedIndex} eventTransfers={eventTransfers} handleSubmit={handleSubmit} setIsFormOpen={setIsFormOpen} eventIndex={eventIndex}/>
  ) }

{/* <SelectSeatForm setOpenSelection={setOpenSelection} selectedItems={selectedItems} ticketId={ticketId} isSelected={isSelected} handleChange={handleChange} transfers={transfers} selectedIndex={selectedIndex} eventTransfers={eventTransfers} handleSubmit={handleSubmit} setIsFormOpen={setIsFormOpen} eventIndex={eventIndex}/> */}

</div>
  )
}

export default Form
