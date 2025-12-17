import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LocalTrustSection = () => {
  return (
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
            Proudly Serving <span className="text-gradient-gold">Ahmedabad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located near Vejalpur Bus Stand, we support thousands of customers across 
            Ahmedabad with fast repairs and reliable on-site service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-gold/20 h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3!2d72.52!3d22.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzI0LjAiTiA3MsKwMzEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raxon Digital Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-card border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-bold text-foreground mb-1">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground">
                    A-238, Shreyash Complex,<br />
                    Near Vejalpur Bus Stand, Vejalpur,<br />
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-bold text-foreground mb-1">
                    Call Us
                  </h3>
                  <a 
                    href="tel:+919426322123" 
                    className="text-gold hover:underline font-medium"
                  >
                    +91 94263 22123
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-bold text-foreground mb-1">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday – Saturday<br />
                    10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrustSection;
