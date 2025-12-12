import { motion } from "framer-motion";
import { 
  Thermometer, 
  BatteryCharging, 
  Cpu, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

const diagnosticPoints = [
  { icon: Thermometer, text: "Thermal & hardware scan" },
  { icon: BatteryCharging, text: "Power supply integrity test" },
  { icon: Cpu, text: "Software & performance check" },
  { icon: ShieldCheck, text: "Security & malware review" },
  { icon: Clock, text: "Component lifespan estimate" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const DeepDiagnosticsSection = () => {
  return (
    <section className="section-padding bg-gradient-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              Our Unique Process
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Raxon Deep Diagnostics™
            </h2>
            <p className="text-xl text-gold font-medium mb-6">
              Find the real problem, not the symptoms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our multi-point diagnostic system checks hardware, software, thermals, power flow, 
              and system health to identify hidden issues before they become costly failures.
              <br /><br />
              <span className="text-foreground font-medium">
                This is how we repair faster — and repair once.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-4"
          >
            {diagnosticPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4 p-4 rounded-xl bg-steel/50 border border-gold/20 hover:border-gold/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-lg text-foreground font-medium">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeepDiagnosticsSection;
