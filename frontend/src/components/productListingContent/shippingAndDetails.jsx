import styles from './shippingAndDetails.module.css';
import { shippingSVG, pickupSVG, paymentSVG, seeMoreSVG } from './productListingSVG';

export default function ShippingAndDetails() {
return (
    <>
       <div className={styles.HeaderContainer}>
                <div className={styles.DetailsHeader}>Details:</div>
                <div className={styles.ShippingHeader}>Shipping & Payment:</div>
            </div>
            <div className={styles.detailsAndShipping}>
                <div className={styles.ProductDetails}>
                    <span><h4>Condition:</h4>
                    <p>Used</p>{/* <p>{condition}</p> */}</span>
                    
                    <span><h4>Color:</h4>
                    <p>Blue</p>{/* <p>{condition}</p> */}</span>
                    
                    <span><h4>Type:</h4>
                    <p>2-seater</p>{/* <p>{condition}</p> */}</span>
                   
                    <span><h4>Dimensions:</h4>
                    <p>160 x 56 cm</p>{/* <p>{condition}</p> */}</span>
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