import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What coconut products do you export?",
      answer: "We export premium coconut-based products including: Virgin Coconut Oil, Coconut Milk (12%, 17%, and 22% fat content), Desiccated Coconut Powder (70-75% fat), Organic & Conventional Coconut Sugar, and Tender Coconut Water. All products meet international food safety and export standards."
    },
    {
      question: "Which countries do you currently export to?",
      answer: "We have established supply chains to 15+ countries including the Middle East (UAE, Saudi Arabia, Qatar), Europe (France, Germany, UK), Africa, and Asia (Singapore, Japan, Thailand). We can arrange shipments to other countries upon request."
    },
    {
      question: "What certifications and quality standards do you maintain?",
      answer: "Our facility maintains FSSAI (Food Safety and Standards Authority of India) certification, ISO 9001:2015 quality management, FSSC 22000 food safety certification, and ORGANIC certifications for select products. All products undergo rigorous farm-to-port quality control."
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "MOQ varies by product type: Virgin Coconut Oil - 1000 liters, Coconut Milk - 500 liters, Desiccated Coconut Powder - 1000 kg. For specific inquiries or bulk orders, please contact our sales team directly."
    },
    {
      question: "How do you ensure product freshness and quality during shipping?",
      answer: "We use modern cold-chain logistics, temperature-controlled containers, and food-grade packaging materials. Products are carefully monitored from farm to port to ensure maximum freshness, safety, and compliance with international standards."
    },
    {
      question: "Do you offer customized packaging and labeling?",
      answer: "Yes, we offer flexible packaging options including bulk containers, retail packaging, and customized labels based on your requirements. Minimum order quantities apply for customization."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms including 30% advance + 70% against L/C, 50/50 arrangements, and T/T (Telegraphic Transfer) payment options for established partners. Terms are negotiable based on order volume and history."
    },
    {
      question: "How long does shipment typically take?",
      answer: "Shipping time varies: Middle East - 5-7 days, Europe - 3-4 weeks, Asia - 2-3 weeks via sea freight. Express air freight options are available for urgent requirements at additional cost."
    }
  ];

  return (
    <section className="py-20 bg-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-forest hover:bg-secondary/30 text-base px-6 py-2">
            ❓ Common Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our coconut products, export processes, and business practices.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-forest text-left">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-6 w-6 text-secondary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-cream/10 border-t">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Schema.org FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-forest/10 to-secondary/10 rounded-2xl border border-forest/20">
          <p className="text-lg text-forest font-semibold mb-4">
            Didn't find what you're looking for?
          </p>
          <p className="text-muted-foreground mb-6">
            Our team is ready to help with any specific inquiries or custom requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-secondary text-forest font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-200"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
