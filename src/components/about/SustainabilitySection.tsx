import { motion } from "framer-motion";
import { Leaf, Recycle, Heart } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SustainabilitySection = () => {
  return (
    <section className="section-padding bg-steel">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-green-500/10 via-gold/5 to-transparent border border-green-500/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-500" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-gold" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                  Better for Your Wallet.{" "}
                  <span className="text-green-500">Better for the Planet.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every repair extends a device's life, reducing e-waste and saving resources. 
                  We promote upgrades and repairs over unnecessary replacements whenever possible.
                </p>
                <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                  <Heart className="w-5 h-5 text-gold" />
                  <span className="text-gold font-medium">Repair. Don't Replace.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
