/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Search, ShoppingBag, User, Menu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 max-w-7xl mx-auto">
        <div className="text-2xl font-display font-bold tracking-tighter">
          BuildIt<span className="text-orange-500">AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Process</a>
          <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Portfolio</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button className="p-2 bg-orange-500 rounded-full transition-colors">
            <User size={20} />
          </button>
          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="relative">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[14vw] font-display font-bold leading-[0.85] tracking-tighter text-white uppercase"
          >
            The New <br />
            <span className="flex items-center gap-4">
              Era
              <div className="hidden md:block h-[2px] w-[20vw] bg-white/20 mt-8"></div>
            </span>
          </motion.h1>

          {/* Glassmorphism Overlay Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-[15%] right-0 md:right-[10%] max-w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl z-10"
          >
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              We leverage cutting-edge neural networks to craft digital experiences that aren't just seen, but felt.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
          {/* Left Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 h-[400px] md:h-[500px]"
          >
            {/* Neural Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
              <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>
            
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [Math.random() * 500, Math.random() * 500],
                  x: [Math.random() * 800, Math.random() * 800],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-orange-500/40 rounded-full blur-[1px]"
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
            
            <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                    AI
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium uppercase tracking-widest">Trusted by 500+ Innovators</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-md">
                <h3 className="text-3xl font-display font-bold mb-2">Autonomous Design Systems</h3>
                <p className="text-white/60 text-sm">Our proprietary AI engines generate unique, high-conversion layouts in seconds, tailored to your brand's DNA.</p>
              </div>
              
              <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all group/btn">
                <span>Start Project</span>
                <div className="bg-white text-orange-500 rounded-full p-1 group-hover/btn:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Column Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex-1 bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors"
            >
              <div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse"></div>
                </div>
                <h4 className="text-xl font-bold mb-2">Neural Optimization</h4>
                <p className="text-sm text-white/50">Real-time performance tuning based on user behavior patterns.</p>
              </div>
              <div className="flex justify-between items-end mt-8">
                <span className="text-2xl font-display font-bold">99.9%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Efficiency</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex-1 bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors"
            >
              <div>
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <h4 className="text-xl font-bold mb-2">Generative Assets</h4>
                <p className="text-sm text-white/50">Custom icons, illustrations, and imagery generated on-the-fly.</p>
              </div>
              <div className="flex justify-between items-end mt-8">
                <span className="text-2xl font-display font-bold">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Generation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer-like accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-12"
          >
            About Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-2xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.4] text-white tracking-tight"
          >
            BuildIt AI is a visionary design collective <br className="hidden md:block" />
            dedicated to bridging the gap between <br className="hidden md:block" />
            <span className="text-white/40 italic">human creativity and machine intelligence.</span> <br className="hidden md:block" />
            With deep expertise in neural aesthetics and <br className="hidden md:block" />
            user-centric engineering, we ensure every <br className="hidden md:block" />
            digital journey is <span className="text-white/40 italic">seamless and transformative.</span>
          </motion.h2>
        </div>
      </section>

      {/* Another Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Ecosystem Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Floating Elements Container */}
          <div className="relative h-[600px] flex flex-col items-center justify-center">
            
            {/* Central Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center z-10 max-w-2xl px-4"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
                For the visionaries <br />
                <span className="text-white/40">who build the future</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                BuildIt AI integrates seamlessly into your workflow, handling the complexity of design while you focus on the vision. Our neural ecosystem learns your brand's essence and evolves with every interaction.
              </p>
            </motion.div>

            {/* Floating Modules - Inspired by Image 1 & 2 */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Module 1: Conversion Optimization */}
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] md:left-[15%]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-xs font-medium max-w-[200px]">
                    "Can we optimize the conversion rate for mobile users?"
                  </div>
                </div>
              </motion.div>

              {/* Module 2: Style Refinement */}
              <motion.div 
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[5%] right-[5%] md:right-[15%]"
              >
                <div className="flex flex-row-reverse items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full blur-[2px]"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-xs font-medium max-w-[200px]">
                    "Generate a dark-mode variant with emerald accents."
                  </div>
                </div>
              </motion.div>

              {/* Module 3: Heatmap Analysis */}
              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] left-[2%] md:left-[10%]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="w-12 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: [-48, 48] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-orange-500"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-xs font-medium max-w-[200px]">
                    "Analyze user heatmaps and adjust the layout accordingly."
                  </div>
                </div>
              </motion.div>

              {/* Module 4: Brand Voice */}
              <motion.div 
                animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[15%] right-[2%] md:right-[10%]"
              >
                <div className="flex flex-row-reverse items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                    <div className="text-orange-500 font-display font-bold">Aa</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-xs font-medium max-w-[200px]">
                    "Refine the brand voice to be more 'minimalist' and 'premium'."
                  </div>
                </div>
              </motion.div>

              {/* Floating UI Card - Inspired by Image 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-[40%] -left-12 hidden xl:block w-64 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Neural Style</div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-orange-500"></div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-white/20"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Phone Preview - Inspired by Image 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-[40%] -right-12 hidden xl:block w-48 h-80 bg-zinc-900 border border-white/10 rounded-[2.5rem] p-3 shadow-2xl"
              >
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-zinc-800 rounded-full"></div>
                  <div className="p-4 pt-10 space-y-4">
                    <div className="h-24 w-full bg-white/5 rounded-xl"></div>
                    <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="h-10 w-full bg-orange-500 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            AI-Powered Solutions <br />
            <span className="text-white/40">for the Modern Web</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            We combine human intuition with machine precision to deliver digital experiences that outperform the competition.
          </motion.p>
        </div>

        <div className="space-y-32">
          {/* Service 1: Neural UI/UX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video group/img flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
                
                <div className="grid grid-cols-2 gap-8 w-full h-full items-center">
                  {/* Radar Scanner - Inspired by Image 2 */}
                  <div className="relative flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/5 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-white/10 scale-75"></div>
                      <div className="absolute inset-0 rounded-full border border-white/10 scale-50"></div>
                      
                      {/* Radar Sweep */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-transparent origin-center"
                        style={{ clipPath: 'conic-gradient(from 0deg, transparent 0%, rgba(249,115,22,0.4) 10%, transparent 20%)' }}
                      ></motion.div>
                      
                      <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
                    </div>
                    <div className="mt-4 text-[10px] uppercase tracking-widest text-white/40 font-bold animate-pulse">
                      Analyzing current workflow...
                    </div>
                  </div>

                  {/* Checklist - Inspired by Image 2 */}
                  <div className="space-y-3">
                    {[
                      { label: "Neural Check", icon: "🧠" },
                      { label: "Layout Analysis", icon: "📐" },
                      { label: "Heatmap Prediction", icon: "🔥" },
                      { label: "A/B Simulation", icon: "🧪" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-default group/item"
                      >
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover/item:text-white transition-colors">
                          {item.label}
                        </span>
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500/20 group-hover/item:bg-orange-500 transition-colors"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-orange-500 text-xs font-bold uppercase tracking-widest block"
              >
                Design Intelligence
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Neural UI/UX Generation
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/60 leading-relaxed"
              >
                Our AI engines analyze millions of high-performing layouts to generate unique wireframes and interfaces tailored to your specific user base and conversion goals.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Automated Wireframing</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">A/B Testing AI</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Service 2: Generative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-1 order-2"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-blue-500 text-xs font-bold uppercase tracking-widest block"
              >
                Content Engine
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Generative Brand Assets
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/60 leading-relaxed"
              >
                Stop relying on stock imagery. We deploy custom-trained models to generate on-brand photography, illustrations, and copy that speak directly to your audience's desires.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Custom Image Models</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">AI Copywriting</span>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group lg:order-2 order-1"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video group/img flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
                
                {/* Connection Interaction - Inspired by Image 1 & 4 */}
                <div className="relative w-full flex items-center justify-between">
                  {/* Our Solution Node */}
                  <div className="flex flex-col items-center gap-4 z-10">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center shadow-2xl relative group/node">
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover/node:opacity-100 transition-opacity"></div>
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center relative">
                        <div className="w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">BuildIt Core</span>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-white/5">
                    <motion.div 
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 w-12 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    ></motion.div>
                  </div>

                  {/* Integration Grid - Inspired by Image 4 */}
                  <div className="grid grid-cols-2 gap-3 z-10">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center shadow-lg cursor-pointer"
                      >
                        <div className={`w-5 h-5 rounded-sm opacity-60 ${
                          i === 1 ? 'bg-orange-500' : 
                          i === 2 ? 'bg-emerald-500' : 
                          i === 3 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
                  Seamless Integration Stack
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service 3: Performance Tuning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video group/img p-8 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 to-transparent"></div>
                
                {/* Analytics Dashboard - Inspired by Image 3 */}
                <div className="flex justify-between items-start z-10">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-48">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Efficiency Gain</div>
                      <div className="text-2xl font-display font-bold text-emerald-500">+89.3%</div>
                      <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "89.3%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-emerald-500"
                        ></motion.div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-48">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Latency Drop</div>
                      <div className="text-2xl font-display font-bold text-emerald-500">-142ms</div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex-1 ml-6 h-full relative overflow-hidden">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Neural Performance</div>
                    {/* Mini Chart - Inspired by Image 3 */}
                    <div className="h-32 flex items-end gap-1">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${20 + Math.random() * 80}%` }}
                          transition={{ delay: i * 0.05, duration: 1 }}
                          className="flex-1 bg-emerald-500/20 rounded-t-sm relative group/bar"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[8px] text-white/20 uppercase font-bold">
                      <span>Jan</span>
                      <span>Apr</span>
                      <span>Jul</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center z-10">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Live Optimization Active</span>
                  </div>
                  <div className="text-[10px] font-mono text-white/20">v2.4.0-stable</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-emerald-500 text-xs font-bold uppercase tracking-widest block"
              >
                Neural Optimization
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Autonomous Performance
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/60 leading-relaxed"
              >
                Our websites don't just look good—they think. Our neural tuning engine automatically optimizes code, assets, and delivery paths in real-time to ensure perfect performance scores.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Real-time Asset Tuning</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Predictive Caching</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            From Concept to <br />
            <span className="text-white/40">Neural Reality</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1: Discovery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-zinc-900 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-display text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">01</span>
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Search size={20} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Neural Discovery</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We begin by ingesting your brand DNA, market data, and user behavior patterns into our proprietary models to map out the most effective digital path.
              </p>
            </div>
            <div className="mt-12 relative h-40 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
              <div className="relative w-full px-8 space-y-4">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full bg-orange-500/40"
                  ></motion.div>
                </div>
                <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "80%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="h-full bg-orange-500/20"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-[8px] uppercase tracking-widest text-white/20 font-bold">
                  <span>Data Ingestion</span>
                  <span>98% Match</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Synthesis */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-zinc-900 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-display text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">02</span>
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Generative Synthesis</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our AI engines generate thousands of design variations, testing each against conversion benchmarks before presenting the most high-performing options.
              </p>
            </div>
            <div className="mt-12 relative h-40 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent"></div>
              <div className="grid grid-cols-4 gap-2 px-8">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="aspect-square bg-blue-500/20 rounded-lg border border-blue-500/10"
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step 3: Refinement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-zinc-900 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-purple-500 font-display text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">03</span>
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <User size={20} className="text-purple-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Neural Refinement</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Human designers collaborate with AI to polish every pixel, ensuring that the machine-generated precision is balanced with human soul and brand authenticity.
              </p>
            </div>
            <div className="mt-12 relative h-40 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full blur-[4px]"></div>
                </div>
                <div className="w-8 h-px bg-white/10"></div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                  <User size={16} className="text-white/40" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 4: Deployment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-zinc-900 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-emerald-500 font-display text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">04</span>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <ArrowUpRight size={20} className="text-emerald-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Autonomous Launch</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We deploy your site with continuous neural monitoring, allowing it to autonomously adapt to user behavior and performance shifts in real-time.
              </p>
            </div>
            <div className="mt-12 relative h-40 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
              <div className="flex items-end gap-1 h-12">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [10, 30 + Math.random() * 20, 10] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-emerald-500/40 rounded-full"
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            From Neural Concept <br />
            <span className="text-white/40">to Digital Reality</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Our workflow is a symphony of human vision and algorithmic execution, ensuring speed without compromising soul.
          </motion.p>
        </div>

        <div className="space-y-32">
          {/* Step 01: Neural Discovery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-orange-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video flex items-center justify-center p-8">
                {/* Visual: Data Stream / Neural Map */}
                <div className="w-full h-full relative border border-white/5 rounded-2xl bg-black/40 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
                      ></motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                            className="absolute border border-white/5 rounded-full"
                            style={{ width: `${60 + i * 30}px`, height: `${60 + i * 30}px` }}
                          >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    Ingesting Brand DNA...
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-display font-bold text-white/10">01</span>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Discovery</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Neural Brand Mapping</h3>
              <p className="text-white/60 leading-relaxed">
                We begin by feeding your brand guidelines, values, and target audience data into our neural engine. This creates a unique "aesthetic map" that guides every design decision.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">DNA Ingestion</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Pattern Analysis</span>
              </div>
            </motion.div>
          </div>

          {/* Step 02: Synthetic Prototyping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-1 order-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-display font-bold text-white/10">02</span>
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Prototyping</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Synthetic Ideation</h3>
              <p className="text-white/60 leading-relaxed">
                Our AI generates hundreds of high-fidelity concepts in parallel. We explore vast creative territories in minutes, identifying the most effective directions for your specific goals.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Rapid Iteration</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Concept Synthesis</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group lg:order-2 order-1"
            >
              <div className="absolute -inset-4 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video flex items-center justify-center p-8">
                {/* Visual: Rapid Concept Switching */}
                <div className="w-full h-full relative border border-white/5 rounded-2xl bg-black/40 overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-4 w-full">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          backgroundColor: ["rgba(255,255,255,0.05)", "rgba(59,130,246,0.1)", "rgba(255,255,255,0.05)"],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="aspect-square rounded-lg border border-white/5"
                      ></motion.div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Generating Concepts...
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 03: Algorithmic Refinement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video flex items-center justify-center p-8">
                {/* Visual: Polishing / Sharpening */}
                <div className="w-full h-full relative border border-white/5 rounded-2xl bg-black/40 overflow-hidden flex items-center justify-center">
                  <motion.div 
                    animate={{ filter: ["blur(10px)", "blur(0px)", "blur(10px)"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-4xl font-display font-bold text-emerald-500/40"
                  >
                    PERFECTION
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="w-full space-y-2">
                      <div className="flex justify-between text-[8px] font-mono text-white/40 uppercase">
                        <span>Refining Aesthetics</span>
                        <span>98%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["0%", "98%", "0%"] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="h-full bg-emerald-500"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-display font-bold text-white/10">03</span>
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Refinement</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Neural Polishing</h3>
              <p className="text-white/60 leading-relaxed">
                Once a direction is chosen, we use neural feedback loops to refine every pixel. We optimize for visual balance, accessibility, and psychological triggers that drive user action.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Pixel-Perfect AI</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Conversion Tuning</span>
              </div>
            </motion.div>
          </div>

          {/* Step 04: Autonomous Deployment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-1 order-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-display font-bold text-white/10">04</span>
                <span className="text-purple-500 text-xs font-bold uppercase tracking-widest">Deployment</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Autonomous Launch</h3>
              <p className="text-white/60 leading-relaxed">
                The final design is handed over to our autonomous development engine. It generates clean, high-performance code and deploys it to a global edge network in seconds.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Code Generation</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase">Edge Deployment</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group lg:order-2 order-1"
            >
              <div className="absolute -inset-4 bg-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video flex items-center justify-center p-8">
                {/* Visual: Code Stream */}
                <div className="w-full h-full relative border border-white/5 rounded-2xl bg-black/40 overflow-hidden p-4">
                  <div className="space-y-2">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0, 0.4, 0], x: [-10, 0, 10] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="h-1 bg-purple-500 rounded-full"
                        style={{ width: `${30 + Math.random() * 60}%` }}
                      ></motion.div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Benefits
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            The BuildIt Advantage <br />
            <span className="text-white/40">Why AI-First Design Wins</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Experience the synergy of high-speed computation and creative soul. We don't just build websites; we engineer digital competitive advantages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Unprecedented Speed",
              desc: "Launch in days, not months. Our AI-accelerated workflows eliminate the traditional agency bottlenecks.",
              icon: <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-orange-500">⚡</motion.div>,
              gradient: "from-orange-500/10"
            },
            {
              title: "Neural Precision",
              desc: "Every pixel is backed by data. We use neural networks to predict user behavior and optimize layouts for conversion.",
              icon: <div className="text-blue-500">🧠</div>,
              gradient: "from-blue-500/10"
            },
            {
              title: "24/7 Evolution",
              desc: "Your site never stops improving. Autonomous monitoring ensures your platform adapts to market shifts in real-time.",
              icon: <div className="text-emerald-500">🔄</div>,
              gradient: "from-emerald-500/10"
            },
            {
              title: "Cost Efficiency",
              desc: "Premium design without the premium overhead. AI allows us to deliver elite-level results at a fraction of the cost.",
              icon: <div className="text-purple-500">💎</div>,
              gradient: "from-purple-500/10"
            },
            {
              title: "Brand Consistency",
              desc: "Custom-trained models ensure your brand DNA is perfectly preserved across every single asset we generate.",
              icon: <div className="text-pink-500">✨</div>,
              gradient: "from-pink-500/10"
            },
            {
              title: "Infinite Scalability",
              desc: "Grow without limits. Instantly generate new pages, assets, and features as your business expands globally.",
              icon: <div className="text-cyan-500">🚀</div>,
              gradient: "from-cyan-500/10"
            }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${benefit.gradient} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Pricing
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            Neural Investment <br />
            <span className="text-white/40">Scale with Precision</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto mb-12"
          >
            Choose the bandwidth that fits your vision. Our subscription-based model ensures your digital presence evolves at the speed of thought.
          </motion.p>

          {/* Toggle - Visual Only for now */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Monthly</span>
            <div className="w-14 h-7 bg-zinc-800 rounded-full p-1 relative cursor-pointer border border-white/10">
              <motion.div 
                animate={{ x: 28 }}
                className="w-5 h-5 bg-orange-500 rounded-full shadow-lg"
              ></motion.div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white">Annually</span>
            <span className="bg-orange-500/20 text-orange-500 text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Save 20%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Neural Lite",
              price: "1,499",
              desc: "Perfect for startups needing consistent, high-quality AI design support.",
              features: [
                "1 Active design request",
                "Standard neural mapping",
                "48h Average turnaround",
                "Basic generative assets",
                "Unlimited revisions"
              ],
              cta: "Choose Lite",
              popular: false
            },
            {
              name: "Neural Pro",
              price: "2,999",
              desc: "The sweet spot for growing brands that require deep neural integration.",
              features: [
                "2 Active design requests",
                "Deep brand DNA mapping",
                "24h Average turnaround",
                "Unlimited generative assets",
                "Autonomous performance tuning",
                "Priority neural queue"
              ],
              cta: "Choose Pro",
              popular: true
            },
            {
              name: "Neural Enterprise",
              price: "Custom",
              desc: "For global visionaries requiring a dedicated neural design ecosystem.",
              features: [
                "Unlimited active requests",
                "Custom model training",
                "Dedicated neural engineer",
                "Full ecosystem integration",
                "24/7 Autonomous monitoring",
                "White-label AI tools"
              ],
              cta: "Contact Sales",
              popular: false
            }
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col bg-zinc-900/50 border ${plan.popular ? 'border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.1)]' : 'border-white/5'} rounded-[2.5rem] p-10 group hover:bg-zinc-900 transition-all duration-500`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl ${plan.popular ? 'bg-orange-500/20' : 'bg-white/5'} flex items-center justify-center mb-6`}>
                  <div className={`w-4 h-4 rounded-full ${plan.popular ? 'bg-orange-500 animate-pulse' : 'bg-white/20'}`}></div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-display font-bold">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-white/40 text-sm">/mo</span>}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <button className={`w-full py-4 rounded-full font-bold text-sm transition-all mb-10 ${
                plan.popular 
                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                {plan.cta}
              </button>

              <div className="space-y-4">
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">What's Included:</div>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/feat">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-orange-500' : 'bg-white/20'} group-hover/feat:scale-125 transition-transform`}></div>
                    <span className="text-xs text-white/60 group-hover/feat:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Subtle Gradient Glow */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${plan.popular ? 'from-orange-500/10' : 'from-white/5'} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            Neural Feedback <br />
            <span className="text-white/40">From Our Global Partners</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Real visionaries, real results. See how BuildIt AI is transforming the digital landscape one neural network at a time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "BuildIt AI's neural mapping completely redefined our brand identity. We launched 3x faster than with traditional agencies without losing an ounce of soul.",
              author: "Marcus Chen",
              role: "CTO at Flux",
              gradient: "from-orange-500/10",
              avatar: "MC"
            },
            {
              quote: "The autonomous performance tuning is a game changer. Our conversion rates spiked by 40% within the first week of deployment. It's like the site is alive.",
              author: "Sarah Jenkins",
              role: "Founder of Bloom",
              gradient: "from-blue-500/10",
              avatar: "SJ"
            },
            {
              quote: "Generative assets that actually feel human. BuildIt AI is the first agency that truly understands the delicate balance between machine precision and human creativity.",
              author: "Elena Rodriguez",
              role: "Creative Director at Nexus",
              gradient: "from-emerald-500/10",
              avatar: "ER"
            },
            {
              quote: "Seamless integration and unprecedented speed. Our entire digital ecosystem now feels evolved. The future of design isn't just coming; it's already here with BuildIt.",
              author: "David Park",
              role: "Head of Product at Zenith",
              gradient: "from-purple-500/10",
              avatar: "DP"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 hover:bg-zinc-900 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br ${testimonial.gradient} to-transparent blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="text-orange-500 text-sm">★</div>
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed mb-10 group-hover:text-white transition-colors">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xs text-white/40 group-hover:border-orange-500/50 group-hover:text-white transition-all">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6"
          >
            Intelligence Base
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
          >
            Frequently Asked <br />
            <span className="text-white/40">Neural Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does the neural design process actually work?",
              a: "Our process begins by ingesting your brand's DNA—colors, typography, and values. Our neural engine then generates thousands of variations, which are refined by our human designers to ensure they meet our elite standards for both aesthetics and conversion."
            },
            {
              q: "Do I own the rights to the AI-generated assets?",
              a: "Absolutely. Once a design is finalized and delivered, you own 100% of the intellectual property rights. We simply provide the neural horsepower to create them faster and more effectively."
            },
            {
              q: "How fast can I expect my first design concept?",
              a: "Speed is our core advantage. Most initial concepts are delivered within 24-48 hours. Our autonomous prototyping allows us to explore creative directions in minutes that would take traditional agencies weeks."
            },
            {
              q: "Can BuildIt AI integrate with my existing design team?",
              a: "Yes. We often act as a 'neural extension' for internal teams, handling the heavy lifting of asset generation and performance tuning so your designers can focus on high-level creative strategy."
            },
            {
              q: "What happens if I'm not satisfied with a neural output?",
              a: "We offer unlimited revisions. Our AI learns from your feedback, meaning every iteration gets closer to your perfect vision. The more we collaborate, the smarter the neural engine becomes for your brand."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <details className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 open:bg-zinc-900/80 open:border-white/10">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h3 className="text-lg md:text-xl font-bold pr-8">{faq.q}</h3>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <p className="text-white/50 leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Footer Section */}
      <footer className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Massive CTA */}
          <div className="text-center mb-32">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[15vw] font-display font-bold leading-none tracking-tighter text-white uppercase mb-12"
            >
              Ready to <br />
              <span className="text-white/20">Evolve?</span>
            </motion.h2>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold text-xl transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors">Start Your Neural Journey</span>
              <ArrowUpRight size={24} className="relative z-10 group-hover:text-white transition-colors group-hover:rotate-45 transition-transform" />
            </motion.button>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24 border-t border-white/10 pt-24">
            <div className="col-span-2">
              <div className="text-2xl font-display font-bold tracking-tighter mb-6">
                BuildIt<span className="text-orange-500">AI</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
                The world's first neural-first design agency. We bridge the gap between human creativity and machine intelligence.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">Neural Systems: Operational</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Process</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Stay Connected</h4>
              <div className="flex gap-4 mb-8">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                  </a>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-full flex items-center">
                <input 
                  type="email" 
                  placeholder="Neural Updates" 
                  className="bg-transparent border-none outline-none px-4 py-2 text-sm flex-1 text-white placeholder:text-white/20"
                />
                <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-orange-500 hover:text-white transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">
            <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
              © 2026 BUILDIT AI DESIGN COLLECTIVE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 font-bold hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 font-bold hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
