import styles from './purchasingContent.module.css';
// import { auctionSVG, clockSVG, infoSVG, userIconSVG, starIconSVG, warningSVG } from './productListingSVG';
import { auctionSVG, clockSVG, infoSVG, userIconSVG, starIconSVG, warningSVG } from '../productListingContent/productListingSVG';
import pickleRick from '../../images/pickle-rick.png';
import axios from 'axios';
import { useState, useEffect } from 'react';





export default function PurchasingContent() {
const [location, setLocation] = useState('');
const [price, setPrice] = useState('');
const [feedback, setFeedback] = useState('');
const [biddingBoxId, setBiddingBoxId] = useState('BiddingProcessHiddenDiv');
const [bidAmount, setBidAmount] = useState('');
const [itemId, setItemId] = useState('');
const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
const [beenOutbid, setBeenOutbid] = useState({
    id: 'BeenOutbid',
    message: 'You have been outbid'
});
const [biddingButton, setBiddingButton] = useState('Place a bid');


const handleCheckBoxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
}


const updateBiddingPrice = async (id, newPrice) => {
    try {
        console.log("Updating bidding price with ID:", id, "and new price:", newPrice);
        const response = await axios.post(
            "http://localhost:3000/api/updateBiddingPrice",
            { id, newPrice },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response.data);
        setPrice(response.data.price);
    } catch (error) {
        console.log("There was an error updating the bidding price", error);
        if (error.response) {
            console.log("Error response data:", error.response.data);
            console.log("Error response status:", error.response.status);
            console.log("Error response headers:", error.response.headers);
        }
    }
};

const fetchUserInfo = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/userInfo");
        setLocation(response.data[0].location);
        setFeedback(response.data[0].feedback);
    } catch (error) {
        console.log("There was an error fetching user info", error);
}
}; 

const fetchBiddingPrice = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/listingInfo");
        setPrice(response.data[0].price);
        setItemId(response.data[0]._id);
        
    } catch (error) {
        console.log("There was an error fetching bidding price", error);
}};

useEffect(() => {
    fetchUserInfo();
}, []);
useEffect(() => {
    fetchBiddingPrice();
}, []);

const handleBiddingProcess = () => {
    if (biddingBoxId === 'BiddingProcessHiddenDiv') {
        setBiddingBoxId('BiddingProcessShowOnClick');
    } else {
        setBiddingBoxId('BiddingProcessHiddenDiv');
    }
};

const handleBidAmountChange = (e) => {
    setBidAmount(e.target.value);
};

const handleUpdatePrice = () => {
    if (itemId && bidAmount) {
        updateBiddingPrice(itemId, bidAmount);
    } else {
        console.log("Item ID or bid amount is not available");
    }
};
 
    return (
        <>
                <div className={styles.PurchasingContentDiv}>
                <h1>Sofa Bed</h1>
                <h4>Location: {location}</h4>
                <div className={styles.Auction}>
                    <h2>{auctionSVG()} Auction</h2>
                    <h2 id={styles.TimeHeader}>{clockSVG()} 05:06:20</h2>
                    <h3 id={styles[beenOutbid.id]}>{beenOutbid.message}</h3>
                    <span id={styles.BiddingPriceSpan}><h1>${price}</h1><h4>NZD<span id={styles.infoSVG}>{infoSVG()}</span></h4></span>
                    <p>Highest Bid</p>
                    <button onClick={handleBiddingProcess}>{biddingButton}</button>
                    <p id={styles.AuctionReserveP}>Reserve met</p>
                    <p id={styles.AuctionBidsHistoryP}>7 bids so far - view history</p>
                </div>
                <div className={styles.AuctionBottomSection}></div>
                <h1 id={styles.BuyNowHeader}>or Buy Now</h1>
                <h3 id={styles.BuyNowPrice}>$280.00</h3>
                <div className={styles.BuyNowContainer}>
                <button className={styles.BuyNowButton}>Buy Now</button>
                <button className={styles.AddToCartButton}>Add to Cart</button>
                <div className={styles.SmallUserInfoBox}>
                    <div className={styles.SmallUserImage}>{userIconSVG()}<img src={pickleRick} alt='pickle-rick' id={styles.PickleRickSmallIcon}/></div>
                    <span className={styles.SmallUserInfo}>
                        <h4>rick_557 (572{starIconSVG()})</h4>
                       <span id={styles.UserInfoParagraphs}><p>{feedback}% positive feedback</p>
                        <p>Seller located in {location}</p></span>
                    </span>
                </div>
                </div>
            </div>

            <div id={styles[biddingBoxId]}>
                <div id={styles.BiddingProcessColumn0}>{warningSVG()}<h2>Are you sure you want to place this bid?</h2></div>
                <div id={styles.BiddingProcessColumn1}><input type="text" value={bidAmount} onChange={handleBidAmountChange}></input></div>
                <div id={styles.BiddingProcessColumn2}><p>By placing a bid of <b>${bidAmount}</b>, you agree that if you win, you are legally required to complete the purchase. Please review carefully before confirming.</p></div>
                <div id={styles.BiddingProcessColumn3}><input type="checkbox" id='confirmation-checkbox' required onChange={handleCheckBoxChange}/><label htmlFor='confirmation-checkbox'>I acknowledge</label></div>
                <div id={styles.BiddingProcessColumn4}><button 
        id={styles.ConfirmBidButton} 
        htmlFor='confirmation-checkbox' 
        onClick={() => {
            if (isCheckboxChecked) {
                handleUpdatePrice(itemId, bidAmount);
                setBiddingBoxId('BiddingProcessHiddenDiv');
                setBeenOutbid({ id: 'LeadingTheBid', message: 'Congratulations! You lead the bid'})
                setBiddingButton('Edit bid');
            } else {
                alert('Please check the box before confirming your bid');
            }
        }}
    >
        Confirm Bid
    </button><button id={styles.CancelBidButton} onClick={() =>  setBiddingBoxId('BiddingProcessHiddenDiv') }>Cancel</button></div>
            </div>
        </>
    )
}