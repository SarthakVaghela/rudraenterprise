import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Wrench, Thermometer, Camera } from "lucide-react";

const transformations = [
  {
    icon: Zap,
    before: "Slow performance",
    after: "4× faster boot time",
    description: "Complete system optimization with SSD upgrade and software cleanup.",
  },
  {
    icon: Wrench,
    before: "Broken hinge",
    after: "Restored mobility",
    description: "Professional hinge replacement with reinforced mounting.",
  },
  {
    icon: Thermometer,
    before: "Thermal throttling",
    after: "Stable temperatures",
    description: "Thermal paste replacement and cooling system cleanup.",
  },
  {
    icon: Camera,
    before: "CCTV blind spots",
    after: "Full coverage",
    description: "Strategic camera repositioning and additional camera installation.",
  },
];

const BeforeAfterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="section-padding bg-steel">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Before & After <span className="text-gradient-gold">Repair</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nothing builds confidence like seeing results.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-card border border-gold/30"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const IconComponent = transformations[currentIndex].icon;
                    return <IconComponent className="w-10 h-10 text-gold" />;
                  })()}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                    <span className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive font-medium">
                      {transformations[currentIndex].before}
                    </span>
                    <span className="text-2xl text-gold">→</span>
                    <span className="px-4 py-2 rounded-lg bg-green-500/10 text-green-500 font-medium">
                      {transformations[currentIndex].after}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {transformations[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-steel border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
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
              className="w-12 h-12 rounded-full bg-steel border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
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
