import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useClient } from "../lib/client";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Session } from "next-auth";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const client = useClient();
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <div className="fixed top-0 left-0 w-full z-50">
          <Nav />
        </div>
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
