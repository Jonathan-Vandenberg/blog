import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useClient } from "../lib/client";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps<{}>) {
  const client = useClient();
  return (
    <ApolloProvider client={client}>
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
