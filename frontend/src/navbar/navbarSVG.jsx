import styles from './navbar.module.css';

const watchlistSVG = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" id={styles.WatchlistIcon} width="25" height="20" viewBox="0 0 70 70" fill="none">
<path d="M25.9204 19.6817C25.445 19.6817 24.9375 19.7283 24.4446 19.8479C23.9429 19.9675 22.7471 20.3292 22.0004 21.4871L21.9596 21.5454L20.1892 24.6079C19.2938 25.2058 18.6317 25.9496 18.1679 26.6992L18.1271 26.7575L10.6254 40.32C10.3254 40.7809 10.0584 41.2623 9.82627 41.7608L9.80877 41.79C9.10826 43.3202 8.74708 44.9838 8.75002 46.6667C8.75002 49.7609 9.97918 52.7283 12.1671 54.9163C14.355 57.1042 17.3225 58.3333 20.4167 58.3333C23.5109 58.3333 26.4783 57.1042 28.6663 54.9163C30.8542 52.7283 32.0833 49.7609 32.0833 46.6667V43.75H37.9167V46.6667C37.917 48.4103 38.3081 50.1317 39.0612 51.7042C39.8144 53.2768 40.9104 54.6605 42.2688 55.7537C43.6271 56.8469 45.2132 57.6217 46.9105 58.0212C48.6077 58.4206 50.3729 58.4346 52.0763 58.062C53.7796 57.6895 55.3778 56.9398 56.7533 55.8683C58.1287 54.7967 59.2465 53.4305 60.0245 51.87C60.8024 50.3096 61.2207 48.5946 61.2485 46.8512C61.2764 45.1078 60.9131 43.3803 60.1854 41.7958L60.1738 41.7608C59.9417 41.2623 59.6746 40.7809 59.3746 40.32L51.8729 26.7575L51.8321 26.6992C51.319 25.8637 50.6291 25.1509 49.8108 24.6108L48.0404 21.5454L47.9996 21.4871C47.2529 20.3292 46.0542 19.9704 45.5554 19.8479C44.9212 19.7004 44.2681 19.6502 43.6188 19.6992C42.9361 19.7335 42.2648 19.8875 41.6354 20.1542C41.0988 20.3904 39.7746 21.1079 39.4363 22.7471L39.4158 22.855L39.0075 26.0633C38.3658 26.8888 37.9167 27.93 37.9167 29.1667V32.0833H32.0833V29.1667C32.0833 27.93 31.6342 26.8888 30.9954 26.0633L30.5871 22.855L30.5638 22.7471C30.2254 21.1079 28.9013 20.3904 28.3646 20.1542C27.7353 19.8875 27.0639 19.7335 26.3813 19.6992C26.2279 19.6873 26.0742 19.6814 25.9204 19.6817ZM20.4167 40.8333C21.6715 40.834 22.8926 41.2393 23.8988 41.989C24.905 42.7387 25.6427 43.7928 26.0022 44.995C26.3618 46.1972 26.3242 47.4832 25.8949 48.6623C25.4656 49.8414 24.6676 50.8506 23.6193 51.5402C22.5709 52.2298 21.3282 52.5629 20.0755 52.4902C18.8228 52.4175 17.627 51.9428 16.6655 51.1365C15.704 50.3303 15.0281 49.2355 14.7381 48.0147C14.4482 46.7939 14.5596 45.5121 15.0559 44.3596L15.61 43.3621C16.66 41.8367 18.4217 40.8333 20.4167 40.8333ZM49.5833 40.8333C51.5783 40.8333 53.34 41.8367 54.39 43.3621L54.9442 44.3596C55.4404 45.5121 55.5519 46.7939 55.2619 48.0147C54.9719 49.2355 54.296 50.3303 53.3345 51.1365C52.373 51.9428 51.1772 52.4175 49.9245 52.4902C48.6718 52.5629 47.4291 52.2298 46.3808 51.5402C45.3324 50.8506 44.5344 49.8414 44.1051 48.6623C43.6758 47.4832 43.6382 46.1972 43.9978 44.995C44.3574 43.7928 45.095 42.7387 46.1012 41.989C47.1074 41.2393 48.3286 40.834 49.5833 40.8333Z" fill="#76716D"/>
</svg>
    )
}

