import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Shield } from 'lucide-react';

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full flex flex-col items-center text-center space-y-14"
      >
        {/* Vault Representation - More refined */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-56 h-56 flex items-center justify-center"
        >
          {/* Outer protective rings */}
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="absolute inset-0 rounded-full border-[2px] border-emerald-200/30"
          />
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="absolute inset-8 rounded-full border-[2px] border-green-200/40"
          />
          
          {/* Core vault */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7, type: "spring", stiffness: 150 }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-100/90 via-green-50/80 to-teal-50/70 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-emerald-100/50">
              <Shield className="w-16 h-16 text-emerald-600" />
            </div>
          </motion.div>

          {/* Pulsing ambient glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-10 rounded-full bg-gradient-to-br from-emerald-200/50 via-green-200/40 to-teal-200/30 blur-3xl"
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-7">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[32px] tracking-tight text-gray-900 leading-tight font-medium"
          >
            The Vault
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[16px] text-gray-500 leading-relaxed px-2"
          >
            Your authentic identity lives here
            <br />
            <br />
            It only surfaces when you choose
            <br />
            to reveal it—contextually, intentionally
          </motion.p>
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => navigate('/onboarding-3')}
          className="mt-auto w-full py-4 px-6 bg-gray-900 text-white rounded-[20px] text-[16px] font-medium hover:bg-gray-800 active:scale-[0.98] transition-all shadow-sm"
        >
          Secure with Biometrics
        </motion.button>
      </motion.div>
    </div>
  );
}