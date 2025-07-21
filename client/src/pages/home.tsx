import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { UseCases } from "@/components/sections/use-cases";
import { USP } from "@/components/sections/usp";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <BackgroundBeamsWithCollision className="z-0">{null}</BackgroundBeamsWithCollision>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <USP />
          <section id="contact" className="py-20 bg-transparent"> 
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Let's discuss how AI automation can revolutionize your operations
                </p>
              </div>
              <div className="text-center">
                <button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
