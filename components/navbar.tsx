import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="flex flex-row h-16 w-screen justify-center gap-16 font-cabin font-bold border-b border-gray-400">
            <div className="flex flex-row">
                <Image
                // className="dark:invert"
                src="/dusklogo.svg"
                alt="Dusk logo"
                width={60}
                height={60}
                priority
                />
                <div className="my-auto hover:underline">Planner</div>
            </div>
            <div className="my-auto hover:underline">Navbar 1</div>
            <div className="my-auto hover:underline">Navbar 2</div>
            <div className="my-auto hover:underline">Navbar 3</div>
        </div>
      </nav>
    </div>
  );
}