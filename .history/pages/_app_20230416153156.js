import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
        {/* Your other elements here */}
      <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  );
}
