import Image from "next/image";

export default function Leftbar() {
  return (
    <aside className="w-64 h-full shrink-0 font-cabin font-bold border-r border-gray-200">
      <div className="flex flex-row h-16 justify-center">
        <Image
        // className="dark:invert"
        src="/dusklogo.svg"
        alt="Dusk logo"
        width={48}
        height={48}
        priority
        />
        <div className="my-auto hover:underline">Planner</div>
      </div>
    </aside>
  );
}