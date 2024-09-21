import Navbar from "../navbar/navbar"
import CompareListing from "./ParsedComparison"
import ListingDetails from "./GetComparison"
import Footer from "../Footer/footer"


const comparisonPage = () => {
  return (
    <>
    <div>
        <Navbar />
        <CompareListing />
        <ListingDetails />Honestly It's here
        <Footer />
    </div>
    </>
  )
}

export default comparisonPage;