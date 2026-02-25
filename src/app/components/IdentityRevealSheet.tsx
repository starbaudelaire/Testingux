import { motion, AnimatePresence } from 'motion/react';
import { Scan, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface IdentityRevealSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onReveal: () => void;
  context?: string;
}

export function IdentityRevealSheet({
  isOpen,
  onClose,
  onReveal,
  context = "this interaction",
}: IdentityRevealSheetProps) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleReveal = () => {
    setIsAuthenticating(true);
    
    // Simulate biometric authentication
    setTimeout(() => {
      setIsAuthenticating(false);
      onReveal();
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-w-2xl mx-auto"
          >
            <div className="p-6 space-y-6">
              {/* Handle bar */}
              <div className="flex justify-center">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>

              {isAuthenticating ? (
                // Authenticating state
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 flex flex-col items-center gap-6"
                >
                  <div className="relative w-20 h-20">
                    <motion.div
                      animate={{
                        scale: [1, 1.3],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-full border-2 border-indigo-300"
                    />
                    <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                      <Scan className="w-10 h-10 text-indigo-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-base text-gray-900 font-medium">Authenticating</p>
                    <p className="text-sm text-gray-500 mt-1">Verifying your identity</p>
                  </div>
                </motion.div>
              ) : (
                // Prompt state
                <>
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-indigo-600" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-center space-y-3"
                  >
                    <h3 className="text-xl text-gray-900 font-medium">
                      Authentic identity required
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {context} requires your Vault identity
                      <br />
                      to complete this action
                    </p>
                  </motion.div>

                  {/* Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3 pt-2"
                  >
                    <button
                      onClick={handleReveal}
                      className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl text-base font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Scan className="w-5 h-5" />
                      Reveal Vault Identity
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full py-4 px-6 bg-gray-100 text-gray-700 rounded-2xl text-base font-medium hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
