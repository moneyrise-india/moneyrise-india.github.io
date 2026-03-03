import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=600&h=600&fit=crop",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=600&fit=crop",
    link: "#",
  },
];

const NewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setStartIndex((prev) => (prev + dir + newsItems.length) % newsItems.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  const getVisibleItems = () => {
    return [0, 1, 2].map((offset) => newsItems[(startIndex + offset) % newsItems.length]);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

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

        {/* 3-image slider */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={startIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-4 lg:gap-6"
            >
              {getVisibleItems().map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-2xl overflow-hidden bg-muted block hover:opacity-90 transition-opacity"
                >
                  <img
                    src={item.image}
                    alt="EVRise Finance news"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {newsItems.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > startIndex ? 1 : -1); setStartIndex(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === startIndex ? "bg-primary w-7" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
