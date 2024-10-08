import { Link } from "react-router-dom";
import myStyles from "./GetComparisonComponent.module.css"

const IntroSpace = () => {
  return (
    <>
    <div className={myStyles.SpaceContainer}>
    <div>
        <h1>Compare Listings</h1>
        <p>Easily Compare up to 5 listings. Add or remove listings to make the best choice.</p>
    </div>
    <div>
    <button className={myStyles.ReturnButton} ><Link to="/"><h2 >Return</h2></Link></button>
    </div>
    </div>
    </>
  )
}

export default IntroSpace