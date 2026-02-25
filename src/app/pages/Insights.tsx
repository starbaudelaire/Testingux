import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, Layers, Waves, Brain } from 'lucide-react';

export default function Insights() {
  const navigate = useNavigate();

  const insightCards = [
    {
      icon: Shield,
      title: 'Identity exposure minimized',
      description: 'Your authentic self surfaces only for trusted moments',
      color: 'from-emerald-50/80 via-green-50/80 to-teal-50/80',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-100/50',
    },
    {
      icon: Layers,
      title: 'Behavioral noise generated',
      description: 'Pattern recognition systems encounter fragmented, non-persistent signals',
      color: 'from-indigo-50/80 via-purple-50/80 to-blue-50/80',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-100/50',
    },
    {
      icon: Brain,
      title: 'Contextual intelligence active',
      description: 'Your privacy layer adapts to each interaction without manual intervention',
      color: 'from-purple-50/80 via-pink-50/80 to-rose-50/80',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-100/50',
    },
  ];

  const stats = [
    { label: 'Protected sessions', value: '127' },
    { label: 'Vault reveals', value: '3' },
    { label: 'Active days', value: '18' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-gray-100/50"
      >
        <div className="px-4 py-4 flex items-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/browse')}
            className="p-2 hover:bg-gray-100/60 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-medium text-gray-900">Privacy Insights</h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Overview Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50/60 via-purple-50/60 to-pink-50/60 backdrop-blur-sm border border-indigo-100/30"
        >
          {/* Animated flowing waves - abstract representation */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -left-20 w-96 h-96"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-transparent blur-3xl" />
          </motion.div>
          
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-transparent blur-3xl" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center mb-5 shadow-lg shadow-indigo-100/50"
            >
              <Waves className="w-9 h-9 text-indigo-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-medium text-gray-900 mb-2.5"
            >
              System operating naturally
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-600 leading-relaxed"
            >
              Privacy as background intelligence,
              <br />
              not conscious effort
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/80 text-center shadow-sm"
            >
              <div className="text-[26px] font-medium text-gray-900 mb-1.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-500 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insight Cards */}
        <div className="space-y-4">
          {insightCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`relative overflow-hidden bg-gradient-to-br ${card.color} backdrop-blur-sm rounded-2xl p-6 border ${card.borderColor}`}
            >
              {/* Subtle glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/50 blur-2xl"
              />
              
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center pt-6 pb-8"
        >
          <p className="text-[13px] text-gray-500 leading-relaxed">
            Seamless protection without psychological burden
            <br />
            <span className="text-gray-400">
              You operate freely—the system handles complexity
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}