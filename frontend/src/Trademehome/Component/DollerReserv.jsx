import { useState, useEffect } from "react";
import styles from "./DollerReserv.module.css";
import ItemList from "./ItemList";
function DollerReserv() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    // ===Fetching the Item list===//
    function fetchitemList() {
      fetch("http://localhost:3000/api/getProductsForReserve")
        .then((res) => res.json())
        .then((jsondata) => setItemList(jsondata));
      console.log(itemList);
    }
    fetchitemList();
  }, []);

  return (
    <div className={styles.dollarReserveComponent}>
      <div>
        <div className={styles.dollerReserv}>$1 Reserve</div>
        <div className={styles.reserv}>
          {itemList.map((item, index) => (
            <ItemList key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DollerReserv;
