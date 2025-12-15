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
    <section className="py-16 bg-steel border-y border-border">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Your Technician
            </h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience, our lead technician has repaired thousands of devices 
              and helped countless homes and businesses with their technology needs.
            </p>
            <div className="flex flex-wrap gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full"
                >
                  <credential.icon className="w-4 h-4 text-gold" />
                  <span className="text-sm text-foreground">{credential.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-square bg-gradient-card border border-border rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">Technician Photo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default TechnicianSection;