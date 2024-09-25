import ItemList from "../Trademehome/Component/ItemList";
import { useState, useEffect } from "react";
import styles from "./ComparisonPopUp.module.css";
import ComparisonImage from "./ComparisonImage";
import ComparisonDetails from "./ComparisonDetails";

function ComparisonPopUp() {
  const [productList, setProductList] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [plusPop, setPlusPop] = useState(false);
  console.log(productList);
  const handleClickOpen = () => {
    setPopUp(!popUp);
  };
  const handleClickPlus = () => {
    setPlusPop(!plusPop);
  };

  useEffect(() => {
    // ===Fetching the Item list===//
    function fetchProductList() {
      fetch("http://localhost:3000/api/getProductsForReserve")
        .then((res) => res.json())
        .then((jsondata) => setProductList(jsondata));
      console.log(productList);
    }
    fetchProductList();
  }, []);

  return (
    <div className={styles.mainBody}>
      <div className={styles.mainBodyButton}>
        <button className={styles.sortButton}>
          Sort: Best match
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
          >
            <path
              d="M12.7501 2.62371L2.25007 2.62371C2.14376 2.62397 2.03956 2.64701 1.94868 2.69034C1.85779 2.73368 1.78367 2.79566 1.73429 2.86963C1.68491 2.9436 1.66214 3.02675 1.66843 3.11013C1.67472 3.19351 1.70983 3.27397 1.76999 3.34284L7.01999 9.30117C7.23757 9.54821 7.76141 9.54821 7.97957 9.30117L13.2296 3.34284C13.2903 3.27411 13.326 3.19362 13.3326 3.1101C13.3392 3.02658 13.3166 2.94322 13.2672 2.8691C13.2178 2.79497 13.1434 2.73291 13.0523 2.68964C12.9611 2.64638 12.8566 2.62358 12.7501 2.62371Z"
              fill="#007ACD"
            />
          </svg>{" "}
        </button>
        <button className={styles.listButton}>List</button>
        <button className={styles.galleryButton}>Gallery </button>
      </div>

      {/* popup button */}

      <div className={styles.showingResult}>
        <div className={styles.resulttext}>Showing 1,134 results for “sofa beds”</div>
        <button
          onClick={handleClickOpen}
          className={styles.compareListingButton}
        >
          Compare Listings
        </button>
      </div>
      <div>
        <div className={styles.resultBar}>
          <div>Sponsored Listing</div>
          <div>Start comparing by selecting on your favourite listings</div>
        </div>

        <div className={styles.listing}>
          {productList.map((item, index) => (
            <ItemList key={index} item={item} />
          ))}
        </div>
        {popUp ? (
          <div>
             {/* popup */}
            <div>
              <div className={styles.popUp}>
                
              <button className={styles.plusButton} onClick={handleClickPlus}>
                   
                 
                   {plusPop?
                   <img src="./Image/icons/Vector.svg"/>:
                   <img src="./Image/icons/AddButton.png"/>
}
                 </button>
                <div>
                  {plusPop?
                  <div className={styles.popUpPlus}>
                  
                  <div className={styles.compareListingOuter}>
                    <div className={styles.compareListing}> 
                      <img src="./Image/icons/Compare.svg"/>
                       Compare all listings</div>
                       
                       </div>
                  <div className={styles.comparisonDetails}>
                      {productList.map((item, index) => (
                    <ComparisonDetails  key={index} item={item} />
                  ))}
                     
                     
                     </div>

                  </div>
                 
                  :""

                  }
                

                  </div>
                <div className={styles.displayImage}>
                  {productList.map((item, index) => (
                    <ComparisonImage key={index} item={item} />
                  ))}{" "}
                  <div className={styles.dummyFrame}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="31"
                      viewBox="0 0 35 31"
                      fill="none"
                    >
                      <path
                        d="M0.5 4.87946C0.5 3.74282 0.947767 2.65273 1.7448 1.84901C2.54183 1.04528 3.62283 0.59375 4.75 0.59375H30.25C31.3772 0.59375 32.4582 1.04528 33.2552 1.84901C34.0522 2.65273 34.5 3.74282 34.5 4.87946V26.308C34.5 27.4447 34.0522 28.5348 33.2552 29.3385C32.4582 30.1422 31.3772 30.5938 30.25 30.5938H4.75C3.62283 30.5938 2.54183 30.1422 1.7448 29.3385C0.947767 28.5348 0.5 27.4447 0.5 26.308V4.87946ZM2.625 24.1652V26.308C2.625 26.8764 2.84888 27.4214 3.2474 27.8233C3.64591 28.2251 4.18641 28.4509 4.75 28.4509H30.25C30.8136 28.4509 31.3541 28.2251 31.7526 27.8233C32.1511 27.4214 32.375 26.8764 32.375 26.308V18.808L24.3489 14.6359C24.1496 14.5352 23.924 14.5003 23.7039 14.5361C23.4839 14.5718 23.2806 14.6765 23.1227 14.8352L15.239 22.7852L9.5865 18.988C9.38241 18.851 9.13762 18.7894 8.89362 18.8136C8.64962 18.8378 8.42143 18.9464 8.24775 19.1209L2.625 24.1652ZM13.25 10.2366C13.25 9.38413 12.9142 8.56656 12.3164 7.96376C11.7186 7.36097 10.9079 7.02232 10.0625 7.02232C9.21712 7.02232 8.40637 7.36097 7.8086 7.96376C7.21082 8.56656 6.875 9.38413 6.875 10.2366C6.875 11.0891 7.21082 11.9067 7.8086 12.5094C8.40637 13.1122 9.21712 13.4509 10.0625 13.4509C10.9079 13.4509 11.7186 13.1122 12.3164 12.5094C12.9142 11.9067 13.25 11.0891 13.25 10.2366Z"
                        fill="#44413D"
                      />
                    </svg>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.backToTopOuter}>
<div className={styles.backToTop}>1 2 3 4 5 6 ....21 Next

</div>
                </div>
    </div>
  );
}

export default ComparisonPopUp;
