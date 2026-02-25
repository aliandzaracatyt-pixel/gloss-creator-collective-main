import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Clarity Session",
    desc: "We define goals, blockers, and what sustainable growth looks like for you.",
  },
  {
    num: "02",
    title: "Build Your System",
    desc: "We create a practical strategy and content workflow you can maintain.",
  },
  {
    num: "03",
    title: "Create + Optimize",
    desc: "We execute, review, and refine based on results and capacity.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-background" aria-labelledby="process-heading">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.h2
        id="process-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
      >
        A Simple 3-Step Process
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="text-center"
          >
            <span className="text-5xl font-serif font-bold text-gradient-iridescent">
              {step.num}
            </span>
            <h3 className="font-serif text-xl font-semibold text-foreground mt-4 mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
