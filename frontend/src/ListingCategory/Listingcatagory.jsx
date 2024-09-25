
import RedNavbar from "../components/redNavbar/RedNavbar";
import Footer from "../Footer/footer";
import Navbar from "../navbar/navbar";
import ComparisonPopUp from "./ComparisonPopUp";
import SearchBar from "./SearchBar";
import syles from './ListingCatagory.module.css'



function ListingCatagory() {
  
  return (
    <div className={StyleSheet.listing}>
    <Navbar/>
    <RedNavbar />
      <SearchBar/>
      
<ComparisonPopUp/>
<Footer/>

    </div>
  )
}

export default ListingCatagory;