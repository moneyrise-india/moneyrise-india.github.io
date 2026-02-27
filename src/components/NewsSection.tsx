import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const NewsSection = () => {
  return (
    <section id="blogs" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium mb-6 border border-border">
            <Newspaper size={16} className="text-primary" />
            Media Coverage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            EVRise Finance in <span className="gradient-text">News</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stay updated with the latest coverage and recognition of EVRise Finance in leading publications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
