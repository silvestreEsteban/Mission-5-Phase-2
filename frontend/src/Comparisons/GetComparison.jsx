import {useState , useEffect } from "react"
import CompareListing from "./ParsedComparison";

import myStyles from "./ComparisonComponent.module.css"


const ListingDetails = () => {
    const [toCompare, setToCompare] = useState(null); // this will hold the object

    useEffect(() => {
        const fetchToCompare = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/listings");
                const data = await response.json();
                setToCompare(data);
            } catch (error) {
                console.error("Error Fetching Details:", error);
            }
        };

        fetchToCompare(); 
    }, []);

    if (!toCompare) {
        return <p>Loading...</p>; 
    }


//need to destructure the data from the object
const { image, title, location, condition, size, price, colour, dimensions } = toCompare;
// if we run the reserve price event trigger I thin this will work v v v v
// const reserveMet = bid >= {price};

return (
    <>
    <div className={myStyles.imageWindow1}>
    <CompareListing listing={{ image, title}} />
        <img src={image} alt={title} />
    </div>
    <div className={myStyles.Details}>
    <CompareListing listing={{ title, location, price }} />
        <h2>{title}</h2>
        <p>Location: {location}</p>
        <p>Current Bid: $ {price}</p>   {/* {startingPrice} maybe? */}
        {/* <p>{ reserveMet ? "Reserve Met" : "Reserve Not Met"}</p> */}
    </div>
    <div className={myStyles.Description}>
    <CompareListing listing={{ condition, size, colour, dimensions }} />
        <p>Condition: {condition}</p>
        <p>Size: {size}</p>
        <p>Colour: {colour}</p>
        <p>Dimensions: {dimensions}</p>
    </div>
    </>
)}


export default ListingDetails;