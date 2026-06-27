import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, ArrowRight, User, Mail, Building2, MessageSquare, Tag, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'YouTube Video',
    budget: '$3k - $5k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCalendarSim, setShowCalendarSim] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API response / network lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save query locally to simulate server persistence
      const submissions = JSON.parse(localStorage.getItem('tejxstudio_contacts') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('tejxstudio_contacts', JSON.stringify(submissions));
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/5 bg-[#050505] overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-[#0070FF]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Info Panel Block (Col-5) */}
          <div className="lg:col-span-5 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
                Collab
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white mt-4 mb-6">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Something Great</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                Ready to level up your content? Fill out the brief and let’s engineer visual assets that stand out and convert viewers into loyal followers.
              </p>
            </motion.div>

            {/* Quick trust metrics checklist */}
            <ul className="space-y-4 font-mono text-sm text-neutral-500">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse" />
                <span>Response time: Under 12 Hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse" />
                <span>Available for Q3 retainers & standalone mini-docs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse" />
                <span>Frame.io integration for precision revisions</span>
              </li>
            </ul>

            {/* Booking call alternative card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-neutral-950/40">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#0070FF] block mb-1">Prefer instant scheduling?</span>
              <h4 className="font-display font-semibold text-lg text-white mb-2">Book a 15-Min Discovery Session</h4>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Skip the back-and-forth and lock in a strategic screen-share directly onto my calendar.
              </p>
              
              {showCalendarSim ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-[#0070FF]/10 border border-[#0070FF]/20 text-xs text-neutral-300 font-mono"
                >
                  🗓️ Calendar slot simulator initialized. Direct screen-share window loaded successfully!
                </motion.div>
              ) : (
                <button
                  onClick={() => {
                    setShowCalendarSim(true);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0070FF] hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>Go to scheduling calendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Form Panel Block (Col-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#0070FF]" />
                          Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tej X."
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border focus:outline-none focus:bg-white/[0.04] transition-all text-white placeholder-neutral-600 ${
                            errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#0070FF]/50'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.name}</p>}
                      </div>

                      {/* Email Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#0070FF]" />
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border focus:outline-none focus:bg-white/[0.04] transition-all text-white placeholder-neutral-600 ${
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#0070FF]/50'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.email}</p>}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Company Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#0070FF]" />
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Self / Startup Inc."
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#0070FF]/50 focus:outline-none focus:bg-white/[0.04] transition-all text-white placeholder-neutral-600"
                        />
                      </div>

                      {/* Project Type Dropdown */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-[#0070FF]" />
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 focus:border-[#0070FF]/50 focus:outline-none text-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="Short Form Content">Short Form Content</option>
                          <option value="YouTube Video">YouTube Video</option>
                          <option value="Commercial Campaign">Commercial Campaign</option>
                          <option value="Motion Graphics Design">Motion Graphics Design</option>
                          <option value="Other Creative Cut">Other Creative Cut</option>
                        </select>
                      </div>

                    </div>

                    {/* Budget selectors */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0070FF]" />
                        Project Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['$1k - $3k', '$3k - $5k', '$5k - $10k', '$10k+'].map((budgetOption) => {
                          const isSelected = formData.budget === budgetOption;
                          return (
                            <button
                              key={budgetOption}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: budgetOption })}
                              className={`py-3 px-1.5 rounded-xl border text-xs font-mono font-bold tracking-tight text-center transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#0070FF] border-blue-400/30 text-white shadow-lg shadow-blue-600/10'
                                  : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/10'
                              }`}
                            >
                              {budgetOption}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#0070FF]" />
                        Message Brief
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your channel, style cues, and references..."
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border focus:outline-none focus:bg-white/[0.04] transition-all text-white placeholder-neutral-600 resize-none ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#0070FF]/50'
                        }`}
                      />
                      {errors.message && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit button with loader */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-semibold bg-[#0070FF] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 relative overflow-hidden group hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Start Your Project</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Highly Cinematic Success Box
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="relative">
                      {/* Pulsing rings */}
                      <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-md animate-ping" />
                      <div className="absolute -inset-8 rounded-full bg-emerald-600/5 blur-lg" />
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle className="w-10 h-10 fill-emerald-500/10" />
                      </div>
                    </div>

                    <div className="space-y-2 max-w-sm">
                      <h3 className="font-display font-bold text-2xl text-white">Project Query Sent!</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        Excellent decision, <strong>{formData.name}</strong>. I have successfully persisted your project parameters. Let’s create some viral magic.
                      </p>
                    </div>

                    {/* Persisted parameters review box */}
                    <div className="w-full max-w-md bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-left space-y-2 text-xs font-mono text-neutral-500">
                      <div><span className="text-neutral-400">Client:</span> {formData.name}</div>
                      <div><span className="text-neutral-400">Project:</span> {formData.projectType} ({formData.budget})</div>
                      <div><span className="text-neutral-400">Status:</span> Queue Assigned (Awaiting Discovery Call)</div>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
