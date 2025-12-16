import { motion } from "framer-motion";
import { Award, Wrench, Clock } from "lucide-react";
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
const TechnicianSection = () => {
  const credentials = [{
    icon: Award,
    text: "Certified Technician"
  }, {
    icon: Wrench,
    text: "5000+ Devices Repaired"
  }, {
    icon: Clock,
    text: "10+ Years Experience"
  }];
  return;
};
export default TechnicianSection;