interface Props {
  feedback: string;
  setFeedback: (feedback: string) => void;
}

export default function ShareFeedback({ feedback, setFeedback }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-black">Share Feedback</h1>
        <p className="text-gray-600">
          Please share your thoughts to help us improve your experience.
        </p>
      </div>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full h-32 p-4 bg-transparent text-black rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
        placeholder="Type your feedback here..."
      />
    </div>
  );
}