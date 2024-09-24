import styles from './navbar.module.css';
import tradeMeLogo from '../images/trade-me-logo 1.png';
import { Link } from 'react-router-dom';
import { watchlistSVG, notificationSVG, listingSVG, compareSVG, myTradeMeSVG, browseSVG } from './navbarSVG';

const Navbar = () => {
    return (
        <>
        
            <div className={styles.NavbarTopDiv}>
                <div className={styles.TopContainerLeft}>
                  <Link to="/"><p id={styles.TradeMeP}>Trade Me</p></Link>
                    <p>Trade Me Insurance</p>
                    <p>Holiday Houses</p>
                    <p>FindSomeone</p>
                    <p>MotorWeb</p>
                    <p>homes.co.nz</p>
                </div>
                <div className={styles.TopContainerRight}>
                    <p>Log Out</p>
                </div>
            </div>
            <div className={styles.NavbarBottomDiv}>
                <div className={styles.BottomContainerLeft}>
                <Link to="/"><img src={tradeMeLogo} id={styles.NavTradeMeLogo} alt='trade-me-logo'></img></Link>
                    <p id={styles.Browse}>Browse{browseSVG()}</p>
                </div>
                <div className={styles.BottomContainerRight}>
                <Link to="/productListing"><p>{watchlistSVG()}Watchlist</p></Link>
                    <p>{compareSVG()}Compare Listings</p>
                    <p>{listingSVG()}Start a listing</p>
                    <p>{notificationSVG()}Notifications</p>
                    <p>My Trade Me{myTradeMeSVG()}</p>
<span  id={styles.DropdownIcon}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 31 33" fill="none">
<path d="M29.2778 24.1111C29.7167 24.1116 30.1389 24.2797 30.4581 24.581C30.7773 24.8824 30.9694 25.2942 30.9951 25.7324C31.0209 26.1706 30.8783 26.6021 30.5965 26.9387C30.3148 27.2753 29.9152 27.4917 29.4793 27.5435L29.2778 27.5556H1.72222C1.28326 27.5551 0.861056 27.387 0.541866 27.0857C0.222676 26.7843 0.0305953 26.3725 0.00487024 25.9343C-0.0208548 25.4961 0.121717 25.0646 0.403456 24.728C0.685195 24.3913 1.08483 24.175 1.52072 24.1232L1.72222 24.1111H29.2778ZM29.2778 12.0556C29.7345 12.0556 30.1726 12.237 30.4956 12.56C30.8186 12.883 31 13.321 31 13.7778C31 14.2345 30.8186 14.6726 30.4956 14.9956C30.1726 15.3186 29.7345 15.5 29.2778 15.5H1.72222C1.26546 15.5 0.827406 15.3186 0.504427 14.9956C0.181448 14.6726 0 14.2345 0 13.7778C0 13.321 0.181448 12.883 0.504427 12.56C0.827406 12.237 1.26546 12.0556 1.72222 12.0556H29.2778ZM29.2778 0C29.7345 0 30.1726 0.181448 30.4956 0.504428C30.8186 0.827407 31 1.26546 31 1.72222C31 2.17898 30.8186 2.61704 30.4956 2.94002C30.1726 3.263 29.7345 3.44444 29.2778 3.44444H1.72222C1.26546 3.44444 0.827406 3.263 0.504427 2.94002C0.181448 2.61704 0 2.17898 0 1.72222C0 1.26546 0.181448 0.827407 0.504427 0.504428C0.827406 0.181448 1.26546 0 1.72222 0H29.2778Z" fill="#76716D"/>
</svg></span>
                </div>
        </div>
       
        </>
    )
}

export default Navbar;