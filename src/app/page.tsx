import { Box } from "rizzui/box";
import { Text, Title } from "rizzui/typography";
import { Button } from "rizzui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <Title className="text-3xl font-bold text-primary mb-4">
          ברוכים הבאים לספרייה מתקדמת לטבלאות
        </Title>
        <Text className="text-lg text-foreground/80 leading-relaxed">
          ספרייה חזקה ונוחה לבניית טבלאות דינמיות עם TanStack Table ו-RizzUI.
          תמיכה במיון, סינון, עימוד, בחירת שורות ועוד תכונות מתקדמות.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <FeatureCard
          icon="⚡"
          title="ביצועים גבוהים"
          description="טבלאות מהירות עם טכנולוגיית virtualization"
        />
        <FeatureCard
          icon="🎨"
          title="עיצוב מותאם"
          description="תמיכה מלאה בעיצוב עם RizzUI ו-Tailwind"
        />
        <FeatureCard
          icon="🔧"
          title="גמיש ומותאם"
          description="API פשוט וגמיש לכל סוג של טבלה"
        />
        <FeatureCard
          icon="📱"
          title="רספונסיבי"
          description="תמיכה מלאה במכשירים ניידים"
        />
        <FeatureCard
          icon="🌐"
          title="תמיכה בעברית"
          description="תמיכה מלאה בכיוון RTL ובעברית"
        />
        <FeatureCard
          icon="📊"
          title="תכונות מתקדמות"
          description="מיון, סינון, עימוד, בחירה ועוד"
        />
      </div>

      <div className="flex gap-4">
        <Link href="/examples/basic">
          <Button size="lg">🚀 התחל עכשיו</Button>
        </Link>
        <Link href="/docs">
          <Button variant="outline" size="lg">
            📖 דוקומנטציה
          </Button>
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Box className="p-6 border border-muted rounded-lg hover:shadow-md transition-shadow">
      <div className="text-2xl mb-3">{icon}</div>
      <Title className="text-lg font-semibold mb-2">{title}</Title>
      <Text className="text-foreground/70">{description}</Text>
    </Box>
  );
}
