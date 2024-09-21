import styles from "./CategoryInfo.module.css";

export default function CategoryInfo() {
  return (
    <div className={styles.outer}>
      <div>
        <div>
          <div>Trending</div>
          <br />
          <div>Categories</div>
        </div>
        <br />

        <div className={styles.cataCardOuter}>
          <div className={styles.category1}>
            <br />

            <div>60,3144+ Dresses</div>
            <br />
            <div>Marketplace / Clothing & Fashion / Women / Dresses</div>
          </div>

          <div className={styles.category2}>
            <br />

            <div>6,043+ Handbags</div>
            <br />
            <div>
              Marketplace /Clothing & Fashion /Women /Bags & handbags /Handbags
            </div>
          </div>

          <div className={styles.category3}>
            <br />
            <div>117+ Concerts</div>
            <br />
            <div>
              Marketplace /Travel, events & activities /Event tickets /Concerts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
