import { motion } from "framer-motion";
import { FileText, ListChecks, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Share Your Business Details",
    description: "Tell us about your current fleet deployment and area of operations. We'll help you choose the best way to expand your fleet",
  },
  {
    icon: ListChecks,
    number: "02",
    title: "Share Your Fleet Requirements",
    description: "Tell us the EV category you need — 2W, 3W, or 4W. We'll help you choose the best financing plan.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Submit Business Documents & Get Quick Approval",
    description: "Upload your business and promoter KYC through our simple digital process Receive loan approval within 48 hours, subject to eligibility.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Vehicle Delivery & Onboarding",
    description: "Once your loan is approved, your vehicles will be delivered through our OEM partners or authorised dealerships near you.",
  },
];

const StepsSection = () => {
  return (
    <section id="apply" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Get Your Commercial EV Financing in{" "}
            <span className="gradient-text">4 Easy Steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-elevated relative !p-8 text-center"
              >
                <span className="absolute top-4 right-4 text-5xl font-bold font-display text-primary/10">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
