import { useEffect, useState } from "react";
import axios from "axios";
import myStyles from "./GetComparison.module.css";

const GetComparison = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/listing");
        setListings(response.data);
      } catch (error) {
        console.error("Error Finding Listings:", error);
      }
    };
    fetchListings();
  }, []);

  // const reserveMet = bid >= {price};


  return (
    <>
      <div>
        {listings.map((listing) => (
          <div key={listing._id} className={myStyles.listing}>
            <div className={myStyles.ImageSpace}>
              <img src={listing.image} alt={listing.title} />
            </div>
            <div className={myStyles.Details}>
              <h2>{listing.title}</h2>
              <p>Location: {listing.location}</p>
              <p>Current Bid: $ {listing.price}</p> {/* {startingPrice} maybe? */}
              {/* <p>{ reserveMet ? "Reserve Met" : "Reserve Not Met"}</p> */}
            </div>
            <div className={myStyles.Description}>
              <p>Condition: {listing.condition}</p>
              <p>Size: {listing.size}</p>
              <p>Colour: {listing.colour}</p>
              <p>Dimensions: {listing.dimensions}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetComparison;
