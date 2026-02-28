import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "EV Leasing vs. Buying",
    excerpt: "Understand the key differences between leasing and buying an electric vehicle for your commercial fleet. Learn which option saves more in the long run.",
    date: "2024",
    category: "Finance",
  },
  {
    title: "EV Leasing for Employees",
    excerpt: "How companies can offer EV leasing as an employee benefit, driving sustainability and retention while reducing costs.",
    date: "2024",
    category: "Corporate",
  },
  {
    title: "Why EV Fleet Leasing?",
    excerpt: "Explore why fleet operators across India are choosing EV leasing over traditional vehicle ownership to scale their operations.",
    date: "2024",
    category: "Fleet Management",
  },
  {
    title: "Shared Mobility Models",
    excerpt: "How shared mobility models are reshaping urban transport and why EV financing is central to this transformation.",
    date: "2024",
    category: "Industry",
  },
  {
    title: "The Role of EV Leasing",
    excerpt: "A deep dive into how EV leasing is accelerating India's transition to sustainable commercial transportation.",
    date: "2024",
    category: "Insights",
  },
];

const Blogs = () => {
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
              <BookOpen size={16} className="text-primary" />
              Blogs & Insights
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              EV Financing <span className="gradient-text">Knowledge Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on EV financing, fleet management, and the future of clean mobility in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
