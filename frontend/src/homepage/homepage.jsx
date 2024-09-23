import Navbar from "../navbar/navbar";
import SearchComponent from "../search-component/search-component";
import CategoryInfo from '../Trademehome/Component/CategoryInfo'
import DollerReserv from '../Trademehome/Component/DollerReserv'
import LinkImage from '../Trademehome/Component/LinkImage'
// import ComparisonPage from "../Comparisons/ComparisonPage";
import Footer from "../Footer/footer";

const Homepage = () => {
    return (
        <>
        <Navbar />
        <SearchComponent />

        {/* Center portion */}
        <LinkImage/>
        <CategoryInfo/>
        
        <DollerReserv/>

        {/* <ComparisonPage /> */}
        <Footer />
        </>
    )
}

export default Homepage;