const compareSVG = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="11" viewBox="0 0 59 49" fill="none">
<path d="M8.06797 13.9056C11.4703 13.9056 14.2285 11.1522 14.2285 7.75585C14.2285 4.35945 11.4703 1.60612 8.06797 1.60612C4.66562 1.60612 1.90747 4.35945 1.90747 7.75585C1.90747 11.1522 4.66562 13.9056 8.06797 13.9056Z" fill="#595959" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.06797 30.7006C11.4703 30.7006 14.2285 27.9473 14.2285 24.5509C14.2285 21.1545 11.4703 18.4012 8.06797 18.4012C4.66562 18.4012 1.90747 21.1545 1.90747 24.5509C1.90747 27.9473 4.66562 30.7006 8.06797 30.7006Z" fill="#595959" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.06797 47.4934C11.4703 47.4934 14.2285 44.7401 14.2285 41.3437C14.2285 37.9473 11.4703 35.1939 8.06797 35.1939C4.66562 35.1939 1.90747 37.9473 1.90747 41.3437C1.90747 44.7401 4.66562 47.4934 8.06797 47.4934Z" fill="#595959" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M52.9755 2.98381H24.5473C22.1416 2.98381 20.1914 4.93062 20.1914 7.33212C20.1914 9.73363 22.1416 11.6804 24.5473 11.6804H52.9755C55.3813 11.6804 57.3315 9.73363 57.3315 7.33212C57.3315 4.93062 55.3813 2.98381 52.9755 2.98381Z" fill="#595959" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M52.9755 19.8242H24.5473C22.1416 19.8242 20.1914 21.771 20.1914 24.1725C20.1914 26.574 22.1416 28.5208 24.5473 28.5208H52.9755C55.3813 28.5208 57.3315 26.574 57.3315 24.1725C57.3315 21.771 55.3813 19.8242 52.9755 19.8242Z" fill="#595959" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M52.9755 37.4191H24.5473C22.1416 37.4191 20.1914 39.3659 20.1914 41.7674C20.1914 44.1689 22.1416 46.1157 24.5473 46.1157H52.9755C55.3813 46.1157 57.3315 44.1689 57.3315 41.7674C57.3315 39.3659 55.3813 37.4191 52.9755 37.4191Z" fill="#595959" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    )
}

const listingSVG = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 44 44" fill="none">
<path d="M6.20763 30.102L32.2112 4.09625C33.2386 3.11315 34.61 2.57136 36.0318 2.5869C37.4537 2.60244 38.8129 3.17407 39.8185 4.17939C40.8241 5.1847 41.3961 6.54379 41.412 7.96563C41.428 9.38747 40.8866 10.759 39.9038 11.7866L13.8959 37.7924C13.3026 38.3857 12.5469 38.7902 11.7241 38.9548L3.375 40.625L5.04525 32.2738C5.20983 31.451 5.61428 30.6953 6.20763 30.102Z" stroke="#76716D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.8125 9.8125L34.1875 16.1875" stroke="#76716D" strokeWidth="5"/>
</svg>
    )
}


const notificationSVG = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 52 52" fill="none">
<path d="M45.5 41.1667V43.3333H6.5V41.1667L10.8333 36.8333V23.8333C10.8333 17.1167 15.2317 11.2017 21.6667 9.29501V8.66668C21.6667 7.51741 22.1232 6.41521 22.9359 5.60255C23.7485 4.78989 24.8507 4.33334 26 4.33334C27.1493 4.33334 28.2515 4.78989 29.0641 5.60255C29.8768 6.41521 30.3333 7.51741 30.3333 8.66668V9.29501C36.7683 11.2017 41.1667 17.1167 41.1667 23.8333V36.8333L45.5 41.1667ZM30.3333 45.5C30.3333 46.6493 29.8768 47.7515 29.0641 48.5641C28.2515 49.3768 27.1493 49.8333 26 49.8333C24.8507 49.8333 23.7485 49.3768 22.9359 48.5641C22.1232 47.7515 21.6667 46.6493 21.6667 45.5" fill="#76716D"/>
</svg>
    )
}


