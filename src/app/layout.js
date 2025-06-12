// import "./globals.css";
// import { Jost } from "next/font/google";
// import Footer from "./(components)/Footer";
// import Navbar from "./(components)/Navbar";
// import { DataProvider } from "./context/DataContext";

// const jost = Jost({
//   subsets: ["latin"], 
//   variable: "--font-jost",
// });

// export const metadata = {
//   title: "Serendib Resort",
//   description: "Hotel Management System",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <link rel="icon" href="/favicon.ico" />
//       <body className={`${jost.variable} font-sans`}>
//         <DataProvider>
//         <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <main className="flex-grow">{children}</main>
//             <Footer />
//           </div>
//         </DataProvider>
          
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";
import { DataProvider } from "./context/DataContext";


export const metadata = {
  title: "Serendib Resort",
  description: "Hotel Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <DataProvider>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </DataProvider>
          
      </body>
    </html>
  );
}
