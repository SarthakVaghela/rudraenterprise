import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Network, 
  Server, 
  Camera, 
  Fingerprint, 
  Star 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const businessFeatures = [
  { icon: Network, title: "Secure network setup" },
  { icon: Server, title: "Server configuration" },
  { icon: Camera, title: "CCTV monitoring solutions" },
  { icon: Fingerprint, title: "Employee attendance systems" },
  { icon: Star, title: "Priority service for recurring clients" },
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

const BusinessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              For Businesses
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Smart Tech for <span className="text-gradient-gold">Smart Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We support offices, shops, and organizations with secure networking, 
              CCTV surveillance, biometric systems, and on-call IT support.
            </p>
            <Button variant="gold" asChild>
              <Link to="/contact">Get Business Support</Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4"
          >
            {businessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`p-5 rounded-xl bg-gradient-card border border-gold/20 hover:border-gold/40 transition-colors card-lift ${
                  index === businessFeatures.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{feature.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
