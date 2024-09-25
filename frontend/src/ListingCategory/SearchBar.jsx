
import styles from'./searchBar.module.css'



function SearchBar() {
  return (
    <div className={styles.searchBody}>
     {/* searchbar */}
      <div className={styles.SearchBar}>
     <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className={styles.SearchIcon} viewBox="0 0 64 64" fill="none">
<path d="M57.0863 52.6738L45.325 40.9125C48.1567 37.143 49.6852 32.5546 49.68 27.84C49.68 15.7975 39.8825 6 27.84 6C15.7975 6 6 15.7975 6 27.84C6 39.8825 15.7975 49.68 27.84 49.68C32.5546 49.6852 37.143 48.1567 40.9125 45.325L52.6738 57.0863C53.2691 57.6184 54.0456 57.9025 54.8438 57.8802C55.6421 57.8579 56.4015 57.5308 56.9661 56.9661C57.5308 56.4015 57.8579 55.6421 57.8802 54.8438C57.9025 54.0456 57.6184 53.2691 57.0863 52.6738ZM12.24 27.84C12.24 24.7546 13.1549 21.7385 14.8691 19.1731C16.5832 16.6077 19.0196 14.6082 21.8701 13.4275C24.7207 12.2468 27.8573 11.9378 30.8834 12.5398C33.9095 13.1417 36.6892 14.6274 38.8709 16.8091C41.0526 18.9908 42.5383 21.7705 43.1403 24.7966C43.7422 27.8227 43.4333 30.9593 42.2525 33.8099C41.0718 36.6604 39.0723 39.0968 36.5069 40.8109C33.9415 42.5251 30.9254 43.44 27.84 43.44C23.7041 43.435 19.7391 41.7899 16.8146 38.8654C13.8901 35.9409 12.245 31.9759 12.24 27.84Z" fill="#76716D"/>
</svg>
                <input type="text" placeholder="Search all of Trade Me" />
                {/* <button onClick={() => navigate("/CategoryListing")}>Search</button> */}
     </div>
{/* Buttons */}
   <div className={styles.buttonOuter}>
   <button className={styles.button1}>
   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<path d="M11.6665 4.58337H6.4165M8.1665 10.4167H2.9165" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.9165 12.1667C10.883 12.1667 11.6665 11.3832 11.6665 10.4167C11.6665 9.45025 10.883 8.66675 9.9165 8.66675C8.95001 8.66675 8.1665 9.45025 8.1665 10.4167C8.1665 11.3832 8.95001 12.1667 9.9165 12.1667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08325 6.33337C5.04975 6.33337 5.83325 5.54987 5.83325 4.58337C5.83325 3.61688 5.04975 2.83337 4.08325 2.83337C3.11675 2.83337 2.33325 3.61688 2.33325 4.58337C2.33325 5.54987 3.11675 6.33337 4.08325 6.33337Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    
    Refine
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
<g clip-path="url(#clip0_955_938)">
<path d="M8.75009 2.16663L1.25009 2.16663C1.17415 2.16682 1.09972 2.18358 1.0348 2.21509C0.969888 2.24661 0.916944 2.29169 0.881671 2.34548C0.8464 2.39928 0.830134 2.45975 0.834627 2.52039C0.83912 2.58103 0.864201 2.63955 0.90717 2.68963L4.65717 7.02297C4.81259 7.20263 5.18675 7.20263 5.34259 7.02297L9.09259 2.68963C9.13599 2.63965 9.16145 2.58111 9.16618 2.52037C9.17092 2.45962 9.15476 2.39901 9.11946 2.3451C9.08415 2.29119 9.03105 2.24605 8.96593 2.21458C8.90081 2.18312 8.82616 2.16654 8.75009 2.16663Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_955_938">
<rect width="10" height="8" fill="white" transform="translate(10 8.5) rotate(180)"/>
</clipPath>
</defs>
</svg>
    </button>



   <button className={styles.button2}>Category: Sofa beds
   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
<g clip-path="url(#clip0_955_188)">
<path d="M8.75009 1.66669L1.25009 1.66669C1.17415 1.66688 1.09972 1.68364 1.0348 1.71515C0.969888 1.74667 0.916944 1.79175 0.881671 1.84554C0.8464 1.89934 0.830134 1.95981 0.834627 2.02045C0.83912 2.0811 0.864201 2.13961 0.90717 2.18969L4.65717 6.52303C4.81259 6.70269 5.18675 6.70269 5.34259 6.52303L9.09259 2.18969C9.13599 2.13971 9.16145 2.08117 9.16618 2.02043C9.17092 1.95969 9.15476 1.89907 9.11946 1.84516C9.08415 1.79125 9.03105 1.74611 8.96593 1.71464C8.90081 1.68318 8.82616 1.6666 8.75009 1.66669Z" fill="#006EBD"/>
</g>
<defs>
<clipPath id="clip0_955_188">
<rect width="10" height="8" fill="white" transform="translate(10 8) rotate(180)"/>
</clipPath>
</defs>
</svg>
   </button>


   <button className={styles.button3}>All locations
   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
<g clip-path="url(#clip0_955_1473)">
<path d="M8.75009 1.66669L1.25009 1.66669C1.17415 1.66688 1.09972 1.68364 1.0348 1.71515C0.969888 1.74667 0.916944 1.79175 0.881671 1.84554C0.8464 1.89934 0.830134 1.95981 0.834627 2.02045C0.83912 2.0811 0.864201 2.13961 0.90717 2.18969L4.65717 6.52303C4.81259 6.70269 5.18675 6.70269 5.34259 6.52303L9.09259 2.18969C9.13599 2.13971 9.16145 2.08117 9.16618 2.02043C9.17092 1.95969 9.15476 1.89907 9.11946 1.84516C9.08415 1.79125 9.03105 1.74611 8.96593 1.71464C8.90081 1.68318 8.82616 1.6666 8.75009 1.66669Z" fill="#006EBD"/>
</g>
<defs>
<clipPath id="clip0_955_1473">
<rect width="10" height="8" fill="white" transform="translate(10 8) rotate(180)"/>
</clipPath>
</defs>
</svg>
   </button>


   <button className={styles.button4}>New & Used
   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
<g clip-path="url(#clip0_955_793)">
<path d="M8.75009 1.66669L1.25009 1.66669C1.17415 1.66688 1.09972 1.68364 1.0348 1.71515C0.969888 1.74667 0.916944 1.79175 0.881671 1.84554C0.8464 1.89934 0.830134 1.95981 0.834627 2.02045C0.83912 2.0811 0.864201 2.13961 0.90717 2.18969L4.65717 6.52303C4.81259 6.70269 5.18675 6.70269 5.34259 6.52303L9.09259 2.18969C9.13599 2.13971 9.16145 2.08117 9.16618 2.02043C9.17092 1.95969 9.15476 1.89907 9.11946 1.84516C9.08415 1.79125 9.03105 1.74611 8.96593 1.71464C8.90081 1.68318 8.82616 1.6666 8.75009 1.66669Z" fill="#006EBD"/>
</g>
<defs>
<clipPath id="clip0_955_793">
<rect width="10" height="8" fill="white" transform="translate(10 8) rotate(180)"/>
</clipPath>
</defs>
</svg>
   </button>


   <button className={styles.button5}>Shipping: All
   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
<g clip-path="url(#clip0_955_1778)">
<path d="M8.75009 1.66669L1.25009 1.66669C1.17415 1.66688 1.09972 1.68364 1.0348 1.71515C0.969888 1.74667 0.916944 1.79175 0.881671 1.84554C0.8464 1.89934 0.830134 1.95981 0.834627 2.02045C0.83912 2.0811 0.864201 2.13961 0.90717 2.18969L4.65717 6.52303C4.81259 6.70269 5.18675 6.70269 5.34259 6.52303L9.09259 2.18969C9.13599 2.13971 9.16145 2.08117 9.16618 2.02043C9.17092 1.95969 9.15476 1.89907 9.11946 1.84516C9.08415 1.79125 9.03105 1.74611 8.96593 1.71464C8.90081 1.68318 8.82616 1.6666 8.75009 1.66669Z" fill="#006EBD"/>
</g>
<defs>
<clipPath id="clip0_955_1778">
<rect width="10" height="8" fill="white" transform="translate(10 8) rotate(180)"/>
</clipPath>
</defs>
</svg>
   </button>


   <button className={styles.button6}>Price: Any
   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
<g clip-path="url(#clip0_955_2608)">
<path d="M8.75009 1.66669L1.25009 1.66669C1.17415 1.66688 1.09972 1.68364 1.0348 1.71515C0.969888 1.74667 0.916944 1.79175 0.881671 1.84554C0.8464 1.89934 0.830134 1.95981 0.834627 2.02045C0.83912 2.0811 0.864201 2.13961 0.90717 2.18969L4.65717 6.52303C4.81259 6.70269 5.18675 6.70269 5.34259 6.52303L9.09259 2.18969C9.13599 2.13971 9.16145 2.08117 9.16618 2.02043C9.17092 1.95969 9.15476 1.89907 9.11946 1.84516C9.08415 1.79125 9.03105 1.74611 8.96593 1.71464C8.90081 1.68318 8.82616 1.6666 8.75009 1.66669Z" fill="#006EBD"/>
</g>
<defs>
<clipPath id="clip0_955_2608">
<rect width="10" height="8" fill="white" transform="translate(10 8) rotate(180)"/>
</clipPath>
</defs>
</svg>
   </button>
   
   

   </div>
  
   
   
   
    </div>
  )
}

export default SearchBar;