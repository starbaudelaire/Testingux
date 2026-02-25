import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, CheckCircle2, Lock } from 'lucide-react';
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
  const [isComplete, setIsComplete] = useState(false);

  const handleReveal = () => {
    setIsAuthenticating(true);
    
    // Simulate biometric authentication
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsComplete(true);
    }, 1800);

    // Complete the flow
    setTimeout(() => {
      onReveal();
      onClose();
      setIsComplete(false);
    }, 2800);
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
            transition={{ duration: 0.25 }}
            onClick={!isAuthenticating ? onClose : undefined}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 400 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-2xl rounded-t-[32px] shadow-2xl z-50 max-w-2xl mx-auto border-t border-gray-100/50"
          >
            <div className="px-6 pt-5 pb-8 space-y-8">
              {/* Handle bar */}
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    width: isAuthenticating ? 60 : 40,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gray-300 rounded-full"
                />
              </div>

              <AnimatePresence mode="wait">
                {isComplete ? (
                  // Success state
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 flex flex-col items-center gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                      </div>
                      {/* Success glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3],
                          opacity: [0.4, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-full bg-emerald-300 blur-xl"
                      />
                    </motion.div>
                    <div className="text-center space-y-2">
                      <p className="text-base text-gray-900 font-medium">Identity revealed</p>
                      <p className="text-sm text-gray-500">Completing transaction securely</p>
                    </div>
                  </motion.div>
                ) : isAuthenticating ? (
                  // Authenticating state
                  <motion.div
                    key="authenticating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 flex flex-col items-center gap-6"
                  >
                    <div className="relative w-24 h-24">
                      {/* Scanning ring animation */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        <div className="w-full h-full rounded-full border-[3px] border-transparent border-t-indigo-400 border-r-indigo-300" />
                      </motion.div>
                      
                      {/* Pulsing background */}
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 blur-md"
                      />
                      
                      {/* Center icon */}
                      <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
                        <Fingerprint className="w-11 h-11 text-indigo-600" />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-1.5">
                      <p className="text-base text-gray-900 font-medium">Verifying</p>
                      <p className="text-sm text-gray-500">Unlocking your Vault identity</p>
                    </div>
                  </motion.div>
                ) : (
                  // Prompt state
                  <motion.div
                    key="prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-7"
                  >
                    {/* Icon */}
                    <div className="flex justify-center pt-2">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.7 }}
                        className="relative"
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
                          <Fingerprint className="w-9 h-9 text-indigo-600" />
                        </div>
                        {/* Ambient glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-2xl opacity-40" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <motion.h3
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[19px] text-gray-900 font-medium tracking-tight"
                      >
                        Unlock Vault identity
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-[15px] text-gray-500 leading-relaxed px-2"
                      >
                        {context} requires your authentic identity
                      </motion.p>
                    </div>
{/* Data Request Summary Card (TAMBAHAN BARU) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4 text-left space-y-2 mt-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {/* Pastikan lu import Lock dari 'lucide-react' di atas bareng Scan & ArrowRight */}
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                        🔒 Vault Data Requested
                      </span>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex justify-between border-b border-gray-100 pb-1">
                        <span className="font-medium">Real Name</span>
                        <span className="text-gray-500">Simon</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-1">
                        <span className="font-medium">Payment</span>
                        <span className="text-gray-500">Visa ending in 4242</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Shipping</span>
                        <span className="text-gray-500">Yogyakarta, ID</span>
                      </li>
                    </ul>
                  </motion.div>
                    {/* Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3 pt-3"
                    >
                      <button
                        onClick={handleReveal}
                        className="w-full py-4 px-6 bg-gray-900 text-white rounded-[18px] text-[15px] font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-sm"
                      >
                        <Fingerprint className="w-[18px] h-[18px]" />
                        Authenticate with biometrics
                      </button>
                      <button
                        onClick={onClose}
                        className="w-full py-4 px-6 bg-gray-100 text-gray-700 rounded-[18px] text-[15px] font-medium hover:bg-gray-150 active:scale-[0.98] transition-all"
                      >
                        Cancel
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}