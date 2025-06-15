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
      { href: "/", label: "טבלה בסיסית", icon: "📊" },
      { href: "/examples/sortable", label: "מיון וסינון", icon: "🔄" },
      { href: "/examples/pagination", label: "עימוד", icon: "📄" },
      { href: "/examples/selection", label: "בחירת שורות", icon: "✅" },
      { href: "/examples/actions", label: "פעולות על שורות", icon: "⚡" },
      { href: "/examples/nested", label: "נתונים מקוננים", icon: "🌳" },
      { href: "/examples/virtual", label: "טבלה וירטואלית", icon: "🚀" },
      { href: "/examples/editable", label: "עריכה בטבלה", icon: "✏️" },
    ],
  },
  {
    title: "דוקומנטציה",
    items: [
      { href: "/docs", label: "התחלה מהירה", icon: "🚀" },
      { href: "/docs/api", label: "API Reference", icon: "📚" },
      { href: "/docs/styling", label: "עיצוב וסגנון", icon: "🎨" },
      { href: "/docs/advanced", label: "שימוש מתקדם", icon: "⚙️" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-l border-muted shadow-sm">
      <div className="p-6">
        <Title className="text-xl font-bold text-primary">DataGrid Pro</Title>
        <Text className="text-sm text-foreground/60 mt-1">
          טבלאות מתקדמות בReact
        </Text>
      </div>

      <nav className="px-4 pb-6">
        {navigationItems.map((section) => (
          <div key={section.title} className="mb-6">
            <Text className="px-2 mb-2 text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              {section.title}
            </Text>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <span>{item.icon}</span>
                    {item.label}
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
