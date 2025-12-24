import { motion } from "framer-motion";
import { Award, Wrench, Clock } from "lucide-react";
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
const TechnicianSection = () => {
  const credentials = [{
    icon: Award,
    text: "Certified Technician"
  }, {
    icon: Wrench,
    text: "5000+ Devices Repaired"
  }, {
    icon: Clock,
    text: "10+ Years Experience"
  }];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-8">
            Meet Our Expert Technicians
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-card border border-border"
              >
                <cred.icon className="w-5 h-5 text-gold" />
                <span className="text-foreground font-medium">{cred.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicianSection;