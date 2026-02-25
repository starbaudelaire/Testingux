import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { BarChart3, Search, Globe, ShoppingBag, Lock, Menu } from 'lucide-react';
import { IdentityStateIndicator } from '../components/IdentityStateIndicator';
import { IdentityRevealSheet } from '../components/IdentityRevealSheet';

type IdentityMode = 'synthetic' | 'vault';

export default function Browse() {
  const navigate = useNavigate();
  const [identityMode, setIdentityMode] = useState<IdentityMode>('synthetic');
  const [showRevealSheet, setShowRevealSheet] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const browsingItems = [
    {
      title: 'Minimalist Home Decor',
      url: 'design-store.com',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    },
    {
      title: 'Sustainable Fashion Brands',
      url: 'eco-fashion.co',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    },
    {
      title: 'Weekend Getaway Ideas',
      url: 'travel-guide.com',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    },
  ];

  const handleCheckout = () => {
    setShowRevealSheet(true);
  };

  const handleIdentityReveal = () => {
    setIdentityMode('vault');
    // Simulate returning to synthetic mode after transaction
    setTimeout(() => {
      setIdentityMode('synthetic');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-all duration-500 ${
          identityMode === 'vault'
            ? 'bg-gradient-to-r from-emerald-50/90 via-green-50/90 to-teal-50/90 border-emerald-100/50'
            : 'bg-white/70 border-gray-100/50'
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between max-w-2xl mx-auto">
          <button className="p-2 hover:bg-white/60 rounded-xl transition-colors">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          <IdentityStateIndicator mode={identityMode} />

          <button
            onClick={() => navigate('/insights')}
            className="p-2 hover:bg-white/60 rounded-xl transition-colors"
          >
            <BarChart3 className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search or enter URL"
            className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent transition-all shadow-sm"
          />
        </motion.div>

        {/* Browsing Cards */}
        <div className="space-y-4">
          {browsingItems.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100/80 hover:shadow-lg hover:shadow-gray-200/50 transition-all"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">{item.url}</p>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 px-4 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Purchase
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy Info Card */}
        {/* Privacy Info Card (UPDATED) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-indigo-100/50"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 mb-1">
                Synthetic Persona Active
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Current profile fed to external trackers: <br />
                <span className="font-medium text-indigo-700">Interested in minimalist decor and sustainable fashion.</span>
              </p>
              <button className="text-xs py-2 px-4 bg-white border border-indigo-100 rounded-lg text-indigo-600 font-medium hover:bg-indigo-50 transition-colors">
                Shuffle Persona
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Identity Reveal Sheet */}
      <IdentityRevealSheet
        isOpen={showRevealSheet}
        onClose={() => setShowRevealSheet(false)}
        onReveal={handleIdentityReveal}
        context="Completing this purchase"
      />
    </div>
  );
}