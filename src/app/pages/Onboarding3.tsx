import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Scan } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Onboarding3() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate biometric scan
    const scanTimer = setTimeout(() => {
      setIsScanning(false);
      setIsComplete(true);
    }, 2500);

    // Navigate to browse after showing success
    const navTimer = setTimeout(() => {
      navigate('/browse');
    }, 4500);

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full flex flex-col items-center text-center space-y-12"
      >
        {/* Biometric Scanner Visual */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {isScanning && (
            <>
              {/* Scanning rings */}
              <motion.div
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border-2 border-indigo-300"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.3,
                }}
                className="absolute inset-0 rounded-full border-2 border-purple-300"
              />
            </>
          )}

          {/* Icon container */}
          <motion.div
            animate={
              isComplete
                ? { scale: 1.1 }
                : { scale: [1, 1.05, 1] }
            }
            transition={
              isComplete
                ? { duration: 0.3 }
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center ${
              isComplete
                ? 'bg-gradient-to-br from-green-100 to-emerald-100'
                : 'bg-gradient-to-br from-indigo-100 to-purple-100'
            }`}
          >
            <Scan
              className={`w-12 h-12 ${
                isComplete ? 'text-green-600' : 'text-indigo-600'
              }`}
            />
          </motion.div>

          {/* Success glow */}
          {isComplete && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 rounded-full bg-green-200 blur-2xl"
            />
          )}
        </div>

        {/* Content */}
        <motion.div
          key={isComplete ? 'complete' : 'scanning'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {isScanning ? (
            <>
              <h2 className="text-2xl tracking-tight text-gray-900">
                Authenticating
              </h2>
              <p className="text-base text-gray-500">
                Securing your vault
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl tracking-tight text-gray-900">
                Vault secured
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                Synthetic persona operates by default
                <br />
                <span className="text-sm text-gray-400 mt-2 block">
                  Your authentic identity remains protected
                </span>
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
