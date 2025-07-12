import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
        
        // Always show navbar when at the top
        if (currentScrollY < 10) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center w-full justify-between">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Autonova
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      if (item.href.startsWith("#")) {
                        scrollToSection(item.href.substring(1));
                      } else {
                        window.location.href = item.href;
                      }
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-100 dark:bg-gray-900 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    if (item.href.startsWith("#")) {
                      scrollToSection(item.href.substring(1));
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
