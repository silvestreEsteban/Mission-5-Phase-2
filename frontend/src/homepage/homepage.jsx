import Navbar from "../navbar/navbar";
import SearchComponent from "../search-component/search-component";
// import ComparisonPage from "../Comparisons/ComparisonPage";
import Footer from "../Footer/footer";

const Homepage = () => {
    return (
        <>
        <Navbar />
        <SearchComponent />
        {/* <ComparisonPage /> */}
        <Footer />
        </>
    )
}

export default Homepage;