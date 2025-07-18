import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/home/navbar";
import { FooterComponent } from "@/components/footer/footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "RUET CSE Archive",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        precedence="default"
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <body
        className={`${lato.variable} antialiased bg-gray-200 dark:bg-[#071a26f1] `}
      >
        <Navbar />

        {children}

        <FooterComponent />
      </body>
    </html>
  );
}
