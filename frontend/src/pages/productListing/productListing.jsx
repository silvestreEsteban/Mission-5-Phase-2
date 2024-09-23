import Navbar from "../../navbar/navbar";
import RedNavbar from "../../components/redNavbar/RedNavbar";
import ProductListingContent from "../../components/productListingContent/productListingContent";
import Footer from "../../Footer/footer";
import '../../App.css';
import styles from '../../components/productListingContent/productListing.module.css';

export default function ProductListing() {
    return (
        <>
        <div className="layout-main-page">
        <Navbar />
        <RedNavbar />
        <ProductListingContent />
        <div className={styles.ToSetFooter}>
        <Footer />
        </div>
        </div>
        </>
    )
}