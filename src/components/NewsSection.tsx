import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const newsItems = [
  {
    source: "Economic Times",
    title: "EVRise Finance raises funding to expand EV commercial vehicle financing",
    excerpt: "The startup aims to democratize access to EV financing for fleet operators across tier-2 and tier-3 cities.",
    date: "2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    source: "YourStory",
    title: "How EVRise is making commercial EV adoption affordable for India's last-mile delivery",
    excerpt: "With flexible tenure options and up to 90% financing, EVRise is bridging the gap between EV ambition and affordability.",
    date: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    source: "Mint",
    title: "Commercial EV financing startup EVRise targets 10,000 vehicles by 2025",
    excerpt: "The company partners with leading OEMs to provide end-to-end financing and fleet support for electric commercial vehicles.",
    date: "2024",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section id="blogs" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium mb-6 border border-border">
            <Newspaper size={16} className="text-primary" />
            Media Coverage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            EVRise Finance in <span className="gradient-text">News</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Stay updated with the latest coverage and recognition of EVRise Finance in leading publications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated group cursor-pointer !p-0 overflow-hidden block"
            >
              {/* News Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-primary">
                    {item.source}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read Article <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
