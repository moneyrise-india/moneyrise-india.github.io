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
];

const NewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + newsItems.length) % newsItems.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
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

        {/* Square Image Slider */}
        <div className="relative rounded-3xl overflow-hidden aspect-square max-w-xl mx-auto bg-muted">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.a
              key={current}
              href={newsItems[current].link}
              target="_blank"
              rel="noopener noreferrer"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 block cursor-pointer"
            >
              <img
                src={newsItems[current].image}
                alt="EVRise Finance news"
                className="w-full h-full object-cover"
              />
            </motion.a>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {newsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-7" : "bg-background/60"
                }`}
                aria-label={`Go to news ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
