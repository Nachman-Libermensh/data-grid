import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Data Grid",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he-IL" dir="rtl">
      <body className="">{children}</body>
    </html>
  );
}
