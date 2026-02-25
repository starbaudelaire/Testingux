import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, CheckCircle2, ShieldAlert, Lock, ArrowRight } from 'lucide-react';

interface IdentityRevealSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onReveal: () => void;
  context?: string;
}

export function IdentityRevealSheet({ isOpen, onClose, onReveal, context }: IdentityRevealSheetProps) {
  // authState: 'idle' -> 'scanning' -> 'verified' -> 'complete'
  const [authState, setAuthState] = useState<'idle' | 'scanning' | 'verified' | 'complete'>('idle');

  useEffect(() => {
    if (isOpen) setAuthState('idle');
  }, [isOpen]);

  const handleStartAuth = () => {
    setAuthState('scanning');
    // Fake biometric delay
    setTimeout(() => {
      setAuthState('verified');
    }, 2000);
  };

  const handleConfirmAction = () => {
    setAuthState('complete');
    setTimeout(() => {
      onReveal();
      onClose();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
      >
        <div className="p-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              Vault Access Required
            </h3>
            <p className="text-sm text-gray-500">
              {context || "This action requires your authentic identity."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {authState === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-left space-y-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Data Requested
                  </span>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="font-medium">Identity</span><span className="text-gray-500">Authentic Profile</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="font-medium">Payment</span><span className="text-gray-500">Primary Method</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={handleStartAuth}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
                >
                  <Fingerprint className="w-5 h-5" /> Verify to Continue
                </button>
              </motion.div>
            )}

            {authState === 'scanning' && (
              <motion.div key="scanning" className="flex flex-col items-center py-8">
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Fingerprint className="w-16 h-16 text-indigo-500" />
                </motion.div>
                <p className="text-sm text-gray-500 mt-4 animate-pulse">Authenticating biometrics...</p>
              </motion.div>
            )}

            {authState === 'verified' && (
              <motion.div key="verified" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verification Successful</h4>
                  <p className="text-sm text-gray-500 mt-1">Ready to use authentic identity.</p>
                </div>
                {/* INI KUNCI AGENCY UX LU: Explicit Confirmation */}
                <button
                  onClick={handleConfirmAction}
                  className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all"
                >
                  Confirm Vault Access <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {authState === 'complete' && (
              <motion.div key="complete" className="flex flex-col items-center py-8">
                 <ShieldAlert className="w-16 h-16 text-emerald-500" />
                 <p className="text-sm font-medium text-emerald-700 mt-4">Vault Identity Active</p>
              </motion.div>
            )}
          </AnimatePresence>

          {authState === 'idle' && (
            <button onClick={onClose} className="w-full mt-3 py-3 text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">
              Cancel
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}