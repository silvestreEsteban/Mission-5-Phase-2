import myStyles from "./ComparisonComponent.module.css"

import {useState , useEffect } from "react"


const CompareListing = ({ listing }) =>{
const [ listing, setListing] = useState(null);
    if (!listing) {
        return <p>No listing available</p>;
    }

const { image, title, location, condition, size, price, colour, dimensions } = listing;
// const reserveMet = bid >= {price};

return (
    <>
    <div className={myStyles.imageWindow}>
        <img src={image} alt={title} />
    </div>
    <div className={myStyles.Details}>
        <h2>{title}</h2>
        <p>Location: {location}</p>
        <p>Current Bid: $ {price}</p>   {/* {startingPrice} maybe? */}
        {/* <p>{ reserveMet ? "Reserve Met" : "Reserve Not Met"}</p> */}
    </div>
    <div className={myStyles.Description}>
        <p>Condition: {condition}</p>
        <p>Size: {size}</p>
        <p>Colour: {colour}</p>
        <p>Dimensions: {dimensions}</p>
    </div>
    </>
)}

export default CompareListing

