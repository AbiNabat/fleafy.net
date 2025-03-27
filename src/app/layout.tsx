
import type { Metadata } from "next";
import {  Barlow } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
import {ClerkProvider} from "@clerk/nextjs";


const barlow = Barlow({
  subsets: ["latin"],
    weight: ['500', '700']
});



export const metadata: Metadata = {
  title: "Fleafy Ecommerce platform",
  description: "Fleafy Ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

   <ClerkProvider>
     <html lang="en">
     <body className={`${barlow}`}>
     <Providers >
       {children}
     </Providers>



     </body>

     </html>
   </ClerkProvider>

  );
}
