import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

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
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
