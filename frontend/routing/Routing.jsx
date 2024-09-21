import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Homepage from '../src/homepage/homepage';
import ProductListing from '../src/pages/productListing/productListing';
import '../src/App.css';

function Routing() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/watchlist" element={<Watchlist />} /> */}
                {/* <Route path="/comparisonPage" element={<ComparisonPage />} /> */}
                <Route path="/" element={<Homepage />} /> {/* Default route */}
                <Route path="/productListing" element={<ProductListing />} />
            </Routes>
        </Router>
    );
}

export default Routing;