import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header/index";
import TidioChat from "@/components/Shared/TidioChat";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TidioChat />
        {children}
        <Footer />
      </body>
    </html>
  );
}