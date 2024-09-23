import styles from './ProductListingContent.module.css';
import { Link } from 'react-router-dom';
import QAndA from './qAndA';
import Carousel from './carousel';
import ShippingAndDetails from './shippingAndDetails';
import PurchasingContent from './purchasingContent';

export default function ProductListingContent() {
    return (
        <>
        <div className={styles.ProductParentDiv}>
            <div className={styles.LeftSide}>
            <p className={styles.TopPageLinks}><Link to="/">Home</Link> / Marketplace / Home & living / Lounge, dining & hall / Lounge suites / Sofa beds</p>
            <Carousel />
            <ShippingAndDetails />
            <QAndA />
            </div>
        <div className={styles.RightSide}>
        <PurchasingContent />
        </div>
        
        </div>
        
        </>
    )
}