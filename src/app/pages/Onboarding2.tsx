import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full flex flex-col items-center text-center space-y-12"
      >
        {/* Abstract Vault Representation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48"
        >
          {/* Outer rings */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute inset-0 rounded-full border-2 border-indigo-200/30"
          />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-6 rounded-full border-2 border-purple-200/40"
          />
          
          {/* Core */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            className="absolute inset-12 rounded-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 m-2" />
          </motion.div>

          {/* Pulsing glow */}
          <motion.div
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-xl"
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl tracking-tight text-gray-900 leading-tight"
          >
            The Vault
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base text-gray-500 leading-relaxed px-4"
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
          transition={{ delay: 0.7, duration: 0.6 }}
          onClick={() => navigate('/onboarding-3')}
          className="mt-auto w-full py-4 px-6 bg-gray-900 text-white rounded-2xl text-base font-medium hover:bg-gray-800 transition-colors"
        >
          Secure with Biometrics
        </motion.button>
      </motion.div>
    </div>
  );
}
