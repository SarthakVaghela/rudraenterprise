import { motion } from "framer-motion";
import { Leaf, Recycle, Heart } from "lucide-react";
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const SustainabilitySection = () => {
  const benefits = [
    { icon: Leaf, title: "Eco-Friendly", description: "Repair over replace reduces e-waste" },
    { icon: Recycle, title: "Sustainable", description: "Extend device lifespan by years" },
    { icon: Heart, title: "Cost-Effective", description: "Save money while saving the planet" },
  ];

  return (
    <section className="section-padding bg-steel">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Sustainability & <span className="text-gradient-gold">Device Longevity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe in repair over replacement. Every device we fix is one less in a landfill.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-midnight rounded-xl"
            >
              <benefit.icon className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;