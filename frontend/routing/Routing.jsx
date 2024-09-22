
import ComparisonPage from "../src/comparisons/ComparisonPage/";
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Homepage from '../src/homepage/homepage';
import ProductListing from '../src/pages/productListing/productListing';


function Routing() {
    return (
        
        <Router>
            <Routes>
                <Route path="/ComparisonPage" element={<ComparisonPage />} />
                <Route path="/" element={<Homepage />} /> {/* Default route */}
                <Route path="/productListing" element={<ProductListing />} />

            </Routes>
        </Router>
        
    );
}

export default Routing;