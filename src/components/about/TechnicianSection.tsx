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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Your Technician
            </h2>
            <p className="text-muted-foreground mb-6">
              With over 10 years of experience in computer repair and security systems,
              our lead technician brings expertise and dedication to every job.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-foreground">Certified Hardware Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-primary" />
                <span className="text-foreground">5,000+ Devices Repaired</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">Same-Day Service Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 md:order-2"
          >
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Wrench className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Technician</h3>
              <p className="text-muted-foreground">Ready to solve your tech problems</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default TechnicianSection;