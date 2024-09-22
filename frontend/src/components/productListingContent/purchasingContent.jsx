import styles from './purchasingContent.module.css';
import { auctionSVG, clockSVG, infoSVG, userIconSVG, starIconSVG } from './productListingSVG';
import pickleRick from '../../images/pickle-rick.png';
export default function PurchasingContent() {
    return (
        <>
                <div className={styles.PurchasingContentDiv}>
                <h1>Sofa Bed</h1>
                <h4>Location: {/* {Location} */}</h4>
                <div className={styles.Auction}>
                    <h2>{auctionSVG()} Auction</h2>
                    <h2 id={styles.TimeHeader}>{clockSVG()} 05:06:20</h2>
                    <h3>You have been outbid</h3>
                    <span id={styles.BiddingPriceSpan}><h1>{/* {price} */}$130.00</h1><h4>NZD<span id={styles.infoSVG}>{infoSVG()}</span></h4></span>
                    <p>Highest Bid</p>
                    <button>Place a bid</button>
                    <p id={styles.AuctionReserveP}>Reserve met</p>
                    <p id={styles.AuctionBidsHistoryP}>7 bids so far - view history</p>
                </div>
                <div className={styles.AuctionBottomSection}></div>
                <h1 id={styles.BuyNowHeader}>or Buy Now</h1>
                <h3 id={styles.BuyNowPrice}>{/* {price} */}$280.00</h3>
                <div className={styles.BuyNowContainer}>
                <button className={styles.BuyNowButton}>Buy Now</button>
                <button className={styles.AddToCartButton}>Add to Cart</button>
                <div className={styles.SmallUserInfoBox}>
                    <div className={styles.SmallUserImage}>{userIconSVG()}<img src={pickleRick} alt='pickle-rick' id={styles.PickleRickSmallIcon}/></div>
                    <span className={styles.SmallUserInfo}>
                        <h4>rick_557 (572{starIconSVG()})</h4>
                       <span id={styles.UserInfoParagraphs}><p>{ /* {feedback} */ }positive feedback</p>
                        <p>Seller located in{ /* {location} */ }</p></span>
                    </span>
                </div>
                </div>
            </div>
        </>
    )
}