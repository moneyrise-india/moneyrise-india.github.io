import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Award, Leaf, Globe, Zap } from "lucide-react";

const teamMembers = [
  { name: "Leadership Team", role: "Driving EV adoption through accessible financing solutions across India" },
];

const sdgCommitments = [
  { icon: Leaf, title: "SDG 7 – Affordable & Clean Energy", description: "Promoting clean energy adoption through EV financing" },
  { icon: Globe, title: "SDG 11 – Sustainable Cities", description: "Enabling cleaner urban mobility with electric commercial vehicles" },
  { icon: Zap, title: "SDG 13 – Climate Action", description: "Reducing carbon emissions by financing the shift from ICE to EV fleets" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Users size={16} className="text-primary" />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Powering India's <span className="gradient-text">EV Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              EVRise Finance is on a mission to accelerate India's transition to clean mobility by making commercial electric vehicle financing fast, flexible, and accessible for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold font-display mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Empowering fleet operators, individual drivers and mobility businesses with fast and flexible financing for commercial electric vehicles. We aim to remove financial barriers and make EV adoption seamless across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-bold font-display mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted financing partner for commercial electric mobility — driving sustainable transportation, reducing emissions, and creating economic opportunities for millions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {teamMembers[0].role}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Experienced Leadership</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team brings together deep expertise in financial services, electric mobility, and technology to create the best financing experience for commercial EV operators across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SDG Commitment */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our <span className="gradient-text">SDG Commitment</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We align our business goals with the United Nations Sustainable Development Goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {sdgCommitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
