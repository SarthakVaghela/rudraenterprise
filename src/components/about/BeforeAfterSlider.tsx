import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Wrench, Thermometer, Camera } from "lucide-react";

const transformations = [
  {
    icon: Zap,
    before: "Slow performance",
    after: "4× faster boot time",
    description: "Complete system optimization with SSD upgrade and software cleanup."
  },
  {
    icon: Wrench,
    before: "Broken hinge",
    after: "Restored mobility",
    description: "Professional hinge replacement with reinforced mounting."
  },
  {
    icon: Thermometer,
    before: "Thermal throttling",
    after: "Stable temperatures",
    description: "Thermal paste replacement and cooling system cleanup."
  },
  {
    icon: Camera,
    before: "CCTV blind spots",
    after: "Full coverage",
    description: "Strategic camera repositioning and additional camera installation."
  }
];

const BeforeAfterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const current = transformations[currentIndex];
  const IconComponent = current.icon;

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Before & After <span className="text-gradient-gold">Transformations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the real results we deliver for our customers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-gold" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="text-center p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                <span className="text-sm text-destructive font-medium">BEFORE</span>
                <p className="text-xl font-montserrat font-bold text-foreground mt-2">
                  {current.before}
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gold/10 border border-gold/20">
                <span className="text-sm text-gold font-medium">AFTER</span>
                <p className="text-xl font-montserrat font-bold text-foreground mt-2">
                  {current.after}
                </p>
              </div>
            </div>

            <p className="text-center text-muted-foreground">{current.description}</p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border hover:border-gold/50 flex items-center justify-center text-foreground hover:text-gold transition-colors"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-gold" : "bg-border hover:bg-gold/50"
                  }`}
                  aria-label={`Go to transformation ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border hover:border-gold/50 flex items-center justify-center text-foreground hover:text-gold transition-colors"
              aria-label="Next transformation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;