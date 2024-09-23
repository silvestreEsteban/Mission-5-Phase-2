import styles from './RedNavbar.module.css';


export default function RedNavbar() {
    return (
        <div className={styles.redNavbar}>
            <div className={styles.redNavbarLeftContainer}>
                <p className={styles.redNavbarLeftContainerText}>Browse Marketplace</p>
                <p className={styles.redNavbarLeftContainerText}>Stores</p>
                <p className={styles.redNavbarLeftContainerText}>Deals</p>
                <p className={styles.redNavbarLeftContainerText}>Book a courier</p>
            </div>
            <div className={styles.redNavbarRightContainer}>
                <p className={styles.redNavbarRightContainerText}>List an Item</p>
                </div>
            </div>
    )
}