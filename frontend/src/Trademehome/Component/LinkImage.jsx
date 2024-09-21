import styles from "./LinkImage.module.css";

export default function LinkImage() {
  return (
    <div className={styles.outerLink}>
      <div className={styles.firstLink}>
        <div className={styles.textDiv1}>
          <br />
          <div>Property</div>
          <br />
          <div>Open Endless</div>
          <div>Doors</div>
          <br />
          <button className={styles.button1}>Search now</button>
        </div>

        <img className={styles.firstImg} src="./Image/linkimg1.png " alt="" />
      </div>

      <div className={styles.secondLink}>
        <div className={styles.textDiv2}>
          <br />
          <div>Featured</div>
          <br />
          <div>Rare Antiques & Collectibles</div>
          <br />
          <button className={styles.button2}>Explore now</button>
        </div>

        <img className={styles.secondImg} src=" ./Image/linkimg2.png " alt="" />
      </div>

      <div className={styles.thirdLink}>
        <div className={styles.textDiv3}>
          <br />
          <div>Trending</div>
          <br />
          <h> Shop top preloved brands!</h>
          <br />
          <button className={styles.button3}>Shop now</button>
        </div>
        <img className={styles.thirdImg} src="./Image/linkimg3.png " alt="" />
      </div>
    </div>
  );
}
