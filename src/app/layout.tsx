import type { Metadata } from "next";
// import localFont from "next/font/local";
import "~/sass/globals.scss";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Next Zustand",
  description: "Learn Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // <html lang="en">
      //   <body
      //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      //   >
      //     {children}
      //   </body>
      // </html>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
  );
}
