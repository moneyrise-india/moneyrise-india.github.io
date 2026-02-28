import { motion } from "framer-motion";
import { Images } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop", alt: "Electric vehicle charging station" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", alt: "Modern electric delivery van" },
  { src: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop", alt: "Electric fleet vehicles" },
  { src: "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?w=600&h=400&fit=crop", alt: "EV battery technology" },
  { src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop", alt: "Electric mobility infrastructure" },
  { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop", alt: "Green transport solutions" },
];

const GallerySection = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                index === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end">
                <p className="text-background text-sm font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
