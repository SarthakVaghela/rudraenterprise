import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Shield, 
  Wifi, 
  Camera,
  Fingerprint,
  Cpu,
  ArrowRight,
  CheckCircle
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

const services = [
  {
    id: "laptop",
    icon: Laptop,
    title: "Laptop Repair",
    shortDesc: "Fast, reliable hardware and software repairs for all major brands.",
    description: "From cracked screens to failing motherboards, we fix all laptop issues with genuine parts and expert care.",
    features: [
      "Screen replacement",
      "Battery replacement",
      "Keyboard repair",
      "Motherboard repair",
      "SSD/RAM upgrades",
      "Software troubleshooting",
    ],
    price: "Starting from ₹500",
    turnaround: "24-48 hours",
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop Repair",
    shortDesc: "Complete desktop solutions from diagnosis to upgrade.",
    description: "Whether it's a home PC or office workstation, we diagnose and repair all desktop computers.",
    features: [
      "Hardware diagnosis",
      "Component replacement",
      "OS installation",
      "Performance tuning",
      "Custom builds",
      "Cooling solutions",
    ],
    price: "Starting from ₹400",
    turnaround: "Same day available",
  },
  {
    id: "data-recovery",
    icon: HardDrive,
    title: "Data Recovery & Backup",
    shortDesc: "Recover lost files and set up reliable backup solutions.",
    description: "Lost important files? We recover data from damaged drives and help you set up backup systems to prevent future loss.",
    features: [
      "Hard drive recovery",
      "SSD data recovery",
      "Cloud backup setup",
      "Local backup solutions",
      "RAID recovery",
      "Encrypted drive access",
    ],
    price: "Starting from ₹1,000",
    turnaround: "24-72 hours",
  },
  {
    id: "antivirus",
    icon: Shield,
    title: "Virus & Malware Removal",
    shortDesc: "Complete cleanup, real-time protection setup, and performance tuning.",
    description: "Remove viruses, malware, and optimize your system for peak performance with ongoing protection.",
    features: [
      "Virus removal",
      "Malware cleanup",
      "Ransomware recovery",
      "Antivirus installation",
      "System optimization",
      "Security audit",
    ],
    price: "Starting from ₹600",
    turnaround: "2-4 hours",
  },
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV & Security",
    shortDesc: "Secure your business with professional CCTV installation and setup.",
    description: "Complete security solutions from camera installation to remote monitoring setup for homes and businesses.",
    features: [
      "Camera installation",
      "DVR/NVR setup",
      "Remote viewing",
      "Night vision cameras",
      "Motion detection",
      "Maintenance contracts",
    ],
    price: "Custom quote",
    turnaround: "1-3 days",
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Networking & Servers",
    shortDesc: "Setup and troubleshoot routers, switches and local servers.",
    description: "Reliable network infrastructure for homes and businesses — from Wi-Fi optimization to server setup.",
    features: [
      "Wi-Fi optimization",
      "Router configuration",
      "Network security",
      "Server setup",
      "Cable management",
      "VPN configuration",
    ],
    price: "Starting from ₹800",
    turnaround: "Same day",
  },
  {
    id: "biometric",
    icon: Fingerprint,
    title: "Biometric & Attendance",
    shortDesc: "Modern attendance systems for offices and businesses.",
    description: "Install and configure biometric attendance systems for accurate employee tracking and access control.",
    features: [
      "Fingerprint systems",
      "Face recognition",
      "Access control",
      "Attendance software",
      "Integration support",
      "Maintenance",
    ],
    price: "Custom quote",
    turnaround: "1-2 days",
  },
  {
    id: "hardware",
    icon: Cpu,
    title: "Hardware Sales & Upgrades",
    shortDesc: "RAM, SSDs, motherboards and more — tested and compatible.",
    description: "Quality computer components with compatibility guarantee and professional installation.",
    features: [
      "RAM upgrades",
      "SSD installation",
      "Graphics cards",
      "Power supplies",
      "Cooling systems",
      "Peripherals",
    ],
    price: "Varies by product",
    turnaround: "Same day installation",
  },
];

const Services = () => {
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
                Our Services
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6"
            >
              Complete Tech Solutions for{" "}
              <span className="text-gradient-gold">Home & Business</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground"
            >
              From quick repairs to complete security installations — we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-steel">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeInUp}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-gold/50 card-lift scroll-mt-32"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.shortDesc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gold font-medium">{service.price}</span>
                  <span className="text-muted-foreground">{service.turnaround}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
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
              Service Details
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on any service above to scroll to detailed information.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <service.icon className="w-6 h-6 text-gold" />
                    <span className="text-gold font-medium">{service.title}</span>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                    {service.description}
                  </h3>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting Price</p>
                      <p className="text-lg font-semibold text-gold">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Turnaround</p>
                      <p className="text-lg font-semibold text-foreground">{service.turnaround}</p>
                    </div>
                  </div>
                  <Button variant="gold" asChild>
                    <Link to="/contact">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="aspect-video rounded-2xl bg-gradient-card border border-border flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-gold/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and efficient.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { step: "01", title: "Diagnose", desc: "Free initial diagnosis to identify the issue" },
              { step: "02", title: "Repair", desc: "Expert repair with genuine parts" },
              { step: "03", title: "Test & Return", desc: "Thorough testing and warranty coverage" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center p-8 rounded-2xl bg-gradient-card border border-border"
              >
                <div className="text-6xl font-montserrat font-bold text-gold/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
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
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a repair or get a free consultation today.
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

export default Services;
