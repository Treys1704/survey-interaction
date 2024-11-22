interface Props {
  email: string;
  setEmail: (email: string) => void;
}

export default function ThankYou({ email, setEmail }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-black">Thank You Gift 🎉</h1>
        <p className="text-gray-600">
          Confirm your email address to receive your special reward.
        </p>
      </div>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-4 rounded-xl border text-black bg-transparent border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
        placeholder="Enter your email"
      />
    </div>
  );
}