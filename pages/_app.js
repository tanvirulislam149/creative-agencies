import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const PreviousUrlContext = createContext();

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const [history, setHistory] = useState({ previous: null, current: router.asPath });


  useEffect(() => {
    setHistory((oldHistory) => ({ previous: oldHistory.current, current: router.asPath }));
  }, [router.asPath]);
  return (
    <div>
      <PreviousUrlContext.Provider value={history}>
        <Component {...pageProps} />
      </PreviousUrlContext.Provider>
    </div>
  )
}
export const usePreviousUrl = () => useContext(PreviousUrlContext);
export default MyApp
