import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Data Grid - טבלאות דינמיות מתקדמות",
  description: "ספרייה מתקדמת לטבלאות עם TanStack Table ו-RizzUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he-IL" dir="rtl">
      <body className="bg-background">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
