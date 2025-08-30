import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import SeachBox from "@/components/SeachBox";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Suspense
            fallback={
              <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
                Loading...
              </div>
            }
          >
            <Navbar />
          </Suspense>
          <SeachBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
