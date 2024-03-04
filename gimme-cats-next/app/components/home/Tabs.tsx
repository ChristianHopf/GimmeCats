export default function Tabs({ onSelect }: any) {
  return (
    <div className="flex flex-row gap-16 mt-4">
      <button
        onClick={() => {
          onSelect("breeds");
        }}
        className="text-4xl px-8 py-4 rounded-md shadow border border-gray-200 bg-white hover:bg-gray-100 cursor-pointer"
      >
        Breeds
      </button>
      <button
        onClick={() => {
          onSelect("facts");
        }}
        className="text-4xl px-8 py-4 rounded-md shadow border border-gray-200 bg-white hover:bg-gray-100 cursor-pointer"
      >
        Facts
      </button>
    </div>
  );
}
