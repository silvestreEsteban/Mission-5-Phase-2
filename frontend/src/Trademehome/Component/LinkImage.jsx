import styles from "./LinkImage.module.css";

export default function LinkImage() {
  return (
    <div className={styles.outerLink}>
      <div className={styles.firstLink}>
        <div className={styles.textDiv1}>
          <div className={styles.property}>Property</div>
          <div className={styles.open}>Open Endless Doors</div>
          <button className={styles.button1}>Search now</button>
        </div>
        <div>
        <img className={styles.firstImg} src="./Image/linkimg1.png " alt="" />

        </div>
      </div>

      <div className={styles.secondLink}>
        <div className={styles.textDiv2}>
         
          <div className={styles.featured}>Featured</div>
          <div className={styles.rare}>Rare Antiques & Collectibles</div>
          <button className={styles.button2}>Explore now</button>
        </div>

        <img className={styles.secondImg} src=" ./Image/linkimg2.png " alt="" />
      </div>

      <div className={styles.thirdLink}>
        <div className={styles.textDiv3}>
          <div className={styles.trending}>Trending</div>
          <div className={styles.shop}> Shop top pre-loved brands!</div>
          <button className={styles.button3}>Shop now</button>
        </div>
        <img className={styles.thirdImg} src="./Image/linkimg3.png " alt="" />
      </div>
    </div>
  );
}
