import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Shield, 
  Wifi, 
  Camera, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  Fingerprint,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO, { localBusinessSchema, createServiceSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-technician.jpg";
import TechStorySection from "@/components/about/TechStorySection";
import TroubleshootingWizard from "@/components/about/TroubleshootingWizard";


import BusinessSection from "@/components/about/BusinessSection";




import LocalTrustSection from "@/components/about/LocalTrustSection";
import StatsSection from "@/components/home/StatsSection";

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

const services = [
  {
    icon: Laptop,
    title: "Laptop & Desktop Repair",
    description: "Screen, keyboard, motherboard, warranty support.",
    link: "/services#laptop",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "Recover lost files & backup solutions.",
    link: "/services#data-recovery",
  },
  {
    icon: Camera,
    title: "CCTV & Security",
    description: "Installations, monitoring setups, upgrades.",
    link: "/services#cctv",
  },
  {
    icon: Wifi,
    title: "Networking & Servers",
    description: "Routers, Wi-Fi, server setup.",
    link: "/services#networking",
  },
  {
    icon: Shield,
    title: "Antivirus & Cleanup",
    description: "Malware removal & system tune-ups.",
    link: "/services#antivirus",
  },
];


const trustBadges = [
  { icon: Award, text: "30-day Repair Warranty" },
  { icon: CheckCircle, text: "Certified Technicians" },
  { icon: Clock, text: "On-site & Walk-in" },
];

const testimonials = [
  {
    quote: "Rudra Enterprise fixed my laptop screen in just 2 hours. Excellent service and fair pricing!",
    author: "Priya S.",
    role: "Business Owner",
  },
  {
    quote: "Professional CCTV installation for my shop. The team was punctual and thorough.",
    author: "Rajesh M.",
    role: "Shop Owner",
  },
  {
    quote: "Recovered all my important data after a hard drive crash. Highly recommended!",
    author: "Amit P.",
    role: "Freelancer",
  },
];

const featuredServices = [
  {
    title: "Computer Repair",
    description: "Complete hardware and software repair services for all major brands.",
    features: ["Same-day diagnosis", "Genuine parts", "30-day warranty", "On-site available"],
    icon: Monitor,
    link: "/services#laptop",
  },
  {
    title: "Security Solutions",
    description: "Protect your home and business with professional security systems.",
    features: ["CCTV installation", "Biometric access", "Remote monitoring", "24/7 support"],
    icon: Camera,
    link: "/services#cctv",
  },
];

const homeSchema = [
  localBusinessSchema,
  createServiceSchema({
    name: "Computer Repair Services in Ahmedabad",
    description: "Professional laptop repair, desktop repair, data recovery, virus removal, and hardware upgrades in Ahmedabad. Same-day service with 30-day warranty.",
    url: "https://rudraenterprise.in/services"
  }),
  createServiceSchema({
    name: "CCTV Installation in Ahmedabad",
    description: "Expert CCTV camera installation, DVR setup, and security system solutions for homes and businesses in Ahmedabad, Vejalpur, and nearby areas.",
    url: "https://rudraenterprise.in/services#cctv"
  }),
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rudra Enterprise",
    "url": "https://rudraenterprise.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rudraenterprise.in/shop?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Computer Repair & CCTV Installation in Ahmedabad | Rudra Enterprise"
        description="Trusted computer repair, laptop repair, CCTV installation & data recovery in Ahmedabad. 5000+ devices repaired, 30-day warranty. Visit us in Vejalpur or call +91 94263 22123."
        canonical="/"
        schema={homeSchema}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
                  Trusted Tech Services in Ahmedabad
                </span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6"
              >
                Complete Computer, CCTV & IT Security Solutions in{" "}
                <span className="text-gradient-gold">Ahmedabad</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Fast, honest computer & security solutions for homes and businesses of all sizes.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Book Repair
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <badge.icon className="w-5 h-5 text-gold" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                  src={heroImage}
                  alt="Professional technician repairing a laptop at Rudra Enterprise"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Certified Experts</p>
                    <p className="text-sm text-muted-foreground">Trusted since 2015</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="py-16 bg-steel border-y border-border">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Link
                  to={service.link}
                  className="group flex flex-col h-full p-6 bg-gradient-card rounded-xl border border-border hover:border-gold/50 card-lift"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Services */}
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
              Professional Repair & Security Services in Ahmedabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert laptop repair, CCTV installation, and IT solutions for homes and businesses across Ahmedabad.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-gold/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="goldOutline" size="sm" asChild>
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              Trusted by Ahmedabad Businesses & Homes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join 5,000+ satisfied customers who trust Rudra Enterprise for computer repair and security solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-gradient-card border border-border"
              >
                <div className="text-4xl text-gold mb-4">"</div>
                <p className="text-foreground mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Sections */}
      <TechStorySection />
      <TroubleshootingWizard />
      
      <BusinessSection />
      <TransparencySection />
      <OptimizationSection />
      <LocalTrustSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-y border-gold/20">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
              Need urgent repair?
            </h2>
            <p className="text-muted-foreground mb-6">
              Call us now for immediate assistance.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+919426322123" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91 94263 22123
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
