import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <p className="text-gray-400 text-sm">
        &copy; 2025 Reels App. All rights reserved.
      </p>
      <div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          Terms of Service
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          Contact Us
        </Button>
      </div>
    </footer>
  );
}
