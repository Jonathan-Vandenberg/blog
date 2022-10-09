import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session}>
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
