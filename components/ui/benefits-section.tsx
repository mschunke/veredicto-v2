import { Card } from "@/components/ui/card";

export function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
        >
          <title>AI Brain</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Your AI-Powered Second Brain",
      description:
        'Ask complex questions in plain English. "Find all contradictions in Witness Smith\'s two depositions." "Summarize all medical records from 2022." Veredicto finds the answer and cites the source.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
        >
          <title>Timeline</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Automated Case Chronology",
      description:
        "Stop building manual timelines. Veredicto reads every document and automatically generates a complete, interactive chronology of your case. Filter by date, person, or event to see the full story unfold.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
        >
          <title>Security Shield</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Bank-Grade Security & Privacy",
      description:
        "Your data is sacrosanct. Veredicto is built on a private, per-case AI model. Your information is never used for training. End-to-end encryption and enterprise-grade compliance are our foundation.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="p-8 bg-card/30 border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className="mb-6 p-3 bg-blue-600/10 rounded-lg w-fit">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {benefit.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {benefit.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
