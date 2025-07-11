import { Card, CardContent } from "@/components/ui/card";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { ShoppingCart, Briefcase, Cloud, Heart, ExternalLink } from "lucide-react";

interface UseCase {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export function UseCases() {
  const cases: UseCase[] = [
    {
      icon: ShoppingCart,
      title: "E-commerce Growth",
      description:
        "An online retailer implemented our AI automation to handle customer inquiries, process orders, and manage inventory.",
      metrics: [
        { value: "85%", label: "Time Saved" },
        { value: "3x", label: "Revenue Growth" },
      ],
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "A consulting firm automated their lead qualification, scheduling, and client onboarding processes.",
      metrics: [
        { value: "60%", label: "Faster Onboarding" },
        { value: "4x", label: "More Qualified Leads" },
      ],
    },
    {
      icon: Cloud,
      title: "SaaS Platform",
      description:
        "A SaaS company automated their customer support, feature requests, and user onboarding workflows.",
      metrics: [
        { value: "40%", label: "Reduced Support Tickets" },
        { value: "2x", label: "User Activation Rate" },
      ],
    },
    {
      icon: Heart,
      title: "Healthcare Practice",
      description:
        "A healthcare practice automated appointment scheduling, patient follow-ups, and billing processes.",
      metrics: [
        { value: "70%", label: "Administrative Time Saved" },
        { value: "95%", label: "Patient Satisfaction" },
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-transparent">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how businesses like yours have transformed their operations with
              AI automation
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {cases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <useCase.icon className="h-5 w-5 text-blue-400 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-xl font-bold text-green-400 dark:text-green-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-blue-400 dark:text-blue-400 font-medium flex items-center cursor-pointer hover:text-blue-300 dark:hover:text-blue-300 transition-colors text-sm">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Case Study
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
