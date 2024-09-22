import Navbar from "../navbar/navbar";
import RedNavbar from "../components/redNavbar/RedNavbar";
import IntroSpace from "./IntroSpace";
import GetComparison from "./GetComparison";
import Footer from "../Footer/footer";



const ComparisonPage = () => {
  return (
    <>
    <div>
        <Navbar />
        <RedNavbar />
        <IntroSpace />
        <GetComparison />
        <Footer />
    </div>
    </>
  )
}

export default ComparisonPage;