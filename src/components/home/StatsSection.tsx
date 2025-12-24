import { motion } from "framer-motion";
import { Laptop, Users, Award, Clock, Wrench, ThumbsUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stats = [
  { 
    value: 5000, 
    suffix: "+", 
    label: "Devices Repaired", 
    icon: Laptop,
    description: "Laptops, desktops & more"
  },
  { 
    value: 99, 
    suffix: "%", 
    label: "Customer Satisfaction", 
    icon: ThumbsUp,
    description: "Based on customer reviews"
  },
  { 
    value: 30, 
    suffix: "-Day", 
    label: "Repair Warranty", 
    icon: Award,
    description: "On all repairs"
  },
  { 
    value: 24, 
    suffix: "hr", 
    label: "Average Turnaround", 
    icon: Clock,
    description: "For most repairs"
  },
  { 
    value: 10, 
    suffix: "+", 
    label: "Years Experience", 
    icon: Wrench,
    description: "Trusted since 2015"
  },
  { 
    value: 500, 
    suffix: "+", 
    label: "Business Clients", 
    icon: Users,
    description: "Across Ahmedabad"
  },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Trusted by Thousands in Ahmedabad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Here's why customers choose Rudra Enterprise.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative text-center p-6 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-gradient-gold mb-1">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </h3>
                
                <p className="font-medium text-foreground text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
