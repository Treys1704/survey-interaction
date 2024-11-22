import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import RateExperience from './components/RateExperience';
import ShareFeedback from './components/ShareFeedback';
import ThankYou from './components/ThankYou';
import Button from './components/Button';

function App() {
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('dev@tresormanock.me');

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setStep(step + newDirection);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-[400px] h-[420px] relative overflow-hidden">
        {/* Header - Fixed */}
        <div className="absolute inset-x-0 top-0 z-20 p-6 border-b border-gray-100 flex justify-between items-center bg-white">
          <h2 className="text-gray-500 text-lg font-medium">App Survey</h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="h-full flex flex-col">
          {/* Content Area - Animated */}
          <div className="flex-1 pt-[72px] overflow-hidden">
            <AnimatePresence mode="sync" initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                initial={{ x: direction > 0 ? '20%' : '-20%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 35 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-x-0 p-6"
              >
                {step === 0 && (
                  <RateExperience 
                    rating={rating} 
                    setRating={setRating}
                  />
                )}
                {step === 1 && (
                  <ShareFeedback
                    feedback={feedback}
                    setFeedback={setFeedback}
                  />
                )}
                {step === 2 && (
                  <ThankYou
                    email={email}
                    setEmail={setEmail}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer - Fixed */}
          <div className="p-6 bg-white">
            <div className="relative h-[46px]">
              <AnimatePresence mode="popLayout">
                {step === 0 && (
                  <motion.div
                    layout
                    key="single-button"
                    initial={{ width: "50%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 30,
                      mass: 1
                    }}
                    className="absolute right-0"
                  >
                    <Button
                      onClick={() => paginate(1)}
                      disabled={rating === null}
                      className="w-full"
                    >
                      <span>Next</span>
                      <motion.div
                        whileHover={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </Button>
                  </motion.div>
                )}
                
                {step === 1 && (
                  <motion.div 
                    layout 
                    className="absolute inset-x-0 flex space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      layout
                      initial={{ width: "50%", opacity: 1 }}
                      animate={{ width: "50%", opacity: 1 }}
                      exit={{ width: "0%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="flex-1"
                    >
                      <Button
                        onClick={() => paginate(-1)}
                        variant="secondary"
                        className="w-full"
                      >
                        <motion.div
                          whileHover={{ x: -4 }}
                          className="group-hover:-translate-x-1 transition-transform duration-200"
                        >
                          <ArrowLeft size={18} />
                        </motion.div>
                        <span>Back</span>
                      </Button>
                    </motion.div>
                    <motion.div
                      layout
                      className="flex-1"
                    >
                      <Button
                        onClick={() => paginate(1)}
                        className="w-full"
                      >
                        <span>Next</span>
                        <motion.div
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    layout 
                    className="absolute inset-x-0 flex space-x-4"
                    initial={{ opacity: 1, width: "50%" }}
                    animate={{ opacity: 1, width: "100%" }}
                  >
                    <Button
                      onClick={() => paginate(-1)}
                      variant="secondary"
                      className="flex-1"
                    >
                      <motion.div
                        whileHover={{ x: -4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group-hover:-translate-x-1 transition-transform duration-200"
                      >
                        <ArrowLeft size={18} />
                      </motion.div>
                      <span>Back</span>
                    </Button>
                    <Button className="flex-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key="done"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center space-x-2"
                        >
                          <span>Done</span>
                          <Check size={18} />
                        </motion.div>
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;