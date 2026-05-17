import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Laptop Repair", path: "/services#laptop" },
    { name: "Desktop Repair", path: "/services#desktop" },
    { name: "Data Recovery", path: "/services#data-recovery" },
    { name: "CCTV Installation", path: "/services#cctv" },
    { name: "Networking", path: "/services#networking" },
  ];

  const legalLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Warranty & Terms", path: "/warranty" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-gradient-midnight border-t border-border">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-montserrat font-bold text-background text-lg">
                RE
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-lg text-foreground leading-tight">
                  Rudra
                </span>
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  Enterprise
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Rudra Enterprise — Fast, local tech services you can trust. Repair. Secure. Restore.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919426322123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors gold-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors gold-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=A-238,+Shreyash+Complex,+Near+Vejalpur+Bus+Stand,+Vejalpur,+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span>A-238, Shreyash Complex, Near Vejalpur Bus Stand, Vejalpur, Ahmedabad</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919426322123"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>+91 94263 22123</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rudraenterprise.in"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>info@rudraenterprise.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Rudra Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Warranty Badge */}
      <div className="bg-steel py-4">
        <div className="container mx-auto container-padding text-center">
          <p className="text-foreground/80 text-sm">
            <span className="text-gold font-semibold">30-Day Warranty:</span> All repairs carry a 30-day warranty on parts and labour. If it's not fixed, you don't pay.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
