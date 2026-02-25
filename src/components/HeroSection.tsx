import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Iridescent seashells and pearls on a shore with holographic ocean light"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6"
        >
          Neuroinclusive Brand Growth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6"
        >
          Build a Brand That Works{" "}
          <em className="text-gradient-iridescent not-italic">With Your Brain.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm a late-diagnosed autistic (level 2) + ADHD creator helping neurodivergent
          creators grow sustainably in a neurotypical market through strategy, content,
          and mentorship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollTo("contact")}
            size="lg"
            className="min-h-[52px] px-8 text-base gradient-iridescent text-primary-foreground border-0 hover:opacity-90 transition-opacity"
          >
            Book a Neuroinclusive Strategy Call
          </Button>
          <Button
            onClick={() => scrollTo("process")}
            variant="outline"
            size="lg"
            className="min-h-[52px] px-8 text-base"
          >
            See How We Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
