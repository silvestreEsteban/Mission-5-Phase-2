import styles from './ComparisonImage.module.css'

export default function ComparisonImage({item}) {
  return (
    <div >
   
        <img className={styles.imagestyle} src={item.image} alt="" />
        <div>Sofa Bed</div>
        </div>
  )
}

