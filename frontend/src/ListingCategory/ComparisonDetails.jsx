import styles from './ComparisonDetails.module.css'

export default function ComparisonDetails({item}) {
  return (
    <div>

<div className={styles.DetailsOuter}>
<div className={styles.ItemDetailsText}>
<div className={styles.titleOuter}>
<div className={styles.title}> {item.title}</div>

<div className={styles.time}> 05:06:20</div>
</div>


<div className={styles.progress}> Auction in progress</div>

<div className={styles.price}> <div id={styles.text}>Highest bid:$</div> {item.price} </div>

<div className={styles.location}><div id={styles.text}>Location:</div> {item.location}</div>

<div className={styles.pickUp}><div id={styles.text}>Shipping:</div>  Pick up only</div>
<div className={styles.condition}> <div id={styles.text}>Condition:</div> {item.condition}</div>
<div className={styles.size}> <div id={styles.text}>Type:</div> {item.size} </div>
<div className={styles.dimension}><div id={styles.text}>Dimension:</div> {item.dimensions}</div>
<div className={styles.colour}><div id={styles.text}>Colour:</div> {item.colour}</div>
</div>
<button className={styles.buttonView}>View listing</button>

</div>








    </div>
  )
}