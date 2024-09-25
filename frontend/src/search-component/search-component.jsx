import styles from './search-component.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSearchClick = () => {
        if (inputValue === 'Sofa Bed') {
            navigate('/CategoryListing')
        }
    };
    return (
        <div className={styles.SearchComponent}>
            <div className={styles.FindYourNewText}><p>KIA ORA! READY TO FIND YOUR NEW?</p></div>
            <div className={styles.SearchBar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" id={styles.SearchIcon}viewBox="0 0 64 64" fill="none">
<path d="M57.0863 52.6738L45.325 40.9125C48.1567 37.143 49.6852 32.5546 49.68 27.84C49.68 15.7975 39.8825 6 27.84 6C15.7975 6 6 15.7975 6 27.84C6 39.8825 15.7975 49.68 27.84 49.68C32.5546 49.6852 37.143 48.1567 40.9125 45.325L52.6738 57.0863C53.2691 57.6184 54.0456 57.9025 54.8438 57.8802C55.6421 57.8579 56.4015 57.5308 56.9661 56.9661C57.5308 56.4015 57.8579 55.6421 57.8802 54.8438C57.9025 54.0456 57.6184 53.2691 57.0863 52.6738ZM12.24 27.84C12.24 24.7546 13.1549 21.7385 14.8691 19.1731C16.5832 16.6077 19.0196 14.6082 21.8701 13.4275C24.7207 12.2468 27.8573 11.9378 30.8834 12.5398C33.9095 13.1417 36.6892 14.6274 38.8709 16.8091C41.0526 18.9908 42.5383 21.7705 43.1403 24.7966C43.7422 27.8227 43.4333 30.9593 42.2525 33.8099C41.0718 36.6604 39.0723 39.0968 36.5069 40.8109C33.9415 42.5251 30.9254 43.44 27.84 43.44C23.7041 43.435 19.7391 41.7899 16.8146 38.8654C13.8901 35.9409 12.245 31.9759 12.24 27.84Z" fill="#76716D"/>
</svg>
                <input type="text" placeholder="Search all of Trade Me" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleSearchClick}>Search</button>
        </div>
        </div>
    )
}

export default SearchComponent;