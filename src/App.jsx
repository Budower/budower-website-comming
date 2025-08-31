import { motion } from 'framer-motion'

export default function App() {
  const bgUrl = 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2400&auto=format&fit=crop'
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${bgUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="absolute -inset-24 bg-gradient-to-tr from-emerald-400/10 via-transparent to-green-500/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="inline-flex items-center gap-4 rounded-3xl bg-white/10 px-6 py-5 md:px-8 md:py-6 backdrop-blur-xl ring-1 ring-white/15 shadow-2xl">
            <motion.svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" className=\"h-10 w-10 md:h-12 md:w-12\" initial={{ rotate: -6, scale: 0.96 }} animate={{ rotate: [ -6, 0, -6 ], scale: [0.96, 1, 0.96] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>
              <defs>
                <linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">
                  <stop offset=\"0%\" stopColor=\"#34d399\"/>
                  <stop offset=\"100%\" stopColor=\"#22c55e\"/>
                </linearGradient>
                <filter id=\"softGlow\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\"> 
                  <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>
                  <feMerge><feMergeNode in=\"blur\"/><feMergeNode in=\"SourceGraphic\"/></feMerge>
                </filter>
              </defs>
              <path d=\"M38 23h-1.2A12.8 12.8 0 0 0 24 10.2 12.8 12.8 0 0 0 11.2 23H10a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3zM16 23a8 8 0 0 1 16 0H16z\" fill=\"url(#g)\" filter=\"url(#softGlow)\"/>
            </motion.svg>
            <span className=\"text-4xl md:text-5xl font-black tracking-tight text-emerald-400\">Budower</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className=\"mt-6 text-xl sm:text-2xl md:text-4xl font-semibold tracking-[0.08em]\"> 
            NEXT GENERATION SOFTWARE FOR CONSTRUCTION
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className=\"mt-4 md:mt-6 text-sm sm:text-base md:text-xl font-medium uppercase tracking-[0.35em] text-white/90\">
            Coming Soon
          </motion.p>
        </div>
      </div>

      <div className=\"absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500 opacity-90\" />
      <div className=\"absolute top-3 right-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/70 select-none\">budower.com</div>
    </div>
  )
}
