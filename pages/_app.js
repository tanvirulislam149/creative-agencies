import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import NavbarLayout from '../Layouts/NavbarLayout';

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Provider store={store}>
        <NavbarLayout>
          <Component {...pageProps} />
        </NavbarLayout>
      </Provider>
    </div>
  )
}

export default MyApp
