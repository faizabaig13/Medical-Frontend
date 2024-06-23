import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";
import FooterBlock from "./_components/FooterBlock";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Medlink",
  description: "Medical Services",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={outfit.className}>
        <div className="">
          <Header/>
          {children}
          <Toaster />
        </div>
        {/* <Footer/> */}
        <FooterBlock />
        </body>
    </html>
  );
}
