import { motion } from "framer-motion";
import { Leaf, Recycle, Heart } from "lucide-react";
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const SustainabilitySection = () => {
  const benefits = [{
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Repair over replace reduces e-waste"
  }, {
    icon: Recycle,
    title: "Sustainable",
    description: "Extend device lifespan by years"
  }, {
    icon: Heart,
    title: "Cost-Effective",
    description: "Save money while saving the planet"
  }];
  return;
};
export default SustainabilitySection;