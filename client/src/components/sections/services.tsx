import { Card, CardContent } from "@/components/ui/card";
import { ContainerScroll } from "@/components/ui/container-scroll";
import {
  Settings,
  Plug,
  Mail,
  Target,
  Magnet,
  PenTool,
  Building,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Settings,
      title: "Custom AI Automations",
      description:
        "Tailored AI solutions that adapt to your unique workflows, processes, and business requirements.",
    },
    {
      icon: Plug,
      title: "Seamless Multi-App Integration",
      description:
        "Connect all your platforms and tools with intelligent automation that works across systems.",
    },
    {
      icon: Mail,
      title: "Automated Email Management",
      description:
        "Smart email automation and outreach systems that nurture leads and maintain relationships.",
    },
    {
      icon: Target,
      title: "Cold Outreach & Sales Automation",
      description:
        "Intelligent sales automation that qualifies leads and converts prospects into customers.",
    },
    {
      icon: Magnet,
      title: "Lead Generation Workflows",
      description:
        "Automated systems that identify, qualify, and nurture high-quality leads for your business.",
    },
    {
      icon: PenTool,
      title: "Content & Script Automation",
      description:
        "AI-powered content creation and script automation for marketing, sales, and communication.",
    },
    {
      icon: Building,
      title: "Industry-Specific Solutions",
      description:
        "Scalable AI automations designed for specific industries with deep domain expertise.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our AI Automation Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to revolutionize how your business
              operates
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-h-full">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-4">
                <div className="mb-3">
                  <service.icon className="h-5 w-5 text-blue-400 dark:text-blue-400 mb-2" />
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
                <div className="text-blue-400 dark:text-blue-400 font-medium flex items-center cursor-pointer hover:text-blue-300 dark:hover:text-blue-300 transition-colors text-xs">
                  <ArrowRight className="mr-1 h-3 w-3" />
                  Learn More
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
