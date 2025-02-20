import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Video Reels
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Discover amazing video content with interactive product tags. 
          Scroll through our curated collection of videos and explore featured products.
        </p>
        <Link href="/reels">
          <Button size="lg" className="gap-3 mt-5">
            <PlayCircle className="w-5 h-5" />
            Start Watching
          </Button>
        </Link>
      </div>
    </main>
  );
}