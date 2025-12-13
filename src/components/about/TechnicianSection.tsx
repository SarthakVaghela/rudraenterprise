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
  const credentials = [
    { icon: Award, text: "Certified Technician" },
    { icon: Wrench, text: "5000+ Devices Repaired" },
    { icon: Clock, text: "10+ Years Experience" },
  ];

  return (
    <section className="section-padding bg-midnight">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Meet Your <span className="text-gradient-gold">Technician</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Every repair at Raxon Digital is handled by certified professionals who treat your 
              devices with the care they deserve. Our lead technician has over a decade of 
              experience bringing devices back to life.
            </p>
            <div className="flex flex-wrap gap-4">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-2 bg-steel px-4 py-2 rounded-full">
                  <cred.icon className="w-5 h-5 text-gold" />
                  <span className="text-foreground text-sm">{cred.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-steel rounded-2xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Lead Technician at Raxon Digital"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-midnight px-6 py-3 rounded-lg font-semibold">
              Lead Technician
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianSection;