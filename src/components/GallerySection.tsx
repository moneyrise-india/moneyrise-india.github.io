import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=600&fit=crop", alt: "Electric vehicle charging station" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop", alt: "Modern electric delivery van" },
  { src: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=600&fit=crop", alt: "Electric fleet vehicles" },
  { src: "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=600&h=600&fit=crop", alt: "EV battery technology" },
  { src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=600&fit=crop", alt: "Electric mobility infrastructure" },
  { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=600&fit=crop", alt: "Green transport solutions" },
];

const GallerySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setStartIndex((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  const getVisibleImages = () => {
    return [0, 1, 2].map((offset) => galleryImages[(startIndex + offset) % galleryImages.length]);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Images size={16} className="text-primary" />
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Driving the <span className="gradient-text">EV Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the world of commercial electric mobility powered by EVRise Finance.
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
              {getVisibleImages().map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
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
          {galleryImages.map((_, i) => (
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

export default GallerySection;
