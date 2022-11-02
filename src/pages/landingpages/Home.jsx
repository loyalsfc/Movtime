import bg from "../../assets/bg.jpg"
import { Link } from "react-router-dom"

function Home(){
    const style = {
        backgroundImage: `linear-gradient(135deg, rgba(25,24,23,0.95) 40%, rgba(0,0,0,0.7)), url(${bg})`,
    }
    return(
        <div className={`h-screen w-full bg-center bg-cover flex flex-col items-center justify-center`} style={style}>
            <div className="flex mb-4">
                <svg width="100" height="100" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_12_103)">
                        <path d="M87.4008 41.6259C89.1097 39.917 90.0557 37.6436 90.0557 35.2176C90.0557 30.213 85.9819 26.1544 80.9925 26.1544C76.0032 26.1544 71.9294 30.2283 71.9294 35.2176C71.9294 37.6436 72.8754 39.917 74.5842 41.6259L105.527 72.5841L99.1189 78.9924L68.1759 48.0342C64.8955 44.7537 62.8662 40.2069 62.8662 35.2023C62.8662 25.1932 70.9834 17.076 80.9925 17.076C91.0017 17.076 99.1189 25.1932 99.1189 35.2023C99.1189 40.2069 97.0896 44.7385 93.8091 48.0189L87.4008 41.6259Z" fill="#F8242F"/>
                        <path d="M87.4006 41.6259L88.6365 42.8618C90.6811 40.8325 91.8101 38.0861 91.8101 35.2023C91.8101 29.2365 86.9581 24.3845 80.9923 24.3845C75.0265 24.3845 70.1898 29.2365 70.1745 35.2023C70.1745 38.0861 71.3036 40.8172 73.3481 42.8618L103.055 72.5841L99.1339 76.5054L69.4116 46.7983C66.4363 43.823 64.6206 39.7339 64.6206 35.2176C64.6206 34.7599 64.4375 34.3021 64.1019 33.9817C63.7662 33.6613 63.3237 33.4629 62.866 33.4629C62.4082 33.4629 61.9505 33.646 61.6301 33.9817C61.3097 34.3174 61.1113 34.7599 61.1113 35.2176C61.1113 35.6753 61.2944 36.1331 61.6301 36.4535C61.9658 36.7739 62.4082 36.9722 62.866 36.9722C63.3237 36.9722 63.7814 36.7892 64.1019 36.4535C64.4223 36.1178 64.6206 35.6753 64.6206 35.2176C64.6359 26.1697 71.9597 18.8612 80.9923 18.8459C90.0402 18.8612 97.3487 26.1849 97.364 35.2176C97.364 39.7492 95.5331 43.823 92.573 46.7983L93.8089 48.0342L95.0448 46.7983L88.6365 40.39L87.4006 41.6259L88.6365 42.8618L87.4006 41.6259L86.1647 42.8618L92.573 49.2701C92.8934 49.5905 93.3512 49.7888 93.8089 49.7888C94.2667 49.7888 94.7244 49.6058 95.0448 49.2701C98.6457 45.6692 100.873 40.6952 100.873 35.2023C100.873 24.2167 91.978 15.3214 80.9923 15.3214C70.0067 15.3214 61.1113 24.2167 61.1113 35.2023C61.1113 35.6601 61.2944 36.1178 61.6301 36.4382C61.9658 36.7586 62.4082 36.957 62.866 36.957C63.3237 36.957 63.7814 36.7739 64.1019 36.4382C64.4223 36.1026 64.6206 35.6601 64.6206 35.2023C64.6206 34.7446 64.4375 34.2869 64.1019 33.9664C63.7662 33.646 63.3237 33.4477 62.866 33.4477C62.4082 33.4477 61.9505 33.6308 61.6301 33.9664C61.3097 34.3021 61.1113 34.7446 61.1113 35.2023C61.1113 40.6799 63.339 45.6692 66.9398 49.2701L97.898 80.213C98.5846 80.8996 99.6984 80.8996 100.385 80.213L106.793 73.8047C107.114 73.4843 107.312 73.0266 107.312 72.5688C107.312 72.1111 107.129 71.6534 106.793 71.3329L75.8199 40.39C74.4314 39.0015 73.6838 37.1859 73.6685 35.2176C73.6685 31.1895 76.949 27.9091 80.9771 27.9091C85.0051 27.9091 88.2856 31.1895 88.2856 35.2176C88.2856 37.1859 87.5379 39.0015 86.1495 40.39C85.8138 40.7257 85.6307 41.1682 85.6307 41.6259C85.6307 42.0989 85.8138 42.5414 86.1495 42.8618L87.4006 41.6259Z" fill="#F8242F"/>
                        <path d="M118.343 85.4007C120.052 87.1095 122.326 88.0555 124.752 88.0555C129.741 88.0555 133.815 83.9817 133.815 78.9924C133.815 73.9878 129.756 69.9292 124.767 69.9292C122.341 69.9292 120.068 70.8752 118.359 72.5841L87.4005 103.527L80.9922 97.1187L111.95 66.1758C115.231 62.8953 119.762 60.866 124.767 60.866C134.776 60.866 142.893 68.9832 142.893 79.0076C142.893 89.032 134.776 97.134 124.767 97.134C119.762 97.134 115.231 95.1047 111.95 91.8242L118.343 85.4007Z" fill="#F8242F"/>
                        <path d="M118.343 85.4006L117.107 86.6365C119.137 88.6811 121.883 89.8102 124.767 89.8102C130.733 89.8102 135.585 84.9582 135.585 78.9923C135.585 73.0265 130.748 68.1745 124.782 68.1745C124.309 68.1745 123.867 68.3576 123.546 68.6933C123.21 69.029 123.027 69.4714 123.027 69.9292H124.782V68.1745C121.898 68.1745 119.167 69.3036 117.123 71.3329L87.4003 101.055L83.479 97.1339L113.186 67.4116C116.161 64.4516 120.235 62.6207 124.767 62.6207C125.575 62.6207 126.293 62.0561 126.476 61.2627C126.659 60.4693 126.277 59.6454 125.545 59.2945L124.767 60.866V62.6207C133.815 62.6359 141.123 69.9597 141.138 79.0076C141.123 88.0555 133.799 95.364 124.767 95.3793C120.235 95.3793 116.161 93.5483 113.186 90.5883L111.95 91.8242L113.186 93.0601L119.594 86.6518L118.343 85.4006L117.107 86.6365L118.343 85.4006L117.107 84.1648L110.699 90.5731C110.012 91.2597 110.012 92.3735 110.699 93.0601C114.285 96.6609 119.274 98.8886 124.767 98.8886C135.752 98.8886 144.648 89.9933 144.648 79.0076C144.648 68.0219 135.752 59.1114 124.767 59.1114C123.958 59.1114 123.241 59.6759 123.058 60.4693C122.875 61.2627 123.256 62.0866 123.989 62.4376L124.767 60.866V59.1114C119.274 59.1114 114.3 61.339 110.699 64.9399L79.7561 95.8828C79.4357 96.2032 79.2373 96.6609 79.2373 97.1187C79.2373 97.5764 79.4204 98.0342 79.7561 98.3546L86.1644 104.763C86.851 105.449 87.9648 105.449 88.6514 104.763L119.594 73.8199C120.998 72.4315 122.798 71.6838 124.767 71.6838C125.224 71.6838 125.682 71.5007 126.003 71.1651C126.323 70.8294 126.521 70.3869 126.521 69.9292H124.767V71.6838C128.795 71.6838 132.075 74.9643 132.06 78.9923C132.06 83.0204 128.78 86.3009 124.751 86.3009C122.783 86.3009 120.968 85.5532 119.579 84.1648C119.243 83.8291 118.801 83.646 118.343 83.646C117.87 83.646 117.428 83.8291 117.107 84.1648L118.343 85.4006Z" fill="#F8242F"/>
                        <path d="M43.6261 72.5841C41.9019 70.8752 39.6438 69.9292 37.2178 69.9292C32.2132 69.9292 28.1546 74.003 28.1546 78.9924C28.1546 83.9969 32.2132 88.0555 37.2178 88.0708C39.6438 88.0708 41.9172 87.1248 43.6261 85.4159L74.5843 54.4577L80.9926 60.866L50.0344 91.809C46.7539 95.0894 42.2071 97.1187 37.2025 97.1187C27.1781 97.1187 19.0762 89.0015 19.0762 78.9771C19.0762 68.968 27.1934 60.8508 37.2025 60.8508C42.2071 60.8508 46.7387 62.8801 50.0191 66.1605L43.6261 72.5841Z" fill="#F8242F"/>
                        <path d="M43.6258 72.5841L44.8617 71.3482C42.8324 69.3036 40.086 68.1746 37.2023 68.1746C31.2365 68.1746 26.3845 73.0266 26.3845 78.9924C26.3845 84.9582 31.2212 89.8102 37.2023 89.8255C37.6753 89.8255 38.1178 89.6424 38.4382 89.3067C38.7738 88.971 38.9569 88.5285 38.9569 88.0708H37.2023V89.8255C40.086 89.8255 42.8172 88.6964 44.8617 86.6518L74.584 56.9295L78.5053 60.8508L48.7983 90.5731C45.823 93.5331 41.7339 95.3641 37.2175 95.3793C36.4394 95.3793 35.768 95.8828 35.5392 96.6152C35.3103 97.3476 35.6002 98.1563 36.241 98.5835L37.2175 97.134V95.3793C28.1696 95.3488 20.8611 88.0403 20.8459 78.9924C20.8611 69.9445 28.1696 62.636 37.2175 62.6207C41.7491 62.6207 45.823 64.4516 48.7983 67.4117L50.0341 66.1758L48.7983 64.9399L42.3899 71.3482L43.6258 72.5841L44.8617 71.3482L43.6258 72.5841L44.8617 73.82L51.27 67.4117C51.6057 67.076 51.7888 66.6335 51.7888 66.1758C51.7888 65.7028 51.6057 65.2603 51.27 64.9399C47.6692 61.3543 42.6951 59.1114 37.2023 59.1266C26.2166 59.1266 17.3213 68.022 17.3213 79.0076C17.3213 89.9933 26.2166 98.9039 37.2023 98.9039C37.9804 98.9039 38.6518 98.4004 38.8806 97.668C39.1095 96.9356 38.8196 96.127 38.1788 95.6997L37.2023 97.1492V98.9039C42.6798 98.9039 47.6692 96.6762 51.27 93.0754L82.2282 62.1325C82.9148 61.4458 82.9148 60.332 82.2282 59.6454L75.8199 53.2371C75.1333 52.5505 74.0195 52.5505 73.3329 53.2371L42.3899 84.1648C40.9862 85.5533 39.1858 86.3009 37.2175 86.3162C36.7598 86.3162 36.3021 86.4993 35.9816 86.8349C35.6612 87.1706 35.4629 87.6131 35.4629 88.0708H37.2175V86.3162C33.1895 86.3162 29.909 83.0357 29.909 78.9924C29.909 74.9643 33.1895 71.6991 37.2175 71.6839C39.1858 71.6839 40.9862 72.4315 42.3899 73.82C43.0766 74.5066 44.1904 74.5066 44.877 73.82L43.6258 72.5841Z" fill="#F8242F"/>
                        <path d="M124.767 49.5294H123.013H124.767V47.7748C117.245 47.7748 110.12 50.4449 104.474 55.2969L105.619 56.6244L106.854 55.3885L104.612 53.1456L103.376 54.3814L104.703 55.5258C109.555 49.8804 112.21 42.7397 112.21 35.2176C112.21 18.0067 98.2185 4 80.9924 4C63.7663 4 49.7748 18.0067 49.7748 35.2176C49.7748 42.7397 52.4602 49.8651 57.2969 55.5105L58.6244 54.3662L57.3885 53.1303L55.1456 55.3732L56.3814 56.6091L57.5258 55.2817C51.8804 50.4297 44.7244 47.7748 37.2023 47.7748C20.0067 47.7748 6 61.7815 6 78.9924C6 96.2185 20.0067 110.21 37.2176 110.225C37.6753 110.225 38.133 110.042 38.4535 109.706C38.7739 109.371 38.9722 108.928 38.9722 108.471H37.2176V110.225C44.7397 110.225 51.8651 107.555 57.5105 102.703L56.3662 101.376L55.1303 102.612L57.3732 104.854L58.6091 103.619L57.2817 102.474C52.4297 108.12 49.7748 115.276 49.7748 122.782C49.7748 139.993 63.7815 154 80.9924 154C98.2185 154 112.21 139.993 112.21 122.782C112.21 122.325 112.027 121.867 111.691 121.547C111.356 121.226 110.913 121.028 110.455 121.028V122.782H112.21C112.21 115.26 109.54 108.135 104.688 102.489L103.36 103.634L104.596 104.87L106.839 102.627L105.603 101.391L104.459 102.718C110.104 107.586 117.26 110.225 124.782 110.225C141.993 110.225 156 96.2185 156 79.0076C156 61.7815 141.993 47.7901 124.782 47.7748C124.325 47.7748 123.867 47.9579 123.547 48.2936C123.226 48.6292 123.028 49.0717 123.028 49.5294H124.767V51.2841C140.04 51.3146 152.445 63.7193 152.475 78.9924C152.445 94.2655 140.04 106.67 124.767 106.701C118.069 106.701 111.767 104.351 106.732 100.033C106.031 99.4379 104.993 99.4684 104.352 100.125L102.109 102.367C101.468 103.008 101.423 104.061 102.018 104.748C106.336 109.783 108.701 116.069 108.701 122.752C108.701 123.21 108.884 123.667 109.219 123.988C109.555 124.308 109.998 124.507 110.455 124.507V122.752H108.701C108.67 138.04 96.2655 150.445 80.9924 150.475C65.7193 150.445 53.2994 138.04 53.2841 122.767C53.2841 116.069 55.6338 109.767 59.9518 104.732C60.5468 104.031 60.5163 102.993 59.8602 102.352L57.6173 100.109C56.9765 99.4684 55.9237 99.4226 55.2371 100.018C50.202 104.336 43.9158 106.701 37.2328 106.701C36.7751 106.701 36.3174 106.884 35.997 107.219C35.6765 107.555 35.4782 107.998 35.4782 108.455H37.2328V106.701C21.9445 106.67 9.53982 94.2655 9.50931 78.9924C9.53982 63.7193 21.9445 51.3146 37.2176 51.2841C43.9158 51.2841 50.2173 53.6338 55.2524 57.9518C55.9542 58.5468 56.9918 58.5011 57.6326 57.8602L59.8755 55.6173C60.5163 54.9765 60.5621 53.9237 59.967 53.2371C55.6491 48.2173 53.2841 41.9158 53.2841 35.2328C53.3146 19.9445 65.7193 7.53982 80.9924 7.50931C96.2655 7.53982 108.67 19.9445 108.701 35.2176C108.701 41.9158 106.351 48.2325 102.048 53.2524C101.453 53.9542 101.484 54.9918 102.14 55.6326L104.383 57.8755C105.023 58.5163 106.076 58.5621 106.763 57.967C111.798 53.6491 118.084 51.2841 124.767 51.2841C125.225 51.2841 125.683 51.101 126.003 50.7653C126.323 50.4297 126.522 49.9872 126.522 49.5294H124.767V51.2841V49.5294Z" fill="#F8242F"/>
                        <path d="M74.584 116.344C72.8751 118.052 71.9291 120.326 71.9291 122.752C71.9291 127.741 76.003 131.815 80.9923 131.815C85.9816 131.815 90.0554 127.756 90.0554 122.752C90.0554 120.326 89.1095 118.052 87.4006 116.344L56.4424 85.4007L62.8507 78.9924L93.8089 109.951C97.0893 113.231 99.1186 117.763 99.1186 122.767C99.1186 132.776 91.0014 140.894 80.9923 140.894C70.9679 140.894 62.8659 132.776 62.8659 122.767C62.8659 117.763 64.8952 113.231 68.1757 109.951L74.584 116.344Z" fill="#F8242F"/>
                        <path d="M74.5842 116.344L73.3483 115.108C71.319 117.137 70.1747 119.883 70.1899 122.752C70.1899 128.718 75.0419 133.57 81.0078 133.57C86.9736 133.57 91.8256 128.733 91.8256 122.752C91.8256 122.279 91.6425 121.836 91.3068 121.516C90.9711 121.18 90.5287 120.997 90.0709 120.997V122.752H91.8256C91.8256 119.868 90.6965 117.137 88.6672 115.092L58.9296 85.4007L62.8509 81.4642L92.558 111.186C95.5332 114.162 97.3642 118.236 97.3642 122.767C97.3642 123.591 97.9287 124.293 98.7221 124.476C99.5155 124.659 100.339 124.262 100.69 123.53L99.1036 122.767H97.3489C97.3337 131.815 90.0099 139.124 80.9772 139.139C71.9293 139.124 64.6208 131.8 64.6056 122.767C64.6056 118.236 66.4365 114.162 69.3965 111.186L68.1606 109.951L66.9248 111.186L73.3331 117.595L74.5842 116.344L73.3483 115.108L74.5842 116.344L75.8201 115.108L69.4118 108.699C68.7252 108.013 67.6114 108.013 66.9248 108.699C63.3239 112.285 61.0963 117.274 61.0963 122.767C61.0963 133.753 69.9916 142.648 80.9772 142.648C91.9629 142.648 100.858 133.753 100.858 122.767C100.858 121.943 100.294 121.241 99.5003 121.058C98.7069 120.875 97.883 121.272 97.532 122.004L99.1188 122.767H100.873C100.873 117.274 98.6458 112.3 95.045 108.699L64.1021 77.7412C63.7664 77.4056 63.3239 77.2225 62.8662 77.2225C62.3932 77.2225 61.9507 77.4056 61.6303 77.7412L55.222 84.1495C54.5354 84.8361 54.5354 85.95 55.222 86.6366L86.1649 117.595C87.5534 118.998 88.301 120.814 88.3163 122.767C88.3163 123.225 88.4994 123.683 88.835 124.003C89.1707 124.323 89.6132 124.522 90.0709 124.522V122.767H88.3163C88.3163 126.795 85.0358 130.06 81.0078 130.076C76.9797 130.076 73.6993 126.795 73.6993 122.767C73.6993 120.799 74.4469 118.983 75.8354 117.595C76.522 116.908 76.522 115.794 75.8354 115.108L74.5842 116.344Z" fill="#F8242F"/>
                        <path d="M80.9774 97.1187L82.2133 95.8828L65.3228 78.9924L80.9774 63.3531L96.632 78.9924L79.7415 95.8828L80.9774 97.1187L82.2133 95.8828L80.9774 97.1187L82.2133 98.3546L100.34 80.2283C100.66 79.9079 100.858 79.4501 100.858 78.9924C100.858 78.5346 100.675 78.0769 100.34 77.7565L82.2133 59.6149C81.5267 58.9283 80.4129 58.9283 79.7263 59.6149L61.5999 77.7412C60.9133 78.4278 60.9133 79.5417 61.5999 80.2283L79.7415 98.3699C80.0619 98.6903 80.5197 98.8886 80.9774 98.8886C81.4351 98.8886 81.8929 98.7055 82.2133 98.3699L80.9774 97.1187Z" fill="#F8242F"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_12_103" x="0" y="0" width="162" height="162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.823529 0 0 0 0 0.8 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_103"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_103" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <svg width="258" height="95" viewBox="0 0 421 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_12_128)">
                    <path d="M72.4339 144.736L59.8409 144.57V64.9843L44.0247 109.823L33.3722 111.583L26.7561 85.6409L20.4613 57.4587L23.7811 84.6461L22.3711 144.096L6.79492 143.9C6.79492 141.225 9.15798 4.75399 9.15798 4.75399H19.5588L37.1569 82.8807L36.2 97.416L55.483 4.75399H68.7194L72.4339 144.736ZM136.22 21.9801L139.168 66.7884L137.455 111.212L126.017 141.496L100.985 144.735L84.739 114.734L84.6421 41.3857C84.1308 39.4755 91.6226 11.7957 91.6226 11.7957L113.327 2.1875L123.224 4.70869L104.305 16.8649L93.0361 41.8462L93.3886 94.8532C93.3886 94.8532 101.198 125.917 101.992 125.917C102.787 125.917 112.223 134.327 112.223 134.327L121.798 126.879L129.48 100.776L132.827 65.7069L127.016 37.3623L113.636 39.9256L105.362 68.4347L108.178 82.0434L118.037 79.6414L113.416 62.5078L119.885 61.0665C119.885 61.0665 122.526 81.9625 122.526 82.6845C122.526 83.2073 115.926 115.351 115.926 115.351L110.379 120.878L105.626 93.0146L101.663 68.4365L107.21 31.0407L125.765 11.8821L136.22 21.9801ZM198.925 4.10552L191.837 49.2528H183.071L191.499 51.3935L176.838 144.732L168.455 144.102L143.242 4.10382H159.352L169.846 86.5876L172.174 108.94L171.422 93.9626L184.202 4.10331H198.926L198.925 4.10552ZM234.91 132.045L243.029 132.083L242.464 144.735L213.652 144.685L213.005 133.367L220.164 132.891L220.911 111.429L219.459 32.1491L217.894 60.0786C217.464 45.5087 217.13 29.0826 216.914 18.5413L207.117 18.9487V5.07826L243.917 4.8207L243.352 17.907L234.733 17.7995L234.91 132.045ZM305.521 103.086C306.082 105.008 306.307 120.381 305.18 122.299C304.057 124.221 286.435 144.501 286.435 144.501L276.933 144.693L268.202 144.728L270.031 125.904L271.313 113.394L273.8 101.725L278.057 91.7869L289.108 98.478L292.812 115.092L286.063 121.276L281.562 120.073L287.326 114.727L279.873 105.48L276.216 122.775L276.569 129.743L279.451 133.144L285.452 132.344L294.311 123.578L298.436 107.406L291.452 93.4354L282.453 83.0276L273.687 80.9867L268.625 89.7841L265.487 113.759C265.487 113.759 263.775 143.832 263.613 143.563V143.848L256.489 144.524C255.927 144.186 256.489 4.86675 256.489 4.86675L276.734 7.265L286.294 14.9513L295.292 33.6873L294.301 38.0917L289.858 31.7657C289.858 31.7657 279.732 19.9128 278.608 19.5939C277.485 19.275 268.111 17.3533 268.111 17.3533L263.048 28.8828V44.2559L273.921 51.3005L282.37 46.4963L286.201 39.7897L278.701 32.5837L273.639 35.0664L279.077 40.5125L275.982 44.2752L268.297 39.7749L269.703 29.7055L272.798 25.3817L284.326 31.5422L293.515 42.5107L284.047 58.6675L272.798 62.9913L285.17 70.6776L295.296 77.4033C295.296 77.4033 301.25 86.869 301.811 88.3105C302.373 89.752 304.96 101.162 305.522 103.084L305.521 103.086ZM329.659 131.58L354.28 130.32V144.305L314.845 144.735L315.857 88.74L312.231 4.94761L352.617 4.86691L351.529 18.5413L322.964 17.8228L331.168 20.0403L326.435 63.8799L347.179 65.1597L347.822 80.5323L332.284 81.0627L331.277 73.2455L329.659 131.58ZM399.845 23.9556L388.297 18.1379L380.065 23.4457L378.888 35.3828L380.205 42.1661C383.908 46.5242 400.402 72.3579 400.402 72.3579L412.992 94.5454C412.992 94.5454 415.068 121.883 414.998 123.205C414.929 124.527 406.964 141.172 406.964 141.172L386.016 144.742L369.766 137.34L362.564 124.069L366 100.41L383.37 92.8999L394.565 102.689L396.18 117.685L388.212 126.516L377.97 123.768L378.776 113.68L384.989 110.236L384.745 113.841L380.871 119.526L387.31 118.588L389.963 109.322L382.847 105.009L376.661 110.897L374.336 120.525L375.44 126.889L391.078 130.774L398.667 120.947L400.48 114.475L399.19 98.8216L387.728 75.4468L373.349 56.7188L365.779 32.253L370.622 11.9145L386.6 3.85518L405 9.75053L411.113 18.1363L411.295 35.2117L404.032 46.9833L390.242 46.5528L383.06 34.5465L386.113 26.084L391.439 24.4007L398.338 30.0463L397.257 35.2117L391.075 32.4831L397.621 40.9075L402.134 35.7497L399.845 23.9556Z" fill="#F8242F"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_12_128" x="0.794922" y="0.1875" width="420.205" height="154.555" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.823529 0 0 0 0 0.8 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_128"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_128" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <Link to="/register">
                <button className="text-2xl h-16 px-6 bg-primary-red text-white"><span>Get Started</span> <i className="fa-solid fa-angle-right"></i></button>
            </Link>
        </div>
    )
}

export default Home