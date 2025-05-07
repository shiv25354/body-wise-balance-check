
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is BMI and how is it calculated?",
      answer: "Body Mass Index (BMI) is a numerical value calculated from your weight and height. It's a screening tool used to categorize individuals as underweight, normal weight, overweight, or obese. The standard formula is weight (kg) divided by height squared (m²). For imperial measurements, the formula is 703 × weight (lbs) divided by height squared (in²)."
    },
    {
      question: "Is BMI accurate for athletes and muscular individuals?",
      answer: "BMI has limitations for muscular individuals, including athletes. Since muscle weighs more than fat, athletic or muscular people may have a higher BMI that categorizes them as overweight despite having low body fat. Our calculator takes body type into consideration when interpreting results, providing more context for athletic builds."
    },
    {
      question: "How does BMI differ for children, teenagers, and adults?",
      answer: "For adults 20 years and older, BMI is interpreted using standard weight status categories. For children and teens (2-19 years), BMI is age and gender-specific, calculated the same way as adults but interpreted using percentiles on growth charts. Our calculator adjusts interpretation based on your age group."
    },
    {
      question: "Are there different BMI considerations for men and women?",
      answer: "While the BMI formula is the same regardless of gender, interpretation can differ. Women naturally have higher essential body fat percentages than men. Our calculator takes gender differences into account when providing recommendations and interpreting your results."
    },
    {
      question: "What are the limitations of BMI as a health indicator?",
      answer: "BMI doesn't directly measure body fat or account for differences in bone density, muscle mass, or fat distribution. It may overestimate body fat in athletes or underestimate it in older adults who have lost muscle mass. BMI should be one of several tools used to assess health, along with waist circumference, body fat percentage, diet, physical activity level, and other health screenings."
    }
  ];

  // Create a Schema markup for FAQ (JSON-LD)
  const schemaMarkup = {
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
  };

  return (
    <div className="bg-white py-16 md:py-24" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-bmi-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about BMI calculation and interpretation
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Add JSON-LD Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </div>
    </div>
  );
};

export default FAQSection;
