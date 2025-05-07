
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This BMI calculator finally explained why my regular BMI was misleading due to my athletic build. The body type adjustment makes a huge difference!",
      name: "Michael K.",
      title: "Fitness Trainer",
      avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
      quote: "As a healthcare provider, I appreciate how this tool accounts for age differences. I recommend it to patients of all ages for a more accurate assessment.",
      name: "Dr. Sarah J.",
      title: "Physician",
      avatar: "https://i.pravatar.cc/100?img=20"
    },
    {
      quote: "The detailed explanation of my results helped me understand my health better than any other BMI calculator I've used. Very informative!",
      name: "Robert T.",
      title: "Software Developer",
      avatar: "https://i.pravatar.cc/100?img=33"
    }
  ];

  return (
    <div className="bg-bmi-light py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Are <span className="text-bmi-primary">Saying</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our advanced BMI calculator has helped people understand their health better
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full overflow-hidden border-2 border-bmi-primary">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="Trust Badge" className="h-12" />
            <img src="/placeholder.svg" alt="Trust Badge" className="h-12" />
            <img src="/placeholder.svg" alt="Trust Badge" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
