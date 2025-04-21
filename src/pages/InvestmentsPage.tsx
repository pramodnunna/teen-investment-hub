
import { Navbar } from "@/components/Navbar";

export default function InvestmentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gradient-to-br from-soft-blue to-easy-purple/10">
        <h1 className="text-4xl font-extrabold mb-4 text-easy-purple">Investments</h1>
        <p className="max-w-xl text-center text-gray-700 text-lg">
          Learn how you can start investing responsibly as a teen or guide your child through safe, supervised investment experiences.
        </p>
      </main>
    </>
  );
}
