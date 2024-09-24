import Navbar from "../navbar/navbar";
import RedNavbar from "../components/redNavbar/RedNavbar";
import IntroSpace from "./comparisonComponents/IntroSpace";
import GetComparison from "./comparisonComponents/GetComparisonComponent";
import AddToCompare from "./comparisonComponents/AddToCompare";
import Footer from "../Footer/footer";
import myStyles from "./Comparison.module.css"



const ComparisonPage = () => {
  return (
    <>
    <div className={myStyles.PageContainer}>
        <Navbar />
        <RedNavbar />
        <IntroSpace />
        <GetComparison />
        <AddToCompare />
        <div className={myStyles.ToSetFooter}
        ><Footer />
        </div>
        
    </div>
    </>
  )
}

export default ComparisonPage;