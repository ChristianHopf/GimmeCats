import Link from "next/link";
import { PiCat } from "react-icons/pi";

export default function Header() {
  return (
    <header className="sticky shadow w-full bg-white ">
      <nav className="flex flex-row justify-between items-center text-center max-w-[1600px] mx-auto py-4">
        <div className="flex flex-row items-center">
          <h1 className="flex text-5xl px-4">Gimme Cats</h1>
          <PiCat className="text-4xl mt-1" />
        </div>

        <div className="flex items-center justify-between right-0 gap-8 px-8">
          <Link href="/">
            <button className="text-2xl">Home</button>
          </Link>
          <Link href="/about">
            <button className="text-2xl">About</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
