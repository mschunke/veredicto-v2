import { Card } from "@/components/ui/card";

export function DemoSection() {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        From 10,000 Pages to the One Fact That Matters. In Seconds.
      </h2>

      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Veredicto ingests everything, understands the context, and finds the
        needle in the haystack. So you can focus on strategy, not search.
      </p>

      {/* Demo Video Placeholder */}
      <Card className="mx-auto max-w-4xl bg-card/30 border-gray-800 p-8">
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>Play demo</title>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Interactive Demo Coming Soon
            </h3>
            <p className="text-gray-400 max-w-md">
              Watch how a user uploads messy PDFs, asks "What did Dr. Evans say
              about pre-existing conditions?" and gets instant answers with
              citations.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
