import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row h-16 justify-left gap-16 font-cabin font-bold border-b border-gray-200 items-center px-6 shrink-0">
          <div className="my-auto hover:underline">Navbar 1</div>
          <div className="my-auto hover:underline">Navbar 2</div>
          <div className="my-auto hover:underline">Navbar 3</div>
      </div>
    </nav>
  );
}