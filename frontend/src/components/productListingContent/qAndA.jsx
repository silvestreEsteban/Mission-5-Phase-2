import styles from './qAndA.module.css';
import { pinkIconSVG, greyIconSVG, yellowIconSVG, leftPolygonSVG, rightPolygonSVG } from './productListingSVG';
import pickleRick from '../../images/pickle-rick.png';
export default function QAndA() {
    return (
       <>
        <div id={styles.Buttons}><button id={styles.Button1}>Q & A</button><button id={styles.Button2}>Seller Information</button></div>
       <div id={styles.QAndA}>
            <div id={styles.Column1}><div className={styles.TextBox}>Are the cats included?</div>{rightPolygonSVG()} <span>{yellowIconSVG()}<h2 id={styles.C}>C</h2></span></div>
            <div id={styles.Column2}><span>{pinkIconSVG()}<img className={styles.pickleRick} id={styles.pickle1} src={pickleRick}></img></span>{leftPolygonSVG()}<div className={styles.TextBox}>No sorry :c</div></div>
            <div id={styles.Column3}><div className={styles.TextBox}>What is the brand?</div>{rightPolygonSVG()} <span>{greyIconSVG()}<h2 id={styles.N}>N</h2></span></div>
            <div id={styles.Column4}><span>{pinkIconSVG()}<img className={styles.pickleRick} id={styles.pickle2} src={pickleRick}></img></span>{leftPolygonSVG()}<div className={styles.TextBox}>Not sure, we bought it from Smith`s</div></div>
            <div id={styles.Column5}><div className={styles.TextBox}>Thanks</div> {rightPolygonSVG()}<span>{greyIconSVG()}<h2 id={styles.N2}>N</h2></span></div>
            <button id={styles.AskAQuestion}>Ask a Question</button>

        </div>
        </>
    )
}