import Nav from "./nav";
import Footer from "./footer";
import Head from "next/head";
import Image from "next/image";
import mainBG from "../public/back-4-blood-preview-01.jpeg";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>B4B Deck Builder</title>
      </Head>
      <div
        className="fixed w-screen h-screen overflow-hidden bg-black"
        style={{ zIndex: -1 }}
      >
        <Image
          src={mainBG}
          alt="main background image for b4b deck builder"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ filter: "blur(10px)" }}
        />
      </div>
      <Nav />
      <main>
        <div className="z-1 text-white">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
