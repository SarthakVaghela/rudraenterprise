import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gauge, Zap, RefreshCw, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: RefreshCw, text: "System cleanup & tune-up" },
  { icon: Shield, text: "Security optimization" },
  { icon: Zap, text: "Performance boost" },
  { icon: Gauge, text: "Startup speed improvement" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OptimizationSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gold/10 via-gold/5 to-transparent">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
              <Gauge className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Unlock the Real Performance of Your Device
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our Optimization Booster cleans, tunes, updates, and stabilizes your system 
              for peak performance, ideal for slow laptops and older desktops.
            </p>
            <Button variant="gold" asChild>
              <Link to="/contact">
                Get Optimized <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-card border border-gold/20 text-center card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-foreground font-medium text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;
