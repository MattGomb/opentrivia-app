import Quiz from "@/app/quiz/components/Quiz";
import Select from "@/app/quiz/components/Select";
import Footer from "@/app/quiz/components/Footer";

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col items-center px-2 py-2 justify-between">
      <Select />
      <Quiz />
      <Footer />
    </main>
  );
}
