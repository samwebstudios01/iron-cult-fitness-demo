import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG, PROGRAMS } from '../data/gymData';
import { X, Calendar, Clock, Target, Dumbbell, User, Phone, Mail, MessageSquare, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { t, language } = useLanguage();
  const { isBookingOpen, closeBookingModal, bookingInitialProgram, bookingInitialPlan } = useRouter();

  // Get tomorrow's date formatted as YYYY-MM-DD
  const getDefaultDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: getDefaultDate(),
    timeSlot: 'earlyMorning',
    goal: 'strength',
    program: bookingInitialProgram || 'Strength Training',
    preferredLanguage: language === 'hi' ? 'Hindi' : language === 'hi-Latn' ? 'Hinglish' : 'English',
    message: bookingInitialPlan ? `Interested in ${bookingInitialPlan} Membership plan.` : '',
    consent: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial program / plan when modal opens
  useEffect(() => {
    if (bookingInitialProgram) {
      setFormData(prev => ({ ...prev, program: bookingInitialProgram }));
    }
    if (bookingInitialPlan) {
      setFormData(prev => ({
        ...prev,
        message: `Interested in ${bookingInitialPlan} plan.`
      }));
    }
  }, [bookingInitialProgram, bookingInitialPlan]);

  // Escape key listener & body scroll lock
  useEffect(() => {
    if (!isBookingOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeBookingModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBookingOpen, closeBookingModal]);

  if (!isBookingOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t.booking.errors.nameRequired;
    }

    const cleanPhone = formData.phone.replace(/[\s\-]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      errs.phone = t.booking.errors.phoneRequired;
    }

    if (!formData.date) {
      errs.date = t.booking.errors.dateRequired;
    }

    if (!formData.consent) {
      errs.consent = t.booking.errors.consentRequired;
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const getSlotLabel = (key: string) => {
    switch (key) {
      case 'earlyMorning': return t.booking.slots.earlyMorning;
      case 'midMorning': return t.booking.slots.midMorning;
      case 'afternoon': return t.booking.slots.afternoon;
      case 'evening': return t.booking.slots.evening;
      case 'night': return t.booking.slots.night;
      default: return key;
    }
  };

  const getGoalLabel = (key: string) => {
    switch (key) {
      case 'muscle': return t.booking.goals.muscle;
      case 'fatloss': return t.booking.goals.fatloss;
      case 'general': return t.booking.goals.general;
      case 'strength': return t.booking.goals.strength;
      case 'conditioning': return t.booking.goals.conditioning;
      case 'beginner': return t.booking.goals.beginner;
      default: return t.booking.goals.other;
    }
  };

  const generateWhatsAppUrl = () => {
    const msg = encodeURIComponent(
      `Hi IRON CULT FITNESS! I submitted a free trial request for ${formData.name}. ` +
      `Date: ${formData.date}, Slot: ${getSlotLabel(formData.timeSlot)}, Program: ${formData.program}. ` +
      `Looking forward to visiting the Vaishali Nagar gym!`
    );
    return `https://wa.me/${GYM_CONFIG.contact.whatsappRaw}?text=${msg}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={closeBookingModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#141414] border border-[#343434] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeBookingModal}
          className="absolute top-4 right-4 p-2 text-[#8e8e8e] hover:text-white rounded bg-[#1e1e1e] hover:bg-[#2e2e2e] transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Confirmation Screen */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#C8FF00] text-[#C8FF00] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C8FF00]/15">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 bg-[#202020] text-[#C8FF00] text-xs font-mono rounded mb-2">
              {t.booking.success.badge}
            </div>

            <h3 id="booking-modal-title" className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white mb-2">
              {t.booking.success.title}
            </h3>

            <p className="text-sm text-[#B6B6B6] max-w-md mx-auto mb-6">
              {t.booking.success.desc}
            </p>

            {/* Submitted Summary Details */}
            <div className="bg-[#181818] border border-[#343434] rounded-lg p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto mb-6">
              <div className="flex justify-between py-1 border-b border-[#252525]">
                <span className="text-[#888888]">{t.booking.success.nameLabel}:</span>
                <span className="font-semibold text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252525]">
                <span className="text-[#888888]">{t.booking.success.phoneLabel}:</span>
                <span className="font-mono text-white">{formData.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252525]">
                <span className="text-[#888888]">{t.booking.success.dateLabel}:</span>
                <span className="font-semibold text-[#C8FF00]">{formData.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252525]">
                <span className="text-[#888888]">{t.booking.success.timeLabel}:</span>
                <span className="text-white">{getSlotLabel(formData.timeSlot)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252525]">
                <span className="text-[#888888]">{t.booking.success.programLabel}:</span>
                <span className="text-white">{formData.program}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#888888]">{t.booking.success.goalLabel}:</span>
                <span className="text-white">{getGoalLabel(formData.goal)}</span>
              </div>
            </div>

            {/* Contextual WhatsApp Follow-up Button */}
            <div className="space-y-3 max-w-md mx-auto">
              <p className="text-xs text-[#8e8e8e]">
                {t.booking.success.whatsappPrompt}
              </p>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#101010] text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.booking.success.whatsappBtn}</span>
              </a>

              <button
                type="button"
                onClick={closeBookingModal}
                className="w-full py-2.5 px-4 bg-[#202020] hover:bg-[#2a2a2a] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#343434] transition-colors"
              >
                {t.booking.success.closeBtn}
              </button>
            </div>

            <p className="text-[11px] text-[#707070] mt-6 italic">
              {t.booking.success.demoDisclaimer}
            </p>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-bold tracking-wider text-[#C8FF00] uppercase block mb-1">
                DEMO RESERVATION FLOW
              </span>
              <h3 id="booking-modal-title" className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                {t.booking.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B6B6B6] mt-1">
                {t.booking.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.name} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#777777] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.booking.namePlaceholder}
                      className={`w-full pl-9 pr-3 py-2.5 rounded bg-[#101010] border text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00] ${
                        errors.name ? 'border-red-500' : 'border-[#343434]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#777777] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-9 pr-3 py-2.5 rounded bg-[#101010] border text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00] ${
                        errors.phone ? 'border-red-500' : 'border-[#343434]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 2: Email & Preferred Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#777777] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.booking.emailPlaceholder}
                      className="w-full pl-9 pr-3 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.languagePref}
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00]"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी (Hindi)</option>
                    <option value="Hinglish">Hinglish</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.date} *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#777777] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded bg-[#101010] border text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00] ${
                        errors.date ? 'border-red-500' : 'border-[#343434]'
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.time}
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00]"
                  >
                    <option value="earlyMorning">{t.booking.slots.earlyMorning}</option>
                    <option value="midMorning">{t.booking.slots.midMorning}</option>
                    <option value="afternoon">{t.booking.slots.afternoon}</option>
                    <option value="evening">{t.booking.slots.evening}</option>
                    <option value="night">{t.booking.slots.night}</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Goal & Program */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.goal}
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00]"
                  >
                    <option value="strength">{t.booking.goals.strength}</option>
                    <option value="muscle">{t.booking.goals.muscle}</option>
                    <option value="fatloss">{t.booking.goals.fatloss}</option>
                    <option value="conditioning">{t.booking.goals.conditioning}</option>
                    <option value="beginner">{t.booking.goals.beginner}</option>
                    <option value="general">{t.booking.goals.general}</option>
                    <option value="other">{t.booking.goals.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.booking.program}
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00]"
                  >
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.slug}>
                        {p.tag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional message */}
              <div>
                <label className="block text-xs font-semibold text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                  {t.booking.message}
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.booking.messagePlaceholder}
                  className="w-full px-3 py-2 rounded bg-[#101010] border border-[#343434] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C8FF00] resize-none"
                />
              </div>

              {/* Consent checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-[#343434] bg-[#101010] text-[#C8FF00] focus:ring-0"
                  />
                  <span className="text-xs text-[#9a9a9a] leading-tight select-none">
                    {t.booking.consent}
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-400 mt-1">{errors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50 shadow-md shadow-[#C8FF00]/15"
              >
                <span>{isSubmitting ? t.booking.submitting : t.booking.submit}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#707070] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span>Zero spam guarantee · Fictional demonstration flow</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
