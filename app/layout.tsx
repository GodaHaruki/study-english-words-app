import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study English Words",
  description: "You can study English words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="prose grid grid-cols-12 gap-4">
        {children}
      </body>
    </html>
  );
}
