import "../styles/globals.css";
import "../styles/images.css";
import "./../styles/image.css";
import "../styles/styles.css";
import Header from "./components/eyrc/layouts/Header";
import Footer from "./components/eyrc/layouts/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
