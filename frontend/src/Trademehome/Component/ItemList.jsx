import styles from "./ItemList.module.css";

export default function ItemList({ item }) {
  return (
    <div className={styles.body}>
      
       <img className={styles.watchList} src="./Image/icons/watchList.png" />
    <div className={styles.Card}>
      
     
      <img className={styles.cardImage} src={item.image} alt="" />
      
      <div className={styles.itemDetails}>
       
        <div className={styles.textAllign}>
          <div className={styles.location}>{item.location}</div>
          <div className={styles.closes}>closes:</div>
        </div>
        <div className={styles.itemTitle}>{item.title}</div>
        <div className={styles.shipping}>Free shipping</div>
        <div className={styles.reserveText}>No reserve</div>
        <div className={styles.dollerOne}>$1.00</div>
      </div>
    </div>
    </div>
  );
}
