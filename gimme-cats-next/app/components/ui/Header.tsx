export default function Header() {
  return (
    <header className="flex flex-row justify-between text-center w-full mx-auto py-4 bg-white drop-shadow items-baseline">
      <h1 className="flex text-5xl px-4">Gimme Cats</h1>
      <div className="flex items-center justify-between right-0 gap-8 px-8">
        <button className="text-2xl">Home</button>
        <button className="text-2xl">About</button>
      </div>
    </header>
  );
}
