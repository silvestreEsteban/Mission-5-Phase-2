
import styles from'./searchBar.module.css'



function SearchBar() {
  return (
    <div>
      {/* <img src="../image/icon/search.png" alt="" /> */}
      <input  className={styles.search} type="text" placeholder="Search" name="search"></input>
   
   <button className={styles.button1}>Refine</button>
   <button className={styles.button2}>Category: Sofa beds</button>
   <button className={styles.button3}>All locations</button>
   <button className={styles.button4}>New & Used</button>
   <button className={styles.button5}>Shipping: All</button>
   <button className={styles.button6}>Price: Any</button>
   
   
   
   
   
    </div>
  )
}

export default SearchBar;