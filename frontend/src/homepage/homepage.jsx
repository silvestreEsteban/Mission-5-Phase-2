import Navbar from "../navbar/navbar";
import SearchComponent from "../search-component/search-component";
// import ComparisonPage from "../Comparisons/ComparisonPage";
import Footer from "../Footer/footer";
import '../App.css';
import styles from '../components/productListingContent/productListing.module.css';

const Homepage = () => {
    return (
        <>
        <div className="layout-main-page">
        <Navbar />
        <SearchComponent />
        {/* <ComparisonPage /> */}
        <div className={styles.ToSetFooter}>
        <Footer />
        </div>
        </div>
        </>
    )
}

export default Homepage;