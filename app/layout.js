import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";


export const metadata = {
  title: "Hugo Mouysset",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/uye6pcd.css" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
