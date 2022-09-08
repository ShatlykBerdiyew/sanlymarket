import "../styles/globals.css";
import "../components/Header/header.css";
import "../components/Banner/banner.css";
import "../components/PopularMarkets/popularMarkets.css";
import "../components/ProductsView/productsView.css";
import "../components/Card/card.css";
import "../components/MobileAppInfo/mobileAppInfo.css";
import "../components/Footer/footer.css";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
