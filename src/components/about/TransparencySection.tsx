import { motion } from "framer-motion";
import { FileText, Package, Sparkles } from "lucide-react";

const transparencyItems = [
  {
    icon: FileText,
    title: "Fixed estimates",
    description: "You approve before we repair",
  },
  {
    icon: Package,
    title: "Real parts only",
    description: "Verified, high-quality components",
  },
  {
    icon: Sparkles,
    title: "Return-ready devices",
    description: "Cleaned, optimized, updated",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const TransparencySection = () => {
  return (
    <section className="section-padding bg-gradient-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            No Guesswork. <span className="text-gradient-gold">No Hidden Fees.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            People love clarity. Here's how we deliver it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {transparencyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 md:p-8 rounded-2xl bg-gradient-card border-2 border-gold/30 text-center card-lift"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TransparencySection;
