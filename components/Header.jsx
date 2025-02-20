import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 font-bold font-['Poppins'] py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">Reels App</h1>
        </Link>
      </div>
    </header>
  );
}
