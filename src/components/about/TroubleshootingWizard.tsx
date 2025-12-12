import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Monitor, 
  Gauge, 
  MonitorX, 
  Wifi, 
  Camera, 
  HardDrive,
  ArrowRight,
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const issues = [
  {
    id: "laptop",
    label: "Laptop Issues",
    icon: Laptop,
    steps: [
      "Check if the device powers on and listen for any beeps or fan noise.",
      "Try a hard reset by holding the power button for 10 seconds.",
      "If issues persist, the problem may be hardware-related — bring it in for diagnosis."
    ]
  },
  {
    id: "desktop",
    label: "Desktop Issues",
    icon: Monitor,
    steps: [
      "Verify all cables are properly connected (power, display, peripherals).",
      "Check if any lights or fans are running inside the case.",
      "If no response, the power supply or motherboard may need inspection."
    ]
  },
  {
    id: "slow",
    label: "Slow Performance",
    icon: Gauge,
    steps: [
      "Close unnecessary background programs and browser tabs.",
      "Run a disk cleanup and check available storage space.",
      "Consider a RAM or SSD upgrade for lasting improvement."
    ]
  },
  {
    id: "display",
    label: "No Display",
    icon: MonitorX,
    steps: [
      "Check monitor cable connections and try a different port.",
      "Connect an external monitor to test if the issue is screen-related.",
      "If external display works, the internal screen or cable may need repair."
    ]
  },
  {
    id: "internet",
    label: "Internet Problems",
    icon: Wifi,
    steps: [
      "Restart your router and modem (unplug for 30 seconds).",
      "Check if other devices can connect to the network.",
      "Run network troubleshooter or reset network settings."
    ]
  },
  {
    id: "cctv",
    label: "CCTV Trouble",
    icon: Camera,
    steps: [
      "Check power supply to cameras and DVR/NVR unit.",
      "Verify network cables are properly connected.",
      "Reset the DVR/NVR if cameras were working previously."
    ]
  },
  {
    id: "data",
    label: "Data Loss",
    icon: HardDrive,
    steps: [
      "Stop using the affected drive immediately to prevent overwriting.",
      "Do not attempt DIY recovery on clicking/failed drives.",
      "Bring the device for professional data recovery — higher success rate."
    ]
  },
];

const TroubleshootingWizard = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  
  const activeIssue = issues.find(i => i.id === selectedIssue);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            What Problem Are You Facing?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your issue to get quick troubleshooting tips.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {issues.map((issue) => (
            <motion.button
              key={issue.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedIssue(issue.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                selectedIssue === issue.id
                  ? "bg-gold text-background border-gold"
                  : "bg-steel border-border hover:border-gold/50 text-foreground"
              }`}
            >
              <issue.icon className="w-5 h-5" />
              <span className="font-medium">{issue.label}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeIssue && (
            <motion.div
              key={activeIssue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-gold/30 relative">
                <button
                  onClick={() => setSelectedIssue(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <activeIssue.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-foreground">
                    {activeIssue.label}
                  </h3>
                </div>

                <ol className="space-y-4 mb-6">
                  {activeIssue.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold font-bold">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </li>
                  ))}
                </ol>

                <Button variant="gold" asChild className="w-full">
                  <Link to="/contact">
                    Book Repair <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TroubleshootingWizard;
