'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    text: 'ADmyBRAND helped us scale our campaigns with smart insights!',
    photo: '/testimonials/alice.png',
  },
  {
    name: 'Mark Chen',
    text: 'Truly revolutionary – we saw a 40% boost in ROI.',
    photo: '/testimonials/mark.png',
  },
  {
    name: 'Sofia Rivera',
    text: 'Simple, elegant, and powerful AI marketing tool.',
    photo: '/testimonials/sophia.png',
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <div className="text-center space-y-4 max-w-xl mx-auto">
      <img
        src={t.photo}
        alt={t.name}
        className="w-20 h-20 rounded-full mx-auto border-2 border-blue-500"
      />
      <p className="text-gray-700 italic">"{t.text}"</p>
      <p className="font-semibold text-gray-900">{t.name}</p>
      <div className="flex justify-center gap-4">
        <button onClick={prev}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
    </div>
  );
}
