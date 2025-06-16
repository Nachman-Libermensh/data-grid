import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Data Grid - טבלאות דינמיות מקסימות 💝",
  description:
    "ספרייה מתקדמת לטבלאות עם TanStack Table ו-RizzUI בעיצוב רומנטי ומודרני",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he-IL" dir="rtl">
      <body className="bg-gradient-to-br from-[var(--background)] to-[var(--background-soft)] min-h-screen">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-8">
              <div className="min-h-full">{children}</div>
            </main>
          </div>
        </div>

        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[var(--primary-light)]/10 to-[var(--accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--primary-light)]/10 rounded-full blur-3xl"></div>
        </div>
      </body>
    </html>
  );
}
