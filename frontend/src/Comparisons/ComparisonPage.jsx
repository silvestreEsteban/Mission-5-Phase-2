import Navbar from "../navbar/navbar";
import RedNavbar from "../components/redNavbar/RedNavbar";
import IntroSpace from "./comparisonComponents/IntroSpace";
import GetComparison from "./comparisonComponents/GetComparisonComponent";
import AddCompare from "./comparisonComponents/AddCompareComponent";
import Footer from "../Footer/footer";
import myStyles from "./Comparison.module.css"



const ComparisonPage = () => {
  return (
    <>
    <div>
        <Navbar />
        <RedNavbar />
        <IntroSpace />
        <GetComparison />
        <AddCompare />
        <div className={myStyles.ToSetFooter}
        ><Footer />
        </div>
        
    </div>
    </>
  )
}

export default ComparisonPage;