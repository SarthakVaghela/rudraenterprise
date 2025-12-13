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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Before & After Repairs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the transformations we deliver for our customers.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <current.icon className="w-12 h-12 text-primary" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Before</p>
                <p className="text-lg font-semibold text-destructive">{current.before}</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">After</p>
                <p className="text-lg font-semibold text-primary">{current.after}</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground">{current.description}</p>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-card border border-border rounded-full hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-card border border-border rounded-full hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BeforeAfterSlider;