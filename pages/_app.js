import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
