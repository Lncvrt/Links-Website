import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {children}
      </body>
    </html>
  );
}
