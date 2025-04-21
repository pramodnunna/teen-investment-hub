
import { Navbar } from "@/components/Navbar";

export default function TeensPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gradient-to-br from-soft-green to-white">
        <h1 className="text-4xl font-extrabold mb-4 text-easy-green">For Teens</h1>
        <p className="max-w-xl text-center text-gray-700 text-lg">
          Discover all the amazing financial tools, rewards, and education we offer to empower teenagers on their money journey.
        </p>
      </main>
    </>
  );
}
