export default function App({ content }: { content: string }) {
  return (
    <div className="flex justify-center">
      <span />
      <button
        type="button"
        className="px-6 py-3 relative text-sm border-2 border-gray-500 text-gray-700"
      >
        <span className="absolute -top-1 left-4 z-10 bg-white w-2 h-2" />
        <span className="absolute -top-1 left-9 z-10 bg-white w-2 h-2" />
        {content}
      </button>
    </div>
  );
}
