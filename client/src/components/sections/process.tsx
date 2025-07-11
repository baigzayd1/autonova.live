import { ContainerScroll } from "@/components/ui/container-scroll";

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Understand Your Needs",
      description:
        "Deep dive into your business processes, pain points, and automation opportunities.",
    },
    {
      number: "2",
      title: "Map Your Systems",
      description:
        "Comprehensive analysis of your current tools and workflows to identify integration points.",
    },
    {
      number: "3",
      title: "Build & Integrate",
      description:
        "Custom AI development and seamless integration with your existing infrastructure.",
    },
    {
      number: "4",
      title: "Ongoing Support",
      description:
        "Continuous optimization, monitoring, and support to ensure peak performance.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-transparent">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach to implementing AI automation that delivers
              results
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-8 h-8 flex items-center justify-center mb-3 mx-auto">
                <span className="text-white font-bold text-xs">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
