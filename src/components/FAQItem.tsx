'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow"
      onClick={() => setOpen(!open)}
    >
      <h4 className="font-semibold text-gray-900">{question}</h4>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}
