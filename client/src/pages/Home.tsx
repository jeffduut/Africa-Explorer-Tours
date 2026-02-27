import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Compass, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import heroBg from "@/assets/images/hero-safari.jpg";
import tourDesert from "@/assets/images/tour-desert.jpg";
import tourCoastal from "@/assets/images/tour-coastal.jpg";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl font-bold tracking-wider ${scrolled ? "text-primary" : "text-white"}`}>
            VISIT AFRICA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Destinations", "Tours", "About", "Journal"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}
            <Button
              className={`rounded-full px-8 ${
                scrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-background shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {["Destinations", "Tours", "About", "Journal"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="rounded-full w-full bg-primary text-white mt-4">
              Book Now
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="African Safari Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-sm md:text-base font-sans tracking-[0.2em] uppercase mb-4 text-white/80"
          >
            Journey into the wild
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight max-w-4xl mx-auto"
          >
            Experience the Soul of Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-sans text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From the endless golden dunes of the Sahara to the untamed savannas and breathtaking coastlines. Your adventure awaits.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg group">
              Explore Tours 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-24 md:py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Signature Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Curated Journeys</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Safari Package */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={heroBg} alt="Safari Tour" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-foreground">
                  7 Days
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Compass className="h-4 w-4" />
                  <span>Serengeti, Tanzania</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">The Great Migration</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  Witness nature's greatest spectacle. Daily game drives, luxury tented camps, and sundowners over the savanna.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="font-serif">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="block text-xl font-medium text-foreground">$1,250</span>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Desert Package */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={tourDesert} alt="Desert Tour" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-foreground">
                  5 Days
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Sun className="h-4 w-4" />
                  <span>Sahara, Morocco</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Dunes & Stars</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  Trek across magnificent sand dunes on camelback, explore ancient kasbahs, and sleep under a blanket of stars.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="font-serif">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="block text-xl font-medium text-foreground">$850</span>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Coastal Package */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={tourCoastal} alt="Coastal Tour" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-foreground">
                  10 Days
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>Garden Route, South Africa</span>
                </div>
                <h3 className="text-2xl font-serif mb-3">Coastal Wonders</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  Journey along spectacular coastlines, surf world-class waves, and encounter diverse marine life and culture.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="font-serif">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="block text-xl font-medium text-foreground">$1,450</span>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Value Proposition */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroBg} alt="Travelers in Africa" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Travel With Purpose</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
                We believe travel should be transformative. For over a decade, we've crafted authentic African experiences that connect you deeply with local cultures, preserve magnificent wildlife, and leave you with stories to last a lifetime.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Expert Local Guides", desc: "Passionate experts who call these lands home." },
                  { title: "Sustainable Tourism", desc: "Every trip supports local communities and conservation." },
                  { title: "Tailored Experiences", desc: "Customized itineraries crafted to your exact pace." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-serif font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-medium mb-1">{item.title}</h4>
                      <p className="text-muted-foreground font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="mt-10 bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-lg">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-2xl font-bold tracking-wider text-primary mb-6">VISIT AFRICA</h2>
              <p className="text-white/60 max-w-sm mb-6 font-sans">
                Crafting unforgettable journeys across the African continent. Safari, desert, and coastal adventures tailored for the modern explorer.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3 font-sans text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">Our Tours</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Travel Journal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Contact</h4>
              <ul className="space-y-3 font-sans text-white/60">
                <li>hello@visitafrica.com</li>
                <li>+27 (0) 21 555 0123</li>
                <li>Cape Town, South Africa</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-sans">
            <p>&copy; 2026 Visit Africa Tours & Travel. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
