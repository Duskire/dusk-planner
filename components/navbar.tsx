import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row h-16 justify-between gap-8 font-cabin border-b border-gray-200 items-center px-6 shrink-0">
        <div className="flex flex-row justify-start gap-8">
            <div className="my-auto text-lg font-bold">Tasks</div>
            <div className="my-auto hover:underline">Standard</div>
            <div className="my-auto hover:underline">Compact</div>
        </div>
        <div>
          <input id="searchBar" className="justify-end" type="text" placeholder="Search..."></input>
        </div>
      </div>
    </nav>
  );
}