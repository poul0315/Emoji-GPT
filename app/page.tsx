import Converter from "../components/converter";

export default async function Home() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
        Caption to Emoji
      </h1>
      <Converter />
    </div>
  );
}
