import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haris Ahmad — Portfolio",
  description:
    "Engineer · Polymath — A minimal portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="mx-auto max-w-[1400px] px-4 pt-[120px] pb-6 sm:px-8 sm:pb-10 lg:pt-[165px]">
          {children}
        </div>
      </body>
    </html>
  );
}
