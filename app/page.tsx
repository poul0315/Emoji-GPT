import Accordion from "../components/Accordion";
import Converter from "../components/Converter";


export default async function Home() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900 my-8">
        Caption to Emoji
      </h1>
      <Converter />
      <Accordion />
    </div>
  );
}
