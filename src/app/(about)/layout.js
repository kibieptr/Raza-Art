import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "Lulusan SMK Terbaik Pertama",
  "Pendiri Startup Raza Studio",
  "Penulis Artikel Teknologi",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
