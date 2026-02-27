import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the efficiency of an Commercial EV compare to an ICE vehicle?",
    answer: "Commercial EVs are significantly more energy-efficient than ICE vehicles. They convert over 85% of electrical energy to motion compared to around 30% for combustion engines. This results in substantially lower running costs per kilometre.",
  },
  {
    question: "What is the typical battery life of a commercial EV battery?",
    answer: "Modern commercial EV batteries typically last 5-8 years or 150,000-200,000 km, depending on usage patterns and charging habits. Many manufacturers offer battery warranties covering this period.",
  },
  {
    question: "How long does it take for the vehicle to be delivered after loan approval?",
    answer: "After loan approval, vehicle delivery typically takes 7-15 business days, depending on vehicle availability and your location. We work with OEM partners to ensure timely delivery.",
  },
  {
    question: "How much can I save by switching my fleet from diesel/CNG to EVs?",
    answer: "Fleet operators typically save 40-60% on fuel costs and 30-40% on maintenance costs by switching to EVs. The total cost of ownership over the vehicle's life is significantly lower.",
  },
  {
    question: "What's the difference between financing and leasing for EV fleets?",
    answer: "Financing allows you to own the vehicle after full repayment, while leasing provides use of the vehicle for a fixed period with lower monthly payments. We help you choose the best option for your business needs.",
  },
];

const FAQSection = () => {
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
            <MessageCircle size={16} className="text-primary" />
            Have Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            We're here to help with dedicated support whenever you need it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated !p-0 border border-border rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left font-semibold font-display hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
