import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
