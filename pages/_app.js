import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}

export default MyApp
