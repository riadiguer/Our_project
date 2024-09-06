'use client'
import { useState } from 'react';

const faqs = [
  {
    question: 'Quels sont les horaires des cours ?',
    answer: 'Nos cours sont disponibles tous les jours de 8h à 18h. Nous offrons des horaires flexibles pour s\'adapter à votre emploi du temps.',
  },
  {
    question: 'Quelle est la durée pour obtenir le permis de conduire ?',
    answer: 'La durée pour obtenir votre permis de conduire est de 45 jours, sous réserve de réussite aux examens.',
  },
  {
    question: 'Quels sont les examens requis ?',
    answer: 'Il y a trois examens requis : le code, la manœuvre (crénaux), et la conduite sur route.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Questions Fréquemment Posées</h2>
        <div className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full px-4 py-3 text-left font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none transition-colors duration-300"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    {/* Arrow icon */}
                    ▼
                  </span>
                </div>
              </button>
              <div
                className={`px-4 py-3 bg-white border-l-2 border-blue-500 rounded-lg shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
