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
    setCurrentIndex(prev => (prev + 1) % transformations.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + transformations.length) % transformations.length);
  };
  const current = transformations[currentIndex];
  const IconComponent = current.icon;

  return (
    <section className="section-padding bg-midnight">
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real repairs. See the difference our expertise makes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-steel rounded-xl p-8 md:p-12"
          >
            <div className="flex items-center justify-center mb-8">
              <IconComponent className="w-16 h-16 text-gold" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-destructive/10 rounded-lg border border-destructive/20">
                <span className="text-sm uppercase tracking-wider text-destructive mb-2 block">Before</span>
                <p className="text-xl font-semibold text-foreground">{current.before}</p>
              </div>
              <div className="text-center p-6 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-sm uppercase tracking-wider text-green-500 mb-2 block">After</span>
                <p className="text-xl font-semibold text-foreground">{current.after}</p>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground text-lg">
              {current.description}
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-steel hover:bg-gold/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gold" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-steel"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-steel hover:bg-gold/20 transition-colors"
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