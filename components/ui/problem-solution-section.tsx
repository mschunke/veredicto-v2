export function ProblemSolutionSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Problem Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Real Cost Isn't the Document Storage. It's Your Time.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            You already have systems to store your case files. But the most
            valuable work—connecting the dots, finding inconsistencies, and
            building the narrative—still relies on countless hours of manual,
            non-billable reading. You're burning your most precious resource:
            your focus.
          </p>
        </div>

        {/* Solution Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Unfair Advantage is an AI That Thinks.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Veredicto isn't another file cabinet. It's a strategic partner that
            has read every word of your case file. It never gets tired, never
            misses a detail, and is ready to assist you 24/7. This allows you to
            move from tedious review to high-level strategy faster than your
            opposition.
          </p>
        </div>
      </div>
    </div>
  );
}