const myTradeMeSVG = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" id={styles.MyTradeMeLogo} width="30" height="18" viewBox="0 0 45 45" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M30.6668 16.375C30.6668 18.5409 29.8064 20.6181 28.2749 22.1497C26.7433 23.6812 24.6661 24.5416 22.5002 24.5416C20.3342 24.5416 18.257 23.6812 16.7255 22.1497C15.1939 20.6181 14.3335 18.5409 14.3335 16.375C14.3335 14.209 15.1939 12.1318 16.7255 10.6003C18.257 9.06873 20.3342 8.20831 22.5002 8.20831C24.6661 8.20831 26.7433 9.06873 28.2749 10.6003C29.8064 12.1318 30.6668 14.209 30.6668 16.375ZM26.5835 16.375C26.5835 17.4579 26.1533 18.4966 25.3875 19.2623C24.6217 20.0281 23.5831 20.4583 22.5002 20.4583C21.4172 20.4583 20.3786 20.0281 19.6128 19.2623C18.847 18.4966 18.4168 17.4579 18.4168 16.375C18.4168 15.292 18.847 14.2534 19.6128 13.4876C20.3786 12.7219 21.4172 12.2916 22.5002 12.2916C23.5831 12.2916 24.6217 12.7219 25.3875 13.4876C26.1533 14.2534 26.5835 15.292 26.5835 16.375Z" fill="#76716D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.5001 0.0416565C10.097 0.0416565 0.041748 10.0969 0.041748 22.5C0.041748 34.9031 10.097 44.9583 22.5001 44.9583C34.9032 44.9583 44.9584 34.9031 44.9584 22.5C44.9584 10.0969 34.9032 0.0416565 22.5001 0.0416565ZM4.12508 22.5C4.12508 26.7671 5.58079 30.6952 8.02058 33.8149C9.73444 31.5652 11.945 29.7421 14.4797 28.4876C17.0144 27.2332 19.8047 26.5815 22.6328 26.5833C25.4245 26.5801 28.1801 27.2144 30.6895 28.4379C33.1988 29.6615 35.3956 31.4419 37.1123 33.6434C38.8813 31.3233 40.0724 28.6152 40.587 25.7434C41.1016 22.8715 40.925 19.9184 40.0717 17.1283C39.2184 14.3383 37.713 11.7915 35.68 9.69882C33.6471 7.60609 31.145 6.02754 28.3809 5.09378C25.6167 4.16002 22.6699 3.8979 19.7844 4.3291C16.8988 4.7603 14.1574 5.87243 11.787 7.57347C9.41656 9.27451 7.48528 11.5156 6.15292 14.1112C4.82057 16.7068 4.12545 19.5824 4.12508 22.5ZM22.5001 40.875C18.2818 40.8818 14.1908 39.4306 10.9197 36.7672C12.2362 34.8819 13.9888 33.3427 16.0282 32.2805C18.0675 31.2183 20.3334 30.6647 22.6328 30.6667C24.9035 30.6647 27.1419 31.2045 29.162 32.2414C31.1821 33.2783 32.9257 34.7822 34.2478 36.6283C30.9515 39.3784 26.793 40.8817 22.5001 40.875Z" fill="#76716D"/>
</svg>
    )
}

const browseSVG = () => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 46 36" fill="none">
<path d="M40.25 7.5L5.74996 7.50001C5.40066 7.50086 5.05828 7.57626 4.75966 7.71807C4.46105 7.85989 4.2175 8.06275 4.05525 8.30483C3.893 8.54691 3.81818 8.81905 3.83885 9.09193C3.85951 9.36481 3.97489 9.62812 4.17254 9.85351L21.4225 29.3535C22.1375 30.162 23.8586 30.162 24.5755 29.3535L41.8255 9.8535C42.0251 9.62859 42.1422 9.36515 42.164 9.09181C42.1858 8.81847 42.1115 8.54568 41.9491 8.30309C41.7867 8.0605 41.5424 7.85737 41.2429 7.71579C40.9433 7.5742 40.5999 7.49957 40.25 7.5Z" fill="#76716D"/>
</svg>
    )
}

export { watchlistSVG, compareSVG, listingSVG, notificationSVG, myTradeMeSVG, browseSVG };
