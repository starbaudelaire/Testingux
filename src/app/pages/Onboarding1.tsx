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
        className="max-w-md w-full flex flex-col items-center text-center space-y-14"
      >
        {/* Abstract Visual Anchor - More elegant and minimal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative w-40 h-40"
        >
          {/* Outer ambient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-pink-50/30 blur-3xl" />
          
          {/* Middle layer */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-6 rounded-full bg-gradient-to-br from-indigo-100/80 via-purple-100/60 to-pink-100/40"
          />
          
          {/* Inner core */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-12 rounded-full border border-indigo-200/30"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-indigo-50/80 backdrop-blur-sm" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-7">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[32px] tracking-tight text-gray-900 leading-[1.2] font-medium"
          >
            Your digital identity
            <br />
            is constantly observed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[17px] text-gray-500 leading-relaxed"
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
          transition={{ delay: 0.9, duration: 0.6 }}
          onClick={() => navigate('/onboarding-2')}
          className="mt-auto w-full py-4 px-6 bg-gray-900 text-white rounded-[20px] text-[16px] font-medium hover:bg-gray-800 active:scale-[0.98] transition-all shadow-sm"
        >
          Initialize Vault
        </motion.button>
      </motion.div>
    </div>
  );
}