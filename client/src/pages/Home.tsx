import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MapPin, Info, Tag, Menu, X, Plane, Mountain, Trees, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Assets
import heroBg from "@/assets/images/hero-safari.jpg";

const countries = [
  {
    name: "Uganda",
    flag: "🇺🇬",
    image: "/src/assets/images/uganda-gorilla.jpg",
    subtitle: "The Pearl of Africa",
    beauty: "A land of waterfalls, forests, and rare wildlife. Home to endangered mountain gorillas and the source of the Nile.",
    activities: ["Gorilla trekking", "Wildlife safaris", "Nile boat cruises", "Cultural village tours", "Mountain hiking"],
    bestTime: "June–September & December–February"
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    image: "/src/assets/images/tanzania-kili.jpg",
    subtitle: "Safari Capital of Africa",
    beauty: "Endless plains, Africa’s highest mountain, and tropical islands.",
    activities: ["Serengeti & Ngorongoro safaris", "Mount Kilimanjaro climbing", "Zanzibar beach holidays", "Cultural Maasai visits"],
    bestTime: "June–October (safari), December–February (beaches)"
  },
  {
    name: "Kenya",
    flag: "🇰🇪",
    image: "/src/assets/images/hero-safari.jpg",
    subtitle: "The Original Safari Experience",
    beauty: "Famous savannahs, rich tribal culture, and white-sand beaches.",
    activities: ["Masai Mara game drives", "Maasai cultural tours", "Beach holidays", "Mountain hiking"],
    bestTime: "July–October & January–March"
  },
  {
    name: "Rwanda",
    flag: "🇷🇼",
    image: "/src/assets/images/tour-coastal.jpg",
    subtitle: "Land of a Thousand Hills",
    beauty: "Clean, green, safe, and scenic with unique primate trekking.",
    activities: ["Gorilla trekking", "Forest canopy walk", "Lake Kivu relaxation", "Cultural & historical tours"],
    bestTime: "June–September & December–February"
  },
  {
    name: "Benin",
    flag: "🇧🇯",
    image: "/src/assets/images/hero-safari.jpg",
    subtitle: "Cradle of African Spirituality",
    beauty: "Ancient kingdoms, voodoo culture, and living history.",
    activities: ["Royal palace tours", "Ganvié stilt village canoe rides", "Voodoo festival visits", "Slave route heritage tours"],
    bestTime: "November–March"
  },
  {
    name: "Morocco",
    flag: "🇲🇦",
    image: "/src/assets/images/morocco-medina.jpg",
    subtitle: "Where Africa Meets Europe",
    beauty: "Medinas, deserts, mountains, and vibrant colors.",
    activities: ["Sahara camel trekking", "Medina shopping tours", "Atlas Mountains trekking", "Food & hammam experiences"],
    bestTime: "March–May & September–November"
  },
  {
    name: "Algeria",
    flag: "🇩🇿",
    image: "/src/assets/images/tour-desert.jpg",
    subtitle: "Sahara’s Best Kept Secret",
    beauty: "Vast desert landscapes, Roman ruins, and ancient rock art.",
    activities: ["Sahara desert expeditions", "Rock art exploration", "Roman ruins tours", "Tuareg cultural experiences"],
    bestTime: "October–April"
  }
];

