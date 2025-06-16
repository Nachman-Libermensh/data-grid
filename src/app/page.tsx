import { Box } from "rizzui/box";
import { Text, Title } from "rizzui/typography";
import { Button } from "rizzui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-light/30 to-accent/40 rounded-full mb-6">
          <span className="text-lg">✨</span>
          <Text className="text-sm font-medium text-primary-dark">
            החדש! טבלאות מתקדמות עם אהבה
          </Text>
        </div>

        <Title className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary-dark to-secondary bg-clip-text text-transparent mb-6 leading-tight">
          ברוכים הבאים לעולם הטבלאות
          <br />
          <span className="text-4xl">המקסימות ביותר 💝</span>
        </Title>

        <Text className="text-xl text-foreground-muted leading-relaxed mb-8 max-w-3xl mx-auto">
          ספרייה חזקה ונוחה לבניית טבלאות דינמיות עם TanStack Table ו-RizzUI.
          תמיכה במיון, סינון, עימוד, בחירת שורות ועוד תכונות מתקדמות עם עיצוב
          רומנטי ומודרני.
        </Text>

        <div className="flex gap-6 justify-center">
          <Link href="/examples/basic">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="ml-3 text-xl">🚀</span>
              התחל עכשיו
            </Button>
          </Link>
          <Link href="/docs">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-light text-primary-dark hover:bg-primary-light/20 px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="ml-3 text-xl">📖</span>
              דוקומנטציה
            </Button>
          </Link>
        </div>
      </div>

      {/* Live Demo Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <Title className="text-3xl font-bold text-foreground mb-4">
            הדגמה חיה �
          </Title>
          <Text className="text-lg text-foreground-muted">
            ראו איך הטבלה שלנו נראית בפעולה
          </Text>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
          <LiveDemoTable />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* ... features cards ... */}
      </div>
    </div>
  );
}

// Live Demo Component
function LiveDemoTable() {
  const sampleData = [
    { id: 1, name: "יוסף כהן", age: 28, city: "תל אביב", role: "מפתח" },
    { id: 2, name: "מיכל לוי", age: 32, city: "ירושלים", role: "מעצבת" },
    { id: 3, name: "דוד ישראלי", age: 25, city: "חיפה", role: "אנליסט" },
    { id: 4, name: "שרה אברהם", age: 29, city: "באר שבע", role: "מנהלת" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-primary-light/20 to-accent/30">
          <tr>
            <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">שם</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">גיל</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">עיר</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">תפקיד</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((person, index) => (
            <tr 
              key={person.id}
              className={`hover:bg-muted/50 transition-colors duration-200 ${
                index % 2 === 0 ? "bg-white/50" : "bg-background-soft/30"
              }`}
            >
              <td className="px-6 py-4 text-sm text-foreground">{person.name}</td>
              <td className="px-6 py-4 text-sm text-foreground-muted">{person.age}</td>
              <td className="px-6 py-4 text-sm text-foreground-muted">{person.city}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-light/30 text-primary-dark">
                  {person.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="px-6 py-4 bg-gradient-to-r from-background-soft to-muted/50 border-t border-border">
        <Text className="text-sm text-foreground-muted text-center">
          💡 זוהי רק הדגמה פשוטה - הטבלה האמיתית כוללת מיון, סינון, עימוד ועוד!
        </Text>
      </div>
    </div>
  );
}