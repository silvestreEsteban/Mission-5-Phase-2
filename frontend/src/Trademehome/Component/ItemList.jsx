import styles from "./ItemList.module.css";

export default function ItemList({ item }) {
  return (
    <div className={styles.body}>
      
       <img className={styles.watchList} src="./Image/icons/watchList.png" />
    <div className={styles.Card}>
      
     
      <img className={styles.cardImage} src={item.image} alt="" />
      
      <div className={styles.itemDetails}>
       
        <div className={styles.textAllign}>
          <div>{item.location}</div>
          <div>closes:</div>
        </div>
        <div className={styles.itemTitle}>{item.title}</div>
        <div className={styles.shipping}>Free shipping</div>
        <div className={styles.reserveText}>No reserve</div>
        <div>$1.00</div>
      </div>
    </div>
    </div>
  );
}
