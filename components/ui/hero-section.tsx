"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement email submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you! You've been added to our waitlist.");
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
          {/* Neural network lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-blue-400/20 to-transparent rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-px bg-gradient-to-l from-purple-400/20 to-transparent -rotate-45 animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
          Stop Reading Documents. Start Interrogating Them.
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Veredicto is the AI-powered second brain for litigation teams. Upload
          your entire case file—discovery, depositions, records—and get instant
          answers, timelines, and summaries.
        </h2>

        <Card
          className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur border-gray-800"
          id="hero-form"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/80 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-400"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200"
            >
              {isSubmitting ? "Requesting Access..." : "Request Early Access"}
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            Join the waitlist for early access. Be the first to leverage AI to
            win your case.
          </p>
        </Card>
      </div>
    </div>
  );
}
