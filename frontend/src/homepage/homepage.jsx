import Navbar from "../navbar/navbar";
import SearchComponent from "../search-component/search-component";
import CategoryComponent from "../category-component/category-component";

import Footer from "../Footer/footer";

const Homepage = () => {
    return (
        <>
        <Navbar />
        <SearchComponent />
        {/* <CategoryComponent /> */}

        <Footer />
        </>
    )
}

export default Homepage;