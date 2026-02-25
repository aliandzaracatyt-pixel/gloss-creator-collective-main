import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 gradient-iridescent-soft" aria-labelledby="final-cta-heading">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8"
        >
          Ready to Build a Brand You Can Sustain?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="min-h-[52px] px-8 text-base gradient-iridescent text-primary-foreground border-0 hover:opacity-90 transition-opacity"
          >
            Book a Neuroinclusive Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
