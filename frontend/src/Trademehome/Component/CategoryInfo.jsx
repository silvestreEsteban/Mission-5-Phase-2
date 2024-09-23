import styles from "./CategoryInfo.module.css";

export default function CategoryInfo() {
  return (
    <div className={styles.outer}>
      <div>
        <div>
          <div className={styles.trending}>Trending</div>
          <div className={styles.categories}>Categories</div>
        </div>

        <div className={styles.cataCardOuter}>
          <div className={styles.category1}>

            <div className={styles.dresses}>60,3144+ Dresses</div>
            <div className={ styles.market1}>Marketplace / Clothing & Fashion / Women / Dresses</div>
          </div>

          <div className={styles.category2}>

            <div className={styles.handbags}>6,043+ Handbags</div>
            <div className={styles.market2}>
              Marketplace /Clothing & Fashion /Women /Bags & handbags /Handbags
            </div>
          </div>

          <div className={styles.category3}>
            <div className={styles.concerts}>117+ Concerts</div>
            <div className={styles.market3}>
              Marketplace /Travel, events & activities /Event tickets /Concerts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
