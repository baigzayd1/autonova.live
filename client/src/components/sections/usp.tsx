import {
  Puzzle,
  Link,
  Settings,
  TrendingUp,
  Shield,
  Handshake,
} from "lucide-react";

export function USP() {
  const usps = [
    {
      icon: Puzzle,
      title: "Deep Customization",
      description:
        "Every solution is tailored to your specific needs, not generic templates.",
    },
    {
      icon: Link,
      title: "End-to-End Workflows",
      description:
        "Complete automation from start to finish, not just individual tasks.",
    },
    {
      icon: Settings,
      title: "Complex Integration Expertise",
      description:
        "We handle the most challenging integrations others can't solve.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Optimization",
      description:
        "Continuous improvement and optimization based on performance data.",
    },
    {
      icon: Shield,
      title: "Security & Scalability",
      description:
        "Enterprise-grade security with systems that scale with your growth.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnership",
      description: "We become part of your team, not just another vendor.",
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Autonova?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our unique approach sets us apart as your strategic AI automation
            partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <usp.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {usp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
