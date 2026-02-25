import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

export default function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full flex flex-col items-center text-center space-y-12"
      >
        {/* Abstract Visual Anchor */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-32 h-32"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 blur-2xl opacity-60" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 opacity-80" />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-8 rounded-full border border-indigo-200/40"
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl tracking-tight text-gray-900 leading-tight"
          >
            Your digital identity
            <br />
            is constantly observed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            This system separates who you are
            <br />
            from how you are perceived
          </motion.p>
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => navigate('/onboarding-2')}
          className="mt-auto w-full py-4 px-6 bg-gray-900 text-white rounded-2xl text-base font-medium hover:bg-gray-800 transition-colors"
        >
          Initialize Vault
        </motion.button>
      </motion.div>
    </div>
  );
}
