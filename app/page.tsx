export default async function Home() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
        Caption to Emoji
      </h1>
      <div className="max-w-xl w-full">
        <textarea
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 px-4 py-2"
          rows={4}
          placeholder="Type your caption here"
        />
        <button className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full">
          Convert to Emoji
        </button>
        <text className="bg-slate-500">😄</text>
      </div>
    </div>
  );
}
