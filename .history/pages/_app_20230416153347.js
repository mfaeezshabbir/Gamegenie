import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="main-content ">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
