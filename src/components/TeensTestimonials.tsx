
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  {
    text: "EASY helped me learn budgeting and now I always know where my allowance goes. Love my custom card!",
    name: "Sanjana, 15",
  },
  {
    text: "I saved up for my laptop with savings jars and even started investing! Super easy and actually fun.",
    name: "Ayaan, 17",
  },
  {
    text: "The app makes money stuff simple. I earn rewards when I use the card smartly. 10/10 recommend.",
    name: "Rhea, 16",
  },
];

export function TeensTestimonials() {
  return (
    <section className="py-14 bg-gradient-to-br from-white via-soft-green/50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-easy-green">Real Teens, Real Results</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Card key={i} className="h-full bg-white/80 shadow-md animate-fade-in">
              <CardContent className="flex flex-col h-full justify-between p-6">
                <p className="text-gray-700 italic mb-4">"{q.text}"</p>
                <p className="text-right text-easy-blue font-semibold">{q.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
