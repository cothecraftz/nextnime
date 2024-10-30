import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/layouts/Navbar/Header";
import ProgresBarTop from "@/components/ProgresBarTop";
import { gabarito } from "@/libs/fonts";
import { Suspense } from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata: Metadata = {
  title: "NextNime",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} antialiased`}>
        <Suspense fallback={<p>Loading...</p>}>
          <ReactQueryProvider>
            <AuthProvider>
              <Header />
              <ProgresBarTop>{children}</ProgresBarTop>
            </AuthProvider>
          </ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
