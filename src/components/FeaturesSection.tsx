import { motion } from "framer-motion";
import { Banknote, Clock, Percent, TrendingUp, Wrench } from "lucide-react";

const features = [
  {
    icon: Banknote,
    title: "Financing for Commercial EVs",
    description: "Get structured term loans & lease designed specifically for electric 2W, 3W, and 4W commercial vehicles—built for cargo, delivery, and passenger mobility.",
  },
  {
    icon: Clock,
    title: "Flexible Tenure Options",
    description: "Choose repayment plans that match your business cashflows, with loan tenures ranging from short-term to up to 60 months for maximum affordability",
  },
  {
    icon: Percent,
    title: "Attractive Rate of Interest",
    description: "Lower the cost of ownership with competitive interest rates, helping you scale your EV fleet without heavy financial burden",
  },
  {
    icon: TrendingUp,
    title: "Highest Financing of Vehicle Cost",
    description: "Reduce upfront investment with up to 90% financing on vehicle cost, including container financing for cargo EV applications",
  },
  {
    icon: Wrench,
    title: "Dedicated Vehicles Support",
    description: "Dedicated fleet support for service, repair, maintenance and insurance claims",
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Switch to Electric with <span className="gradient-text">EVRise Finance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Drive cleaner, grow faster, and scale smarter with flexible financing for Commercial EVs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
