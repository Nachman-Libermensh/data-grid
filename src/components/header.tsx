import { Text } from "rizzui/typography";
import { Button } from "rizzui/button";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-[var(--border)] px-8 py-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">💎</span>
            </div>
            <Text className="text-xl font-bold bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground-muted)] bg-clip-text text-transparent">
              ספרייה מתקדמת לטבלאות
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-[var(--primary-light)] text-[var(--primary-dark)] hover:bg-[var(--primary-light)]/20 hover:border-[var(--primary)] transition-all duration-300"
          >
            <span className="ml-2">�</span>
            דוקומנטציה
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] hover:from-[var(--primary-dark)] hover:to-[var(--primary)] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="ml-2">⭐</span>
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
}
