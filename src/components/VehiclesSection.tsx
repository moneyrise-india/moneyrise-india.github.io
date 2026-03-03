import { motion } from "framer-motion";
import twoWheeler from "@/assets/vehicles/2-wheeler.jpg";
import threeWheelerCargo from "@/assets/vehicles/3-wheeler-cargo.jpg";
import threeWheelerPassenger from "@/assets/vehicles/3-wheeler-passenger.jpg";
import fourWheelerPassenger from "@/assets/vehicles/4-wheeler-passenger.jpg";
import fourWheelerBus from "@/assets/vehicles/4-wheeler-bus.jpg";
import fourWheelerCargo from "@/assets/vehicles/4-wheeler-cargo.jpg";

const vehicles = [
  { image: twoWheeler, label: "2–Wheeler" },
  { image: threeWheelerCargo, label: "3–Wheeler (Cargo)" },
  { image: threeWheelerPassenger, label: "3–Wheeler (Passenger)" },
  { image: fourWheelerPassenger, label: "4–Wheeler (Passenger)" },
  { image: fourWheelerBus, label: "4–Wheeler (Passenger)" },
  { image: fourWheelerCargo, label: "4–Wheeler (Cargo)" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VehiclesSection = () => {
  return (
    <section id="vehicles" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Drive Smarter with <span className="gradient-text">Commercial EVs</span>
          </h2>
          <p className="text-primary font-semibold text-lg mb-3">Powered by EVRise Finance</p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Expand your fleet with reliable, high-performance electric vehicles tailored for logistics, delivery, and passenger mobility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
            Explore Commercial EV Options
          </h3>
          <p className="text-muted-foreground">
            Pick the vehicle type that matches your goals — 2W, 3W, or 4W commercial EVs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-elevated flex flex-col items-center gap-4 text-center cursor-pointer group !p-4"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-secondary/50">
                <img
                  src={vehicle.image}
                  alt={vehicle.label}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-foreground">{vehicle.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VehiclesSection;
