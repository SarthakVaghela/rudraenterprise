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
            Meet Your <span className="text-gradient-gold">Technician</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-card border border-gold/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center flex-shrink-0">
                <Award className="w-16 h-16 text-gold" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                  The Raxon Digital Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  "We've spent years repairing devices of all kinds. We treat every device 
                  like it's our own — with precision, patience, and pride. Your tech problems 
                  become our mission to solve."
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Wrench className="w-4 h-4 text-gold" />
                    <span>5000+ Repairs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>8+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-gold" />
                    <span>Certified Technicians</span>
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