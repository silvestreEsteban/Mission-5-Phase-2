 import ItemList from "../Trademehome/Component/ItemList";
 import { useState, useEffect } from "react";
 import styles from "./ComparisonPopUp.module.css";
 
 function ComparisonPopUp() {
  const[productList,setProductList]=useState([]);
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
    <div className={styles.dollarReserveComponent}>

   
    <div className={styles.layout}>
     
      <div className={styles.reserv}>
        {productList.map((item, index) => (
          <ItemList key={index} item={item} />
        ))}
      </div>

    </div>
  </div>
  )
}


export default ComparisonPopUp;