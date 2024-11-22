import { motion } from 'framer-motion';
import { Angry, Frown, Laugh, Meh, Smile } from 'lucide-react';

interface Props {
  rating: number | null;
  setRating: (rating: number) => void;
}

const emojis = [
  { icon: Angry, label: 'Not Satisfied' },
  { icon: Frown, label: '' },
  { icon: Meh, label: '' },
  { icon: Smile, label: '' },
  { icon: Laugh, label: 'Very Satisfied' },
];

export default function RateExperience({ rating, setRating }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-black">Rate Experience</h1>
        <p className="text-gray-600">
          How do you feel about using our app, please rate your experience.
        </p>
      </div>

      <div className="flex justify-between items-center py-4">
        {emojis.map((emoji, index) => (
          <motion.button
            key={index}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRating(index)}
            className={`p-3 rounded-xl transition-colors ${
              rating === index ? 'bg-black text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            <emoji.icon size={24} />
          </motion.button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Not Satisfied</span>
        <span className="text-sm text-gray-500">Very Satisfied</span>
      </div>
    </div>
  );
}