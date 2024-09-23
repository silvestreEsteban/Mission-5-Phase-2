import { useState } from "react";
import axios from "axios";
import Modal from "../modal/AddCompare.modal";
import myStyles from "./AddToCompare.module.css"



const AddToCompare = () => {
  const [listing, setListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFetchListing = async (id) => {
    setIsModalOpen(false);
    try {
      const response = await axios.get(`http://localhost:3000/api/listing/${id}`);
      setListing(response.data);
    } catch (error) {
      console.error("Error Finding Listings:", error);
      console.log("Fetched Listing:", setListing.response.data);

    }
  }; 
  

  return ( 
    <>
    
      <div className={myStyles.EmptyListingSpace}>
        <div className={myStyles.BeforeLoadImageSpace}><img src="bi_image-fill.svg" alt="" /></div>
        <div className={myStyles.AddListing}>
      <h3 onClick={() => setIsModalOpen(true)}>+ Add a listing to Compare</h3></div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFetchListing} />
      </div>
      {listing && (
        <div className={myStyles.EmptyPageContainer}>
        <div className={myStyles.EmptyListing}>
          <div className={myStyles.EmptyImageSpace}>
            <img src={listing.image} alt={listing.title} />
          </div>
          <div className={myStyles.EmptyDetails}>
          <div className={myStyles.EmptyInfo}>
            <h2>{listing.title}</h2>
            <p>Location: {listing.location}</p>
            <p className={myStyles.EmptyListingPrice}>Current Bid</p>
            <h2>${listing.price}</h2>
            <p>Reserve met / No reserve</p>
          </div>
          </div>
          <div className={myStyles.EmptyOuterDesc}>
            <div className={myStyles.EmptyDescription}>
              <div className={myStyles.EmptyDescInfo}>
              <div className={myStyles.EmptySizeCond}>
                    <p>
                      <strong>Condition</strong>: {listing.condition}
                    </p>
                    <p>
                      <strong>Size</strong>: {listing.size}
                    </p>
                    </div>
                    <div className={myStyles.EmptyDimeCol}>
                    <p>
                      <strong>Colour</strong>: {listing.colour}
                    </p>
                    <p>
                      <strong>Dimensions</strong>: {listing.dimensions}
                    </p>
                    </div>
              </div>
            </div>
            <div className={myStyles.EmptyShipAndPay}>
              <div className={myStyles.EmptyShipping}>
                <svg
                  width="35"
                  height="20"
                  viewBox="0 0 60 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.7 28.875H49.4V20.0074C49.4 18.9656 48.9856 17.9648 48.2544 17.2266L40.1375 9.03164C39.4062 8.29336 38.415 7.875 37.3831 7.875H33.8V3.9375C33.8 1.76367 32.0531 0 29.9 0H9.1C6.94687 0 5.2 1.76367 5.2 3.9375V7.875H0.65C0.2925 7.875 0 8.17031 0 8.53125V9.84375C0 10.2047 0.2925 10.5 0.65 10.5H22.75C23.1075 10.5 23.4 10.7953 23.4 11.1562V12.4688C23.4 12.8297 23.1075 13.125 22.75 13.125H3.25C2.8925 13.125 2.6 13.4203 2.6 13.7812V15.0938C2.6 15.4547 2.8925 15.75 3.25 15.75H20.15C20.5075 15.75 20.8 16.0453 20.8 16.4062V17.7188C20.8 18.0797 20.5075 18.375 20.15 18.375H0.65C0.2925 18.375 0 18.6703 0 19.0312V20.3438C0 20.7047 0.2925 21 0.65 21H17.55C17.9075 21 18.2 21.2953 18.2 21.6562V22.9688C18.2 23.3297 17.9075 23.625 17.55 23.625H5.2V34.125C5.2 38.4727 8.69375 42 13 42C17.3062 42 20.8 38.4727 20.8 34.125H31.2C31.2 38.4727 34.6937 42 39 42C43.3062 42 46.8 38.4727 46.8 34.125H50.7C51.415 34.125 52 33.5344 52 32.8125V30.1875C52 29.4656 51.415 28.875 50.7 28.875ZM13 38.0625C10.8469 38.0625 9.1 36.2988 9.1 34.125C9.1 31.9512 10.8469 30.1875 13 30.1875C15.1531 30.1875 16.9 31.9512 16.9 34.125C16.9 36.2988 15.1531 38.0625 13 38.0625ZM39 38.0625C36.8469 38.0625 35.1 36.2988 35.1 34.125C35.1 31.9512 36.8469 30.1875 39 30.1875C41.1531 30.1875 42.9 31.9512 42.9 34.125C42.9 36.2988 41.1531 38.0625 39 38.0625ZM45.5 21H33.8V11.8125H37.3831L45.5 20.0074V21Z"
                    fill="#76716D"
                  />
                </svg>
                <p>Shipping to be arranged</p>
              </div>
              <p className={myStyles.EmptyPickUp}>
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 20.425C13.5792 20.425 12.2166 19.8587 11.2119 18.8507C10.2073 17.8427 9.64286 16.4755 9.64286 15.05C9.64286 13.6245 10.2073 12.2573 11.2119 11.2493C12.2166 10.2413 13.5792 9.675 15 9.675C16.4208 9.675 17.7834 10.2413 18.7881 11.2493C19.7927 12.2573 20.3571 13.6245 20.3571 15.05C20.3571 15.7559 20.2186 16.4548 19.9494 17.1069C19.6801 17.7591 19.2855 18.3516 18.7881 18.8507C18.2906 19.3498 17.7 19.7457 17.0501 20.0159C16.4001 20.286 15.7035 20.425 15 20.425ZM15 0C11.0218 0 7.20644 1.58562 4.3934 4.40804C1.58035 7.23047 0 11.0585 0 15.05C0 26.3375 15 43 15 43C15 43 30 26.3375 30 15.05C30 11.0585 28.4196 7.23047 25.6066 4.40804C22.7936 1.58562 18.9782 0 15 0Z"
                    fill="#29a754"
                  />
                </svg>
                Pick up available {listing.location}
              </p>
              <p className={myStyles.EmptyPayment }>
                <svg
                  width="40"
                  height="30"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 14.6875C1.25 15.2677 1.48047 15.8241 1.8907 16.2343C2.30094 16.6445 2.85734 16.875 3.4375 16.875H16.5625C17.1427 16.875 17.6991 16.6445 18.1093 16.2343C18.5195 15.8241 18.75 15.2677 18.75 14.6875V8.67188H1.25V14.6875ZM3.82812 11.7188C3.82812 11.4079 3.95159 11.1099 4.17136 10.8901C4.39113 10.6703 4.6892 10.5469 5 10.5469H6.875C7.1858 10.5469 7.48387 10.6703 7.70364 10.8901C7.92341 11.1099 8.04688 11.4079 8.04688 11.7188V12.5C8.04688 12.8108 7.92341 13.1089 7.70364 13.3286C7.48387 13.5484 7.1858 13.6719 6.875 13.6719H5C4.6892 13.6719 4.39113 13.5484 4.17136 13.3286C3.95159 13.1089 3.82812 12.8108 3.82812 12.5V11.7188ZM16.5625 3.125H3.4375C2.85734 3.125 2.30094 3.35547 1.8907 3.7657C1.48047 4.17594 1.25 4.73234 1.25 5.3125V6.32812H18.75V5.3125C18.75 4.73234 18.5195 4.17594 18.1093 3.7657C17.6991 3.35547 17.1427 3.125 16.5625 3.125Z"
                    fill="#29A754"
                  />
                </svg>
                Cash, NZ Bank Deposit
              </p>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default AddToCompare;
