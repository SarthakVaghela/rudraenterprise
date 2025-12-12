import { motion } from "framer-motion";
import { Award, Wrench, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechnicianSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Meet Your <span className="text-gradient-gold">Technician</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-card border-2 border-gold/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-2xl bg-gold/10 border-2 border-gold/30 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <Wrench className="w-12 h-12 text-gold mx-auto mb-2" />
                  <span className="text-gold text-sm font-medium">Expert</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                  Your Dedicated Expert
                </h3>
                <p className="text-gold font-medium mb-4">Lead Technician, Raxon Digital</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Hi, I've spent the last 8+ years repairing devices of all kinds. 
                  I treat every device like it's my own — with precision, patience, and pride. 
                  Your tech is in safe hands."
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">Certified Professional</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">8+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicianSection;