const pricingData = [
  { country: "Uganda", budget: "€830 – €1,200", standard: "€1,290 – €1,840", luxury: "€2,120 – €3,220" },
  { country: "Tanzania", budget: "€1,100 – €1,660", standard: "€1,840 – €2,760", luxury: "€3,220 – €5,060" },
  { country: "Kenya", budget: "€1,010 – €1,560", standard: "€1,750 – €2,580", luxury: "€2,940 – €4,420" },
  { country: "Rwanda", budget: "€1,470 – €2,120", standard: "€2,300 – €3,220", luxury: "€3,680 – €5,520" },
  { country: "Benin", budget: "€640 – €1,010", standard: "€1,100 – €1,660", luxury: "€2,020 – €3,220" },
  { country: "Morocco", budget: "€550 – €920", standard: "€1,100 – €1,750", luxury: "€2,300 – €3,680" },
  { country: "Algeria", budget: "€740 – €1,100", standard: "€1,200 – €1,840", luxury: "€2,300 – €3,680" }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-8"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <a href="#" className={`font-serif text-2xl font-bold tracking-[0.15em] transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
              VISIT AFRICA
            </a>
            {!scrolled && (
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 -mt-1">
                Tours & Travel
              </span>
            )}
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {["Destinations", "Activities", "Pricing", "About"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs font-bold tracking-[0.2em] uppercase transition-all hover:text-primary ${scrolled ? "text-foreground" : "text-white/90"}`}>
                {item}
              </a>
            ))}
            <Button className={`rounded-none px-8 font-bold tracking-widest uppercase text-xs transition-all ${scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}>
              Inquire Now
            </Button>
          </div>

          <button className="md:hidden invisible">
            {mobileMenuOpen ? <X className={scrolled ? "text-foreground" : "text-white"} /> : <Menu className={scrolled ? "text-foreground" : "text-white"} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10 }} className="absolute inset-0 z-0">
          <img src={heroBg} alt="Visit Africa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="block text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-6 text-primary drop-shadow-lg">
              Visit Africa Tours & Travel
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] max-w-5xl mx-auto italic">
              Explore Africa’s Beauty, Culture & Adventure
            </h1>
            <p className="text-lg md:text-xl font-sans text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              From lush rainforests to golden deserts, from gorillas to ancient kingdoms—Africa offers the world’s most diverse and authentic travel experiences.
            </p>
            <Button 
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 py-8 text-sm font-bold tracking-[0.2em] uppercase group"
            >
              Start Your Journey
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="py-32 bg-background border-b border-border/50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Globe className="h-12 w-12 text-primary mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
            Our company connects you to nature, culture, and adventure with professionally guided tours and tailor-made packages.
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-serif mb-4">Countries We Cover</h2>
            <p className="text-muted-foreground text-lg max-w-xl">We specialize in unforgettable travel experiences across Africa's most iconic landscapes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, idx) => (
              <motion.div 
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border/40 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-6 left-6">
                    <span className="text-4xl drop-shadow-lg">{country.flag}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="rounded-none border-primary/20 text-primary uppercase tracking-widest text-[10px] py-1">
                      {country.name}
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-serif mb-2 group-hover:text-primary transition-colors">{country.name}</h3>
                  <p className="text-primary/70 font-bold text-xs uppercase tracking-widest mb-6">{country.subtitle}</p>
                  <p className="text-muted-foreground mb-10 leading-relaxed italic">"{country.beauty}"</p>
                  
                  <div className="space-y-3 mb-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">Activities</p>
                    <div className="flex flex-wrap gap-2">
                      {country.activities.map(act => (
                        <span key={act} className="text-sm border-b border-border/60 pb-1 text-foreground/80">{act}</span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border/40">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Best Time to Visit</p>
                    <p className="text-sm font-medium">{country.bestTime}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <Tag className="h-8 w-8 text-primary mx-auto mb-6" />
            <h2 className="text-5xl font-serif mb-6">Package Pricing</h2>
            <p className="text-muted-foreground">The prices shown represent the minimum cost, based on selecting the fewest activities. We have structured the pricing around budget-friendly options.</p>
          </div>

          <div className="overflow-hidden border border-border/60 shadow-2xl bg-card">
            <Table>
              <TableHeader className="bg-secondary/20">
                <TableRow className="border-border/60 hover:bg-transparent">
                  <TableHead className="py-8 font-serif text-xl px-8">Country</TableHead>
                  <TableHead className="py-8 font-serif text-xl">Budget Package</TableHead>
                  <TableHead className="py-8 font-serif text-xl">Standard Package</TableHead>
                  <TableHead className="py-8 font-serif text-xl px-8">Luxury Package</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((row) => (
                  <TableRow key={row.country} className="border-border/40 hover:bg-secondary/5 transition-colors group">
                    <TableCell className="py-6 font-bold px-8 group-hover:text-primary transition-colors">{row.country}</TableCell>
                    <TableCell className="py-6 font-sans text-muted-foreground">{row.budget}</TableCell>
                    <TableCell className="py-6 font-sans text-muted-foreground">{row.standard}</TableCell>
                    <TableCell className="py-6 font-sans text-foreground font-medium px-8">{row.luxury}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-widest italic">Note: Prices are subject to customization based on final itinerary.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-20 gap-16">
            <div className="max-w-md">
              <h2 className="font-serif text-3xl font-bold tracking-[0.2em] text-primary mb-8">VISIT AFRICA</h2>
              <p className="text-white/50 leading-relaxed font-sans text-lg">
                Professionally guided tours and tailor-made packages connecting you to the heart of Africa.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-serif text-lg mb-6 text-white/90">Navigation</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                  <li><a href="#destinations" className="hover:text-primary transition-colors">Destinations</a></li>
                  <li><a href="#activities" className="hover:text-primary transition-colors">Activities</a></li>
                  <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-6 text-white/90">Company</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                  <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Impact</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            <p>&copy; 2026 Visit Africa Tours & Travel. All rights reserved.</p>
            <div className="mt-6 md:mt-0 space-x-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
