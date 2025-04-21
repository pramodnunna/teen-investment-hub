
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChartBar, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: <DollarSign className="h-7 w-7 text-easy-green mb-2" />,
    title: "Your Own Debit Card",
    desc: "Spend in stores and online—your way. Choose from epic card designs.",
  },
  {
    icon: <ChartBar className="h-7 w-7 text-easy-blue mb-2" />,
    title: "Track Spending & Budgets",
    desc: "Manage money with goals, instant notifications, and savings jars.",
  },
  {
    icon: <BookOpen className="h-7 w-7 text-easy-purple mb-2" />,
    title: "Financial Learning",
    desc: "Bite-size lessons, quizzes and tips to level up your money game.",
  },
  {
    icon: <Users className="h-7 w-7 text-easy-red mb-2" />,
    title: "Earn & Grow",
    desc: "Get allowance, complete chores, invest, and earn rewards for smart choices.",
  },
];

export function WhyTeensLoveUs() {
  return (
    <section className="w-full py-14 bg-soft-green/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-easy-green">
          Why Teens Love PayWithEasy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="transition-shadow hover:shadow-xl bg-white/80 hover-scale animate-fade-in">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {f.icon}
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
