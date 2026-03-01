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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
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

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden aspect-square max-w-xl mx-auto bg-muted">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={current}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6 md:p-8">
            <p className="text-background font-semibold font-display text-lg md:text-xl">
              {galleryImages[current].alt}
            </p>
          </div>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-7" : "bg-background/60"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
