import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/homepage/homepage';
import ComparisonPage from "../src/comparisons/ComparisonPage/";
import ProductListing from '../src/pages/productListing/productListing';
import '../src/App.css';
import Listingcatagory from "../src/ListingCategory/Listingcatagory";

function Routing() {
    return (
        
        <Router>
            <Routes>
                {/* <Route path="/watchlist" element={<Watchlist />} /> */}
                <Route path="/ComparisonPage" element={<ComparisonPage />} />
                <Route path="/" element={<Homepage />} /> {/* Default route */}
                <Route path="/productListing" element={<ProductListing />} />
                <Route path="/CategoryListing" element={<Listingcatagory />} />
            </Routes>
        </Router>
        
    );
}

export default Routing;