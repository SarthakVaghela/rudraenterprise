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
    <section className="py-16 bg-steel border-y border-border">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Before & After Transformations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the real results of our repair work
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-gold" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Before</p>
                <p className="font-semibold text-destructive">{current.before}</p>
              </div>
              <div className="text-center p-4 bg-green-500/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">After</p>
                <p className="font-semibold text-green-500">{current.after}</p>
              </div>
            </div>

            <p className="text-center text-muted-foreground">{current.description}</p>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-steel border border-border hover:border-gold/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-steel border border-border hover:border-gold/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BeforeAfterSlider;