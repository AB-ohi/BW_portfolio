import Footer from "@/Component/Footer/footer";
import "./globals.css";
import Navbar from "@/Component/Navbar/navbar";
export const metadata = {
  title: "Abu Sime Khan Ohi",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br  from-slate-900 via-purple-900 to-slate-900">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
