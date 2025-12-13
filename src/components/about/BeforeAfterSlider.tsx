import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Wrench, Thermometer, Camera } from "lucide-react";
const transformations = [{
  icon: Zap,
  before: "Slow performance",
  after: "4× faster boot time",
  description: "Complete system optimization with SSD upgrade and software cleanup."
}, {
  icon: Wrench,
  before: "Broken hinge",
  after: "Restored mobility",
  description: "Professional hinge replacement with reinforced mounting."
}, {
  icon: Thermometer,
  before: "Thermal throttling",
  after: "Stable temperatures",
  description: "Thermal paste replacement and cooling system cleanup."
}, {
  icon: Camera,
  before: "CCTV blind spots",
  after: "Full coverage",
  description: "Strategic camera repositioning and additional camera installation."
}];
const BeforeAfterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };
  const current = transformations[currentIndex];

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real results of our expert repairs.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-gradient-card border border-gold/20"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <current.icon className="w-8 h-8 text-gold" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <span className="text-sm text-muted-foreground block mb-2">Before</span>
                <span className="text-xl font-bold text-foreground">{current.before}</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <span className="text-sm text-muted-foreground block mb-2">After</span>
                <span className="text-xl font-bold text-foreground">{current.after}</span>
              </div>
            </div>

            <p className="text-center text-muted-foreground">{current.description}</p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gold" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;