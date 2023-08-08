import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import NavbarLayout from '../Layouts/NavbarLayout';
import createEmotionCache from '../utility/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import PropTypes from 'prop-types';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  return (
    <div>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <NavbarLayout>
            <CssBaseline />
            <Component {...pageProps} />
          </NavbarLayout>
        </Provider>
      </CacheProvider>
    </div>
  )
}

export default MyApp


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};