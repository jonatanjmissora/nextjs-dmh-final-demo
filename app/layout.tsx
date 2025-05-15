import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { getCookies } from "./helpers/getCookies";

const archivo = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: 'DMH | Digital Money House',
  description: 'Tu nueva billetera virtual!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [accountId, token, username] = getCookies("accountid", "token", "username")

  return (
    <html lang="en">
      <body className={`${archivo.className} flex flex-col h-screen relative`}>
        <Navbar username={username} token={token} accountId={accountId} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
