import { motion } from "framer-motion";
import { Award, Wrench, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechnicianSection = () => {
  const credentials = [
    { icon: Award, text: "Certified Technician" },
    { icon: Wrench, text: "5000+ Devices Repaired" },
    { icon: Clock, text: "10+ Years Experience" },
  ];

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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your device is in expert hands.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-card border border-gold/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square rounded-xl bg-steel flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="text-5xl font-montserrat font-bold text-gold">RE</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                  Expert Tech Team
                </h3>
                <p className="text-gold font-medium mb-4">Lead Technician & Founder</p>
                <p className="text-muted-foreground mb-6">
                  With over a decade of experience in computer repair and IT services, 
                  our team has built a reputation for honest, reliable service. Every device 
                  receives personal attention and expert care.
                </p>
                
                <div className="space-y-3">
                  {credentials.map((cred, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                        <cred.icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground">{cred.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianSection;