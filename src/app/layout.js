import "./globals.css";
import { Heebo } from "next/font/google";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "./api/auth/Providers";
import { ConnectedUserProvider } from "./context/providers";

const heebo = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],

  subsets: ["hebrew"],
  display: "swap",
});
export const metadata = {
  title: "Cohen Calendar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <NextAuthProvider>
          <ConnectedUserProvider>
            <Navbar />
            {children}
          </ConnectedUserProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
