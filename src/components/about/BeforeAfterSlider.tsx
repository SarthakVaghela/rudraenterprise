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
  return;
};
export default BeforeAfterSlider;