import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/navbar/navbar'; 
import Homepage from '../src/homepage/homepage';
// import Watchlist from './Watchlist';
import ComparisonPage from '../src/ComparisonPage/comparrisonPage';

function Routing() {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
                {/* <Route path="/watchlist" element={<Watchlist />} /> */}
                <Route path="/comparissonPage" element={<ComparisonPage />} />
                <Route path="/" element={<Homepage />} /> {/* Default route */}
            </Routes>
        </Router>
    );
}

export default Routing;