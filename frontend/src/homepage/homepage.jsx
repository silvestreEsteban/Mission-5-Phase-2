import Navbar from "../navbar/navbar";
import SearchComponent from "../search-component/search-component";
import CategoryComponent from "../category-component/category-component";

const Homepage = () => {
    return (
        <>
        <Navbar />
        <SearchComponent />
        <CategoryComponent />
        </>
    )
}

export default Homepage;