import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Filter, Search, Camera, Fingerprint, Cpu, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import SEO, { createProductSchema, breadcrumbSchema } from "@/components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const categories = [
  { id: "all", name: "All Products", icon: Monitor },
  { id: "cctv", name: "CCTV", icon: Camera },
  { id: "biometric", name: "Biometric", icon: Fingerprint },
  { id: "storage", name: "RAM/Storage", icon: Cpu },
  { id: "peripherals", name: "Peripherals", icon: Monitor },
];

const products = [
  {
    id: 1,
    name: "HD CCTV Camera - 2MP",
    category: "cctv",
    price: 2499,
    originalPrice: 3499,
    image: null,
    specs: "1080p Full HD, Night Vision",
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "4-Channel DVR System",
    category: "cctv",
    price: 4999,
    originalPrice: 6999,
    image: null,
    specs: "H.265 Compression, Mobile View",
    inStock: true,
  },
  {
    id: 3,
    name: "Biometric Attendance System",
    category: "biometric",
    price: 8999,
    originalPrice: 12999,
    image: null,
    specs: "Fingerprint + Card, 3000 Users",
    inStock: true,
    badge: "Popular",
  },
  {
    id: 4,
    name: "Face Recognition Terminal",
    category: "biometric",
    price: 15999,
    originalPrice: 19999,
    image: null,
    specs: "AI Face Detection, Touchless",
    inStock: false,
  },
  {
    id: 5,
    name: "8GB DDR4 RAM",
    category: "storage",
    price: 1899,
    originalPrice: 2499,
    image: null,
    specs: "3200MHz, Desktop",
    inStock: true,
  },
  {
    id: 6,
    name: "256GB NVMe SSD",
    category: "storage",
    price: 2299,
    originalPrice: 3199,
    image: null,
    specs: "Read 3500MB/s, Write 2500MB/s",
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: 7,
    name: "512GB NVMe SSD",
    category: "storage",
    price: 3999,
    originalPrice: 5499,
    image: null,
    specs: "Read 3500MB/s, Write 3000MB/s",
    inStock: true,
  },
  {
    id: 8,
    name: "Wireless Mouse & Keyboard",
    category: "peripherals",
    price: 1299,
    originalPrice: 1799,
    image: null,
    specs: "2.4GHz Wireless, USB Receiver",
    inStock: true,
  },
  {
    id: 9,
    name: "Gaming Headset",
    category: "peripherals",
    price: 1999,
    originalPrice: 2999,
    image: null,
    specs: "7.1 Surround, RGB LED",
    inStock: true,
  },
  {
    id: 10,
    name: "4MP IP Camera",
    category: "cctv",
    price: 4999,
    originalPrice: 6999,
    image: null,
    specs: "4MP, POE, Two-way Audio",
    inStock: true,
    badge: "New",
  },
  {
    id: 11,
    name: "16GB DDR4 RAM",
    category: "storage",
    price: 3499,
    originalPrice: 4499,
    image: null,
    specs: "3200MHz, Desktop",
    inStock: true,
  },
  {
    id: 12,
    name: "USB Hub - 7 Port",
    category: "peripherals",
    price: 899,
    originalPrice: 1299,
    image: null,
    specs: "USB 3.0, Powered",
    inStock: true,
  },
];

const shopSchema = [
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" }
  ]),
  ...products.slice(0, 6).map(product => createProductSchema({
    name: product.name,
    description: product.specs,
    price: product.price,
    availability: product.inStock
  })),
  {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Rudra Enterprise Shop",
    "description": "Buy CCTV cameras, biometric systems, RAM, SSD, and computer peripherals in Ahmedabad. Quality hardware with installation service available.",
    "url": "https://rudraenterprise.in/shop",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-238, Shreyash Complex, Near Vejalpur Bus Stand",
      "addressLocality": "Vejalpur",
      "addressRegion": "Ahmedabad",
      "postalCode": "380051",
      "addressCountry": "IN"
    },
    "telephone": "+919426322123"
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Layout>
      <SEO
        title="Buy CCTV Cameras, RAM, SSD & Computer Hardware in Ahmedabad | Rudra Enterprise"
        description="Shop quality CCTV cameras, biometric systems, RAM, SSD, and computer peripherals in Ahmedabad. Local pickup available. Professional installation. Manufacturer warranty included."
        canonical="/shop"
        schema={shopSchema}
      />
      
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
                Shop
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6"
            >
              Computer Hardware & CCTV Products in{" "}
              <span className="text-gradient-gold">Ahmedabad</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground"
            >
              Tested, compatible, and ready to install.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="section-padding bg-steel">
        <div className="container mx-auto container-padding">
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-gold text-background"
                      : "bg-card border border-border text-foreground hover:border-gold/50"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative lg:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full lg:w-64 bg-card border-border"
              />
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group rounded-xl bg-gradient-card border border-border hover:border-gold/50 overflow-hidden card-lift"
              >
                {/* Image */}
                <div className="relative aspect-square bg-steel-light flex items-center justify-center">
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-gold text-background text-xs font-semibold">
                      {product.badge}
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-destructive text-destructive-foreground text-xs font-semibold">
                      Out of Stock
                    </span>
                  )}
                  <Monitor className="w-20 h-20 text-gold/30" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.specs}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gold">{formatPrice(product.price)}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="gold"
                      size="sm"
                      className="flex-1"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Buy Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button variant="goldOutline" onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Buy From Us */}
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
              Why Buy From Rudra?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { title: "Tested & Verified", desc: "Every product is tested before sale" },
              { title: "Local Pickup", desc: "Pick up from our store same day" },
              { title: "Installation", desc: "Professional installation available" },
              { title: "Warranty", desc: "Manufacturer warranty included" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl bg-gradient-card border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Need help choosing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us for compatibility advice and installation quotes.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Ask About Compatibility
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
