import { Box } from "rizzui/box";
import { Text } from "rizzui/typography";
import { Button } from "rizzui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-muted px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Text className="text-lg font-semibold text-foreground">
            ספרייה מתקדמת לטבלאות
          </Text>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            📖 דוקומנטציה
          </Button>
          <Button size="sm">⭐ GitHub</Button>
        </div>
      </div>
    </header>
  );
}
