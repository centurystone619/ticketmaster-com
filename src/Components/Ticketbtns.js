import React from 'react'
import IndexBtn from './IndexBtn';

const Ticketbtns = ({events,selectedIndex,eventIndex,handleTicketbtn,seatIndex,setIsFormOpen,openForm,isWalletOpen,showWalletBtn,handleSelection
}) => {

    const getColorClass = () => {
        if (eventIndex[0].transfers?.GA && !eventIndex[0].transfers?.color) {
          return '#azure-deepblue';
        } else if (eventIndex[0].transfers?.GA && !eventIndex[0].transfers?.color) {
          return `#1034a6`;
        } else {
          return `${!eventIndex[0].transfers?.color}`;
        }

      };

      const colorStyle = getColorClass()

  return (
    <div className='-mt-2 lg:mt-0' >
     



<IndexBtn handleTicketbtn={handleTicketbtn} events={events} selectedIndex={selectedIndex} colorStyle={colorStyle} seatIndex={seatIndex} isWalletOpen={isWalletOpen} eventIndex={eventIndex} showWalletBtn={showWalletBtn}handleSelection={handleSelection}/>

<div className='flex items-center justify-center mt-5' id="transfer-btn">
    <ul  className="flex  space-x-5 mb-3">
        <li>
            {eventIndex[0].transfers?.trnsfer?
            ( <div>
                {" "}
                {eventIndex[0].transfers?.GA ? (
                  <button
                    id="trasfer-btn"
                    onClick={openForm}
                    style={{ background:eventIndex[0].transfers.btnColor || "#004EE7" }}
                    className=" hover:bg-opacity-10 rounded-md text-white w-32 text-center py-2"
                  >
                    Transfer
                  </button>
                ) : (
                  <button
                    id="trasfer-btn"
                    onClick={openForm}
                    style={{ background:eventIndex[0].transfers.btnColor || "#004EE7" }}
                    className=" hover:bg-opacity-10 rounded-md text-white w-32 text-center py-2"
                  >
                    Transfer
                  </button>
                )}
              </div>):
        (  <button
            id="sell-btn"
            className="text-azure-white w-32 font-bold text-center py-2 rounded-md"
          >
            Transfer
          </button>)}
        </li>

        <li>
            {eventIndex[0].transfers?.sell ? (
              <button
                id="trasfer-btn"
                style={{ background: eventIndex[0].transfers?.btnColor || "#004EE7" }}
                className=" hover:bg-opacity-10 rounded-md text-white w-32 text-center py-2"
              >
                Sell
              </button>
            ) : (
              <button
                id="sell-btn"
                className="text-azure-white w-32 font-bold text-center py-2 rounded-md"
              >
                Sell
              </button>
            )}
          </li>
    </ul>

  

</div>

{eventIndex[0].transfers?.venueMap && (<div className="w-12/12 flex item-center justify-center">
        <div
          id="map"
          className=" w-11/12 h-14 "
          style={{
            backgroundImage: `url(${eventIndex[0].transfers?.venueMap})`,
            backgroundSize: "cover", // Cover entire div
            // backgroundPosition: "center -60px", // Center the image
            backgroundRepeat: "no-repeat", // Prevent tiling
          }}
        >
          <div id="mapVenue" className="  ">
            {eventIndex[0].venue}
          </div>
        </div>
      </div>)}



    </div>
  )
}

export default Ticketbtns
