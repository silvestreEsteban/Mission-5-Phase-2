import Navbar from "../navbar/navbar";
// import CompareListing from "./ParsedComparison"
import GetComparison from "./GetComparison";
import Footer from "../Footer/footer";



const ComparisonPage = () => {
  return (
    <>
    <div>
        <Navbar />
        {/* <CompareListing /> */}
        <GetComparison />
        <Footer />
    </div>
    </>
  )
}

export default ComparisonPage;