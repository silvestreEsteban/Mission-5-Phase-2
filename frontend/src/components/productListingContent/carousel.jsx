import styles from './carousel.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Carousel() {
    const [mainImage, setMainImage] = useState(null);
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/carouselImages');
            setMainImage(response.data[0].image);
            setImages(response.data);
        } catch (error) {
            console.log('Error fetching carousel images', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

   const handleImageClick = (image) => {
    setMainImage(image);
   }

   const handleLeftArrowClick = () => {
    const currentIndex = images.findIndex((image) => image.image === mainImage);
    if (currentIndex === 0) {
        setMainImage(images[images.length - 1].image);
    } else {
        setMainImage(images[currentIndex - 1].image);
    }
}

    const handleRightArrowClick = () => {
        const currentIndex = images.findIndex((image) => image.image === mainImage);
        if (currentIndex === images.length - 1) {
            setMainImage(images[0].image);
        } else {
            setMainImage(images[currentIndex + 1].image);
        }
    }
    return (
        <>
          <div className={styles.MainCarouselImage}>
          {mainImage && <img src={mainImage} alt="main carousel" />}
          <span id={styles.CarouselLeftArrow} onClick={() => handleLeftArrowClick()}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="37" viewBox="0 0 21 37" fill="none">
<path d="M16.0561 10.6239L14.2811 9.03745L4.61316 17.6836C4.45732 17.8221 4.33364 17.9869 4.24924 18.1683C4.16485 18.3498 4.1214 18.5444 4.1214 18.741C4.1214 18.9375 4.16485 19.1321 4.24924 19.3136C4.33364 19.4951 4.45732 19.6598 4.61316 19.7984L14.2811 28.449L16.0545 26.8625L6.98038 18.7432L16.0561 10.6239Z" fill="white"/>
</svg></span>
          <span id={styles.CarouselRightArrow} onClick={() => handleRightArrowClick()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="37" viewBox="0 0 21 37" fill="none">
  <path d="M4.94357 10.6239L6.71857 9.03745L16.3865 17.6836C16.5424 17.8221 16.6661 17.9869 16.7505 18.1683C16.8348 18.3498 16.8783 18.5444 16.8783 18.741C16.8783 18.9375 16.8348 19.1321 16.7505 19.3136C16.6661 19.4951 16.5424 19.6598 16.3865 19.7984L6.71857 28.449L4.94524 26.8625L14.0193 18.7432L4.94357 10.6239Z" fill="white"/>
</svg>
          </span>
          </div>
            <div className={styles.BelowMainCarouselImage}>44 others added this to their watchlist <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 15 16" fill="none">
<path d="M6.75 11.75H8.25V7.25H6.75V11.75ZM7.5 5.75C7.7125 5.75 7.89075 5.678 8.03475 5.534C8.17875 5.39 8.2505 5.212 8.25 5C8.2495 4.788 8.1775 4.61 8.034 4.466C7.8905 4.322 7.7125 4.25 7.5 4.25C7.2875 4.25 7.1095 4.322 6.966 4.466C6.8225 4.61 6.7505 4.788 6.75 5C6.7495 5.212 6.8215 5.39025 6.966 5.53475C7.1105 5.67925 7.2885 5.751 7.5 5.75ZM7.5 15.5C6.4625 15.5 5.4875 15.303 4.575 14.909C3.6625 14.515 2.86875 13.9807 2.19375 13.3062C1.51875 12.6317 0.9845 11.838 0.591001 10.925C0.197501 10.012 0.000500949 9.037 9.49366e-07 8C-0.00049905 6.963 0.196501 5.988 0.591001 5.075C0.9855 4.162 1.51975 3.36825 2.19375 2.69375C2.86775 2.01925 3.6615 1.485 4.575 1.091C5.4885 0.697 6.4635 0.5 7.5 0.5C8.5365 0.5 9.51149 0.697 10.425 1.091C11.3385 1.485 12.1322 2.01925 12.8062 2.69375C13.4802 3.36825 14.0147 4.162 14.4097 5.075C14.8047 5.988 15.0015 6.963 15 8C14.9985 9.037 14.8015 10.012 14.409 10.925C14.0165 11.838 13.4822 12.6317 12.8062 13.3062C12.1302 13.9807 11.3365 14.5152 10.425 14.9097C9.51349 15.3042 8.5385 15.501 7.5 15.5Z" fill="white"/>
</svg></div>
<div className={styles.CarouselSubImages}>
    {images.map((image, index) => (
        <div key={index} className={styles.SubImage}>
            <img src={image.image} alt={`Sub Carousel ${index}`} onClick={() => handleImageClick(image.image)} />
        </div>
    ))}
</div>
        </>
    )
}