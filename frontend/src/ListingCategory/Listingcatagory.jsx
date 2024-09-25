
import RedNavbar from "../components/redNavbar/RedNavbar";
import Footer from "../Footer/footer";
import Navbar from "../navbar/navbar";
import ComparisonPopUp from "./ComparisonPopUp";
import SearchBar from "./SearchBar";



function ListingCatagory() {
  
  return (
    <div>
    <Navbar/>
    <RedNavbar />
      <SearchBar/>
      
<ComparisonPopUp/>
<Footer/>

    </div>
  )
}

export default ListingCatagory;