import React from 'react';

const IndexBtn = ({ 
  showWalletBtn, 
  eventIndex, 
  events, 
  selectedIndex, 
  colorStyle, 
  handleTicketbtn, 
  seatIndex 
}) => {
  // Determine which data source to use
  const indexData = showWalletBtn ? eventIndex : events[selectedIndex] || [];

  return (
    <div>
      <ul className="flex space-x-2 justify-center items-center  ">
        {indexData.map((_, index) => (
          <li
            key={index}
            className={`rounded-full border-4 h-1 w-1 ${
              seatIndex === index ? "border-gray-700" : "border-gray-400 cursor-pointer"
            }`}
            style={seatIndex === index ? { backgroundColor: colorStyle } : {}}
            onClick={() => handleTicketbtn(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default IndexBtn;
