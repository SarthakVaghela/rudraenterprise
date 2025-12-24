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
  const benefits = [{
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Repair over replace reduces e-waste"
  }, {
    icon: Recycle,
    title: "Sustainable",
    description: "Extend device lifespan by years"
  }, {
    icon: Heart,
    title: "Cost-Effective",
    description: "Save money while saving the planet"
  }];
  
  return (
    <section className="py-16 bg-steel">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Repair, Don't Replace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our mission for a sustainable future
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
              className="text-center p-6 rounded-xl bg-gradient-card border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;