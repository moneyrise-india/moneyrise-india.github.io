import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Shield, value: "90%", label: "Financing Available" },
  { icon: Clock, value: "48h", label: "Quick Approval" },
  { icon: TrendingUp, value: "60%", label: "Cost Savings" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Electric commercial vehicle on a modern road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-sm font-medium mb-8 border border-border/50"
            >
              <Zap size={16} className="text-primary" />
              Driving Sustainable Future
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] mb-8"
            >
              Financing India's
              <br />
              Commercial{" "}
              <span className="gradient-text">Electric Mobility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Empowering fleet operators, individual drivers and mobility businesses with fast and flexible financing for commercial electric vehicles
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="#apply" className="btn-primary-gradient text-base gap-2 group">
                Go Green
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold border border-border bg-card/80 backdrop-blur-sm text-foreground hover:bg-accent transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-6 md:gap-10"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xl font-bold font-display text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right — floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 shadow-lg">
              <h3 className="text-lg font-bold font-display mb-2 text-foreground">Quick Finance Estimate</h3>
              <p className="text-sm text-muted-foreground mb-6">Get your commercial EV financed in as little as 48 hours</p>
              <div className="space-y-4">
                <div className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">Vehicle Types</p>
                  <p className="font-semibold text-sm text-foreground">2W · 3W · 4W Commercial EVs</p>
                </div>
                <div className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">Financing Up To</p>
                  <p className="font-semibold text-sm text-foreground">90% of Vehicle Cost</p>
                </div>
                <div className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">Tenure</p>
                  <p className="font-semibold text-sm text-foreground">Up to 60 Months</p>
                </div>
              </div>
              <a href="#apply" className="btn-primary-gradient w-full text-sm mt-6 !py-3 gap-2 group">
                Apply Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
