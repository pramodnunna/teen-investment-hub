
import { Navbar } from "@/components/Navbar";

export default function ParentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gradient-to-br from-easy-blue/10 via-white to-soft-blue">
        <h1 className="text-4xl font-extrabold mb-4 text-easy-blue">For Parents</h1>
        <p className="max-w-xl text-center text-gray-700 text-lg">
          See how PayWithEasy helps you manage your teen’s learning, expenses, and investments—while keeping you in control.
        </p>
      </main>
    </>
  );
}
