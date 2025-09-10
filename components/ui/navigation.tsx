"use client";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">V</span>
        </div>
        <span className="text-white font-semibold text-xl">Veredicto</span>
      </div>

      {/* CTA Button */}
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 transition-all duration-200"
        onClick={() => {
          document
            .getElementById("hero-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Request Early Access
      </Button>
    </nav>
  );
}
