import "./globals.css";
import Navbar from "@/components/navigation-navbar/Navbar";
import Footer from "@/components/navigation-footer/Footer";

export const metadata = {
  title: "Bord Media",
  description: "Social Media Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
