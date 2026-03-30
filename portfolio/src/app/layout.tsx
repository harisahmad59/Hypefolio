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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
        <main className="mx-auto max-w-[650px] px-6 py-8 sm:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
