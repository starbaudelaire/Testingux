import { motion } from 'motion/react';

interface IdentityStateIndicatorProps {
  mode: 'synthetic' | 'vault';
}

export function IdentityStateIndicator({ mode }: IdentityStateIndicatorProps) {
  const isSynthetic = mode === 'synthetic';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100"
    >
      {/* Status indicator */}
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`w-2 h-2 rounded-full ${
            isSynthetic
              ? 'bg-gradient-to-r from-indigo-400 to-purple-400'
              : 'bg-gradient-to-r from-green-400 to-emerald-400'
          }`}
        />
        <motion.div
          animate={{
            opacity: [0.4, 0, 0.4],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute inset-0 w-2 h-2 rounded-full ${
            isSynthetic
              ? 'bg-indigo-400'
              : 'bg-green-400'
          }`}
        />
      </div>

      {/* Label */}
      <span className="text-xs text-gray-600 font-medium">
        {isSynthetic ? 'Synthetic persona active' : 'Vault identity active'}
      </span>
    </motion.div>
  );
}
