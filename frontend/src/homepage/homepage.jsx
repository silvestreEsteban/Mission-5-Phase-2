import Navbar from "../navbar/navbar";
import SearchComponent from "../search-component/search-component";
import CategoryInfo from '../Trademehome/Component/CategoryInfo'
import DollerReserv from '../Trademehome/Component/DollerReserv'
import LinkImage from '../Trademehome/Component/LinkImage'
// import ComparisonPage from "../Comparisons/ComparisonPage";
import Footer from "../Footer/footer";
import '../App.css';
import styles from '../components/productListingContent/productListing.module.css';
import CategoryComponent from "../category-component/category-component";

const Homepage = () => {
    return (
        <>
        <div className="layout-main-page">
           
        <Navbar />
        <SearchComponent />
        <CategoryComponent />
        {/* Center portion */}
        <LinkImage/>
        <CategoryInfo/>
        
        <DollerReserv/>

        {/* <ComparisonPage /> */}
        <div className={styles.ToSetFooter}>
        <Footer />
        </div>
        </div>
        
        </>
    )
}

export default Homepage;