interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ title, price, features, popular }: PricingCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-xl border transition bg-white/30 backdrop-blur-md ${
        popular ? 'border-blue-500' : 'border-gray-200'
      }`}
    >
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-3xl font-extrabold text-blue-600 my-4">{price}</p>
      <ul className="space-y-2 text-gray-700 text-sm">
        {features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Choose Plan
      </button>
    </div>
  );
}
