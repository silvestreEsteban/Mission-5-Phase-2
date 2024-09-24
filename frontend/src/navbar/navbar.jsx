import styles from './navbar.module.css';
import tradeMeLogo from '../images/trade-me-logo 1.png';
import { Link } from 'react-router-dom';
import { watchlistSVG, notificationSVG, listingSVG, compareSVG, myTradeMeSVG, browseSVG, dropdownSVG } from './navbarSVG';

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
<span  id={styles.DropdownIcon}>{dropdownSVG()}</span>
                </div>
        </div>
       
        </>
    )
}

export default Navbar;