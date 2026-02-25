import { motion } from "framer-motion";

const services = [
  {
    title: "Neuroinclusive Social Strategy",
    desc: "A clear plan built around your goals, strengths, and working style.",
  },
  {
    title: "Content Creation & Reels",
    desc: "Premium, on-brand content that is strategic, not random.",
  },
  {
    title: "Monthly Social Management",
    desc: "Publishing, optimization, and performance guidance with low-overwhelm workflows.",
  },
  {
    title: "Brand Vision Mentorship",
    desc: "Ongoing support to shape future direction, offers, and positioning.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 gradient-iridescent-soft" aria-labelledby="services-heading">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
      >
        Strategy, Systems, and Content Support
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
