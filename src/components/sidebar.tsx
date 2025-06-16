"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "rizzui/box";
import { cn } from "rizzui/cn";
import { Text, Title } from "rizzui/typography";

const navigationItems = [
  {
    title: "דוגמאות",
    items: [
      { href: "/", label: "טבלה בסיסית", icon: "🌸" },
      { href: "/examples/sortable", label: "מיון וסינון", icon: "🦋" },
      { href: "/examples/pagination", label: "עימוד", icon: "🌿" },
      { href: "/examples/selection", label: "בחירת שורות", icon: "💐" },
      { href: "/examples/actions", label: "פעולות על שורות", icon: "✨" },
      { href: "/examples/nested", label: "נתונים מקוננים", icon: "�" },
      { href: "/examples/virtual", label: "טבלה וירטואלית", icon: "🌙" },
      { href: "/examples/editable", label: "עריכה בטבלה", icon: "🌹" },
    ],
  },
  {
    title: "דוקומנטציה",
    items: [
      { href: "/docs", label: "התחלה מהירה", icon: "🌼" },
      { href: "/docs/api", label: "API Reference", icon: "�" },
      { href: "/docs/styling", label: "עיצוב וסגנון", icon: "🎨" },
      { href: "/docs/advanced", label: "שימוש מתקדם", icon: "💫" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-white/70 backdrop-blur-md border-l border-[var(--border)] shadow-lg">
      {/* Header עם גרדיאנט עדין */}
      <div className="p-8 bg-gradient-to-br from-[var(--primary-light)]/20 to-[var(--accent)]/30 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-xl flex items-center justify-center text-white text-lg">
            🌸
          </div>
          <Title className="text-xl font-bold bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
            DataGrid Pro
          </Title>
        </div>
        <Text className="text-sm text-[var(--foreground-soft)] leading-relaxed">
          טבלאות מתקדמות עם אהבה ב-React 💝
        </Text>
      </div>

      <nav className="px-6 py-8">
        {navigationItems.map((section, sectionIndex) => (
          <div
            key={section.title}
            className={`${sectionIndex > 0 ? "mt-8" : ""}`}
          >
            <Text className="px-3 mb-4 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
              {section.title}
            </Text>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-4 px-4 py-3 text-sm rounded-xl transition-all duration-300 ease-out",
                      pathname === item.href
                        ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white shadow-md transform scale-[1.02]"
                        : "text-[var(--foreground)] hover:bg-[var(--muted)] hover:transform hover:scale-[1.01] hover:shadow-sm"
                    )}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    {pathname === item.href && (
                      <div className="mr-auto w-2 h-2 bg-white rounded-full opacity-80"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
