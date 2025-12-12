import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Award, 
  Clock, 
  CheckCircle, 
  Shield, 
  Wrench,
  Heart,
  Target,
  Eye,
  Rocket,
  Lightbulb,
  Handshake,
  Sparkles,
  ThumbsUp,
  Zap,
  HeadphonesIcon,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const missionPoints = [
  "Provide fast, dependable, and transparent tech services customers can rely on.",
  "Upgrade and secure homes and businesses with modern IT and surveillance solutions.",
  "Maintain long-term relationships through exceptional service and ethical practices.",
  "Continuously evolve with new technologies to deliver simple, safe, effective solutions.",
];

const ourValues = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "Honest pricing, honest work, honest communication.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "30-day service warranty; if it's not fixed, you don't pay.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Certified tools, real technical skill, updated knowledge.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Careful, patient handling of every device.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern solutions for everyday tech needs.",
  },
];

const whyChooseUsPoints = [
  { icon: Zap, text: "Clean and fast workmanship" },
  { icon: Eye, text: "Clear diagnosis & repair explanations" },
  { icon: HeadphonesIcon, text: "Walk-in and on-site support" },
  { icon: BadgeCheck, text: "Quality components & trusted brands" },
  { icon: ThumbsUp, text: "Friendly service backed by expertise" },
];

const milestones = [
  { year: "2015", event: "Founded Raxon Digital" },
  { year: "2017", event: "Expanded to CCTV Services" },
  { year: "2019", event: "1000+ Devices Repaired" },
  { year: "2021", event: "Added Biometric Systems" },
  { year: "2023", event: "5000+ Happy Customers" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
                About Us
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6"
            >
              Trusted Tech Solutions Since{" "}
              <span className="text-gradient-gold">2015</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground"
            >
              We fix stubborn computers — no exorcism required.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-steel">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Raxon Digital has provided reliable computer repair and security services 
                  in Ahmedabad for over 8 years. What started as a small repair shop has 
                  grown into a full-service technology solutions provider.
                </p>
                <p>
                  We combine hands-on experience with honest pricing and a 30-day repair 
                  warranty. Our team of certified technicians is dedicated to solving your 
                  tech problems quickly and effectively.
                </p>
                <p>
                  From laptop repairs to complete CCTV installations, we've helped thousands 
                  of homes and businesses secure and optimize their technology infrastructure.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="gold" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/30" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-card border border-border">
                      <span className="text-gold font-semibold">{milestone.year}</span>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Vision & Mission
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-card border-2 border-gold/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  "To become the most trusted and accessible technology service partner for every 
                  home and business — delivering repair, security, and digital solutions with 
                  unmatched quality and honesty."
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-card border-2 border-gold/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-steel">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {ourValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-gradient-card border-2 border-gold/20 hover:border-gold/40 transition-colors text-center card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-gold/10 via-gold/5 to-transparent">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another repair shop — we're your technology partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-card border border-gold/30 shadow-lg">
              <ul className="space-y-5">
                {whyChooseUsPoints.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-lg text-foreground">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-y border-gold/20">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
              Ready to experience the Raxon difference?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get in touch today for a free consultation.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
