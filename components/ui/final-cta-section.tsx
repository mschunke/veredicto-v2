"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function FinalCTASection() {
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
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        The Future of Litigation is Here.
      </h2>

      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Clio and MyCase help you manage your practice. Veredicto helps you win
        your case.
      </p>

      <p className="text-lg text-blue-300 mb-12 font-medium">
        Stop drowning in documents. Start building your argument.
      </p>

      <Card className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur border-gray-800">
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
          Limited spots available for our founding members program.
        </p>
      </Card>
    </div>
  );
}
