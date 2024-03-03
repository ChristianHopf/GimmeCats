export default function Tabs({ onSelect }: any) {
  return (
    <div className="flex flex-row gap-16 mt-4">
      <button
        onClick={() => {
          onSelect("breeds");
        }}
        className="text-4xl px-8 py-4 rounded-md drop-shadow bg-white"
      >
        Breeds
      </button>
      <button
        onClick={() => {
          onSelect("facts");
        }}
        className="text-4xl px-8 py-4 rounded-md drop-shadow bg-white"
      >
        Facts
      </button>
    </div>
  );
}
