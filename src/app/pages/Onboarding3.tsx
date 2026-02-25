import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Fingerprint, CheckCircle2 } from 'lucide-react';
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
    }, 2300);

    // Navigate to browse after showing success
    const navTimer = setTimeout(() => {
      navigate('/browse');
    }, 4200);

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
        className="max-w-md w-full flex flex-col items-center text-center space-y-14"
      >
        {/* Biometric Scanner Visual - More refined */}
        <div className="relative w-56 h-56 flex items-center justify-center">
          {isScanning && (
            <>
              {/* Scanning rings */}
              <motion.div
                animate={{
                  scale: [1, 1.6],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border-[2px] border-indigo-300"
              />
              <motion.div
                animate={{
                  scale: [1, 1.6],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                className="absolute inset-0 rounded-full border-[2px] border-purple-300"
              />
            </>
          )}

          {/* Icon container */}
          <motion.div
            animate={
              isComplete
                ? { scale: 1.05 }
                : { scale: [1, 1.03, 1] }
            }
            transition={
              isComplete
                ? { duration: 0.4 }
                : {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 ${
              isComplete
                ? 'bg-gradient-to-br from-emerald-100/90 via-green-50/80 to-teal-50/70 shadow-emerald-200/60'
                : 'bg-gradient-to-br from-indigo-100/90 via-purple-50/80 to-pink-50/70 shadow-indigo-200/50'
            }`}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isComplete ? [1, 0.9, 1] : 1 }}
              transition={{ duration: 0.5 }}
            >
              {isComplete ? (
                <CheckCircle2 className="w-16 h-16 text-emerald-600" />
              ) : (
                <Fingerprint className="w-16 h-16 text-indigo-600" />
              )}
            </motion.div>
          </motion.div>

          {/* Success glow */}
          {isComplete && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 rounded-full bg-emerald-300/50 blur-3xl"
            />
          )}

          {/* Scanning ambient glow */}
          {isScanning && (
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-200/50 to-purple-200/40 blur-2xl"
            />
          )}
        </div>

        {/* Content */}
        <motion.div
          key={isComplete ? 'complete' : 'scanning'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          {isScanning ? (
            <>
              <h2 className="text-[28px] tracking-tight text-gray-900 font-medium">
                Authenticating
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed">
                Securing your vault
              </p>
            </>
          ) : (
            <>
              <h2 className="text-[28px] tracking-tight text-gray-900 font-medium">
                Vault secured
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed">
                Synthetic persona operates by default
                <br />
                <span className="text-[14px] text-gray-400 mt-2 block">
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