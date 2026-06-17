import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechStorySection = () => {
  return (
    <section className="section-padding bg-steel">
      <div className="container mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
            Tech That Works as Hard as{" "}
            <span className="text-gradient-gold">You Do</span>
          </h2>
          <p className="text-xl text-gold font-medium mb-8">
            Technology should serve you, not slow you down.
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Every device tells a story. A startup laptop, a gaming rig pushed to its limits, 
              a business system running day and night.
            </p>
            <p>
              At Rudra Enterprise, we restore the speed, stability, and security that modern life depends on.
            </p>
            <p className="text-foreground font-medium">
              Because when your tech works flawlessly, you work flawlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStorySection;
