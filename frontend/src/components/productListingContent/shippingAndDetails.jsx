import styles from './shippingAndDetails.module.css';
import { shippingSVG, pickupSVG, paymentSVG, seeMoreSVG } from './productListingSVG';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function ShippingAndDetails() {
const [condition, setCondition] = useState('');
const [color, setColor] = useState('');
const [type, setType] = useState('');
const [dimensions, setDimensions] = useState('');

    const fetchListingInfo = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/listingInfo");
            setCondition(response.data[0].condition);
            setColor(response.data[0].colour);
            setType(response.data[0].size);
            setDimensions(response.data[0].dimensions);
        } catch (error) {
            console.log("There was an error fetching listing info", error);
        }
    }
    useEffect(() => {
        fetchListingInfo();
    }, []);

return (
    <>
       <div className={styles.HeaderContainer}>
                <div className={styles.DetailsHeader}>Details:</div>
                <div className={styles.ShippingHeader}>Shipping & Payment:</div>
            </div>
            <div className={styles.detailsAndShipping}>
                <div className={styles.ProductDetails}>
                    <span><h4>Condition:</h4>
                    <p>{condition}</p></span>
                    
                    <span><h4>Color:</h4>
                    <p>{color}</p></span>
                    
                    <span><h4>Type:</h4>
                    <p>{type}</p></span>
                   
                    <span><h4>Dimensions:</h4>
                    <p>{dimensions}</p></span>
                    </div>
                    <div className={styles.ShippingDetails}>
                    <span><p>{shippingSVG()} Shipping unavailable, buyer must pick up</p></span>
                    <span className={styles.GreenText}>{pickupSVG()}<p> Pick up in</p></span>
                    <span className={styles.GreenText}>{paymentSVG()}<p> Cash, NZ Bank Deposit</p></span>
                </div>
                </div>
                <h4 id={styles.UserDescription}>Description:</h4>
                <p id={styles.UserDescriptionParagraph}>Auction is for a sofa bed in excellent second hand condition. It has been in our holiday house and has had little use. From a smoke free home. Cats not included. Bought new from Smiths a few years ago.</p>
                <h4 id={styles.SeeMore}>See more {seeMoreSVG()}</h4>

    </>
)


}