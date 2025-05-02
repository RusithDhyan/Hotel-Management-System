import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

// Correct configuration with subsets defined
const jost = Jost({
  subsets: ["latin"], // REQUIRED for avoiding preload error
  preload: true, // Optional, if you want preloading
  variable: "--font-jost", // Optional, use if you're using Tailwind for variables
});

export const metadata = {
  title: "Serendib Resort",
  description: "Hotel Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${jost.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
