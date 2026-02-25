import { motion } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';

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
      className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border shadow-sm transition-colors duration-500 ${
        isSynthetic 
          ? 'bg-white/60 border-gray-200/50' 
          : 'bg-emerald-100/50 border-emerald-200/50'
      }`}
    >
      {/* Animated glyph */}
      <motion.div
        animate={{
          rotate: isSynthetic ? [0, 360] : 0,
        }}
        transition={{
          duration: isSynthetic ? 8 : 0,
          repeat: isSynthetic ? Infinity : 0,
          ease: "linear",
        }}
        className="relative flex items-center justify-center"
      >
        {isSynthetic ? (
          <Sparkles className="w-4 h-4 text-indigo-500" />
        ) : (
          <Shield className="w-4 h-4 text-emerald-600" />
        )}
      </motion.div>

      {/* Minimal text label */}
      <motion.span
        key={mode}
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`text-xs font-semibold tracking-wide ${
          isSynthetic ? 'text-gray-700' : 'text-emerald-800'
        }`}
      >
        {isSynthetic ? 'Synthetic' : 'Vault'}
      </motion.span>

      {/* Subtle pulse indicator */}
      <div className="relative w-1.5 h-1.5 ml-0.5">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`w-full h-full rounded-full ${
            isSynthetic ? 'bg-indigo-500' : 'bg-emerald-500'
          }`}
        />
      </div>
    </motion.div>
  );
}