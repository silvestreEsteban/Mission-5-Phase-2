import styles from './ProductListingContent.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { shippingSVG, pickupSVG, paymentSVG } from './productListingSVG'

export default function ProductListingContent() {
    const [infoBox, setInfoBox] = useState(false);
    return (
        <>
        <div className={styles.ProductParentDiv}>
            <div className={styles.LeftSide}>
            <p className={styles.TopPageLinks}><Link to="/">Home</Link> / Marketplace / Category / Sub-Category</p>
            <div className={styles.MainCarouselImage}></div>
            <div className={styles.BelowMainCarouselImage}>44 others added this to their watchlist <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 15 16" fill="none">
<path d="M6.75 11.75H8.25V7.25H6.75V11.75ZM7.5 5.75C7.7125 5.75 7.89075 5.678 8.03475 5.534C8.17875 5.39 8.2505 5.212 8.25 5C8.2495 4.788 8.1775 4.61 8.034 4.466C7.8905 4.322 7.7125 4.25 7.5 4.25C7.2875 4.25 7.1095 4.322 6.966 4.466C6.8225 4.61 6.7505 4.788 6.75 5C6.7495 5.212 6.8215 5.39025 6.966 5.53475C7.1105 5.67925 7.2885 5.751 7.5 5.75ZM7.5 15.5C6.4625 15.5 5.4875 15.303 4.575 14.909C3.6625 14.515 2.86875 13.9807 2.19375 13.3062C1.51875 12.6317 0.9845 11.838 0.591001 10.925C0.197501 10.012 0.000500949 9.037 9.49366e-07 8C-0.00049905 6.963 0.196501 5.988 0.591001 5.075C0.9855 4.162 1.51975 3.36825 2.19375 2.69375C2.86775 2.01925 3.6615 1.485 4.575 1.091C5.4885 0.697 6.4635 0.5 7.5 0.5C8.5365 0.5 9.51149 0.697 10.425 1.091C11.3385 1.485 12.1322 2.01925 12.8062 2.69375C13.4802 3.36825 14.0147 4.162 14.4097 5.075C14.8047 5.988 15.0015 6.963 15 8C14.9985 9.037 14.8015 10.012 14.409 10.925C14.0165 11.838 13.4822 12.6317 12.8062 13.3062C12.1302 13.9807 11.3365 14.5152 10.425 14.9097C9.51349 15.3042 8.5385 15.501 7.5 15.5Z" fill="white"/>
</svg></div>
            <div className={styles.CarouselSubImages}>
                <div className={styles.SubImage}></div>
                <div className={styles.SubImage}></div>
                <div className={styles.SubImage}></div>
            </div>
           
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
                
            </div>
        
        
        
        
        
        
        
        
        
        <div className={styles.RightSide}></div>
        
        </div>
        
        </>
    )
}