import { motion } from "framer-motion";
import { Heart, Shield, Coffee, Calendar, Star, ChevronDown, Mail, ArrowRight, Home as HomeIcon, Lock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@assets/generated_images/abstract_soft_waves_blurred_texture_in_cream_and_sage.png";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif text-primary font-medium tracking-tight">The Haven Collective NYC</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection("benefits")} className="hover:text-primary transition-colors">Benefits</button>
            <button onClick={() => scrollToSection("how-it-works")} className="hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">FAQ</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Abstract soft waves blurred texture" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-[1.1]">
              Your Cuddling Career <br/>
              <span className="italic text-primary">Deserves a Safe Home.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              A private, secure studio in NYC for professional cuddlers. We handle safety and space, so you can focus on your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.open("https://forms.gle/2A1jW9dXz9b9nW5y8", "_blank")} size="lg" className="rounded-full h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Apply for Partnership
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Why Partner With Us?</h2>
            <p className="text-muted-foreground text-lg">We provide the infrastructure so you can provide the care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BenefitCard 
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Safety First"
              description="Comprehensive vetting, secure check-ins, and 24/7 on-site support to ensure your complete peace of mind."
            />
            <BenefitCard 
              icon={<HomeIcon className="w-8 h-8 text-accent" />}
              title="A Professional Space"
              description="A beautifully furnished, soundproofed studio designed specifically for platonic touch therapy."
            />
            <BenefitCard 
              icon={<Lock className="w-8 h-8 text-primary" />}
              title="Total Discretion"
              description="Private entrances and strict confidentiality protocols to protect both you and your clients."
            />
            <BenefitCard 
              icon={<Briefcase className="w-8 h-8 text-accent" />}
              title="A True Partnership"
              description="We handle the space and security so you can focus on what you do best - Connecting"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">How It Works</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 md:gap-4 relative">
            
            <StepCard 
              number="1"
              title="Apply"
              description="Fill out our professional application"
            />
            
            <div className="hidden md:flex items-center justify-center w-full max-w-[100px] text-primary/30 -mt-20">
              <ArrowRight className="w-8 h-8" />
            </div>

            <StepCard 
              number="2"
              title="Get Vetted"
              description="Background check + interview"
            />

            <div className="hidden md:flex items-center justify-center w-full max-w-[100px] text-primary/30 -mt-20">
              <ArrowRight className="w-8 h-8" />
            </div>

            <StepCard 
              number="3"
              title="Start Booking"
              description="Use our secure, private studio when your clients book sessions"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%">
             <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
               <circle cx="20" cy="20" r="1" fill="currentColor" />
             </pattern>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
           </svg>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <Star className="w-8 h-8 mx-auto mb-8 text-primary-foreground/60" />
          <blockquote className="text-2xl md:text-4xl font-serif italic leading-relaxed max-w-4xl mx-auto mb-8">
            "I didn't realize how touch-starved I was until my first session. Ideally, we'd all get this from community, but in a busy city, The Haven Collective NYC is an oasis of genuine human warmth."
          </blockquote>
          <cite className="not-italic text-sm font-medium tracking-widest uppercase opacity-80">
            — Joy S. Client since 2025
          </cite>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-left">Is this sexual?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely not. The Haven Collective NYC is a strictly platonic, non-sexual service. We adhere to a strict code of conduct. Any inappropriate behavior or requests will result in immediate termination of the session.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-left">What happens during a session?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sessions are client-led within agreed boundaries. We might sit side-by-side, hold hands, spoon (clothed), or simply talk while maintaining contact. You are always in control of the level of touch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-left">What should I wear?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We recommend comfortable, clean clothing like sweatpants, yoga pants, and a t-shirt. For hygiene and comfort, we ask that clients wear a minimum of a t-shirt and shorts (no tank tops or very short shorts).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-left">How long is a session?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Our standard sessions are 60 minutes, but we offer 90-minute and 2-hour sessions for established clients who want deeper relaxation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Ready to host your sessions in a space designed for safety and serenity?</h2>
          <Button onClick={() => window.open("https://forms.gle/2A1jW9dXz9b9nW5y8", "_blank")} size="lg" className="rounded-full h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/10">
            Apply to become a partner <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif text-primary font-medium">The Haven Collective NYC</div>
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} The Haven Collective NYC. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="mailto:partnerships@thehavencollectivenyc.com" className="hover:text-primary flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300">
      <CardContent className="pt-8 pb-8 px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-background border-4 border-white shadow-lg flex items-center justify-center mb-6 text-2xl font-serif font-bold text-primary">
        {number}
      </div>
      <h3 className="text-2xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
