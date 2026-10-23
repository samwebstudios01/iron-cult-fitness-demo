import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GYM_CONFIG } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    // Indian phone number regex
    const phoneClean = formData.phone.replace(/[\s\-]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneClean)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number (+91)';
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

    // Simulate demo submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = encodeURIComponent(
      `Hi IRON CULT FITNESS! I would like to enquire about memberships and facility timings in Vaishali Nagar, Jaipur.`
    );
    return `https://wa.me/${GYM_CONFIG.contact.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#101010] border-t border-[#343434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#C8FF00] uppercase mb-2">
            {t.contact.eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F7F7F7] mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-base text-[#B6B6B6]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Grid: Location & Contact Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Info & Map Placeholder */}
          <div className="lg:col-span-6 space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="p-5 rounded-lg bg-[#181818] border border-[#343434]">
                <div className="flex items-center gap-2.5 text-[#C8FF00] mb-2">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {t.contact.addressLabel}
                  </span>
                </div>
                <p className="text-sm text-[#D1D1D1] leading-relaxed">
                  {GYM_CONFIG.location.address}<br />
                  {GYM_CONFIG.location.city}, {GYM_CONFIG.location.state} {GYM_CONFIG.location.pincode}
                </p>
                <div className="mt-2 text-[11px] text-[#707070]">
                  {GYM_CONFIG.location.landmark}
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-lg bg-[#181818] border border-[#343434]">
                <div className="flex items-center gap-2.5 text-[#C8FF00] mb-2">
                  <Clock className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {t.contact.hoursLabel}
                  </span>
                </div>
                <p className="text-xs text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white">Mon – Sat:</strong> 5:00 AM – 10:00 PM<br />
                  <strong className="text-white">Sunday:</strong> 7:00 AM – 12:00 PM
                </p>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-lg bg-[#181818] border border-[#343434]">
                <div className="flex items-center gap-2.5 text-[#C8FF00] mb-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {t.contact.phoneLabel}
                  </span>
                </div>
                <a
                  href={`tel:${GYM_CONFIG.contact.phoneRaw}`}
                  className="text-sm text-white hover:text-[#C8FF00] transition-colors font-mono"
                >
                  {GYM_CONFIG.contact.phone}
                </a>
                <p className="text-[11px] text-[#707070] mt-1">
                  Direct reception line
                </p>
              </div>

              {/* Email */}
              <div className="p-5 rounded-lg bg-[#181818] border border-[#343434]">
                <div className="flex items-center gap-2.5 text-[#C8FF00] mb-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {t.contact.emailLabel}
                  </span>
                </div>
                <a
                  href={`mailto:${GYM_CONFIG.contact.email}`}
                  className="text-sm text-white hover:text-[#C8FF00] transition-colors break-all"
                >
                  {GYM_CONFIG.contact.email}
                </a>
                <p className="text-[11px] text-[#707070] mt-1">
                  Client support & enquiries
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-[#101010] text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappCta}</span>
              </a>

              <a
                href={`tel:${GYM_CONFIG.contact.phoneRaw}`}
                className="px-6 py-3 bg-[#181818] hover:bg-[#222222] text-white border border-[#343434] text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C8FF00]" />
                <span>{t.contact.callCta}</span>
              </a>

              <a
                href="https://maps.google.com/?q=Vaishali+Nagar,+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#181818] hover:bg-[#222222] text-[#B6B6B6] hover:text-white border border-[#343434] text-xs font-medium uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span>{t.contact.getDirections}</span>
              </a>
            </div>

            {/* Interactive Demo Map Locator Container */}
            <div className="rounded-lg overflow-hidden border border-[#343434] bg-[#181818] p-5">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-display font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C8FF00]" />
                  Vaishali Nagar, Jaipur Facility
                </span>
                <span className="text-[10px] font-mono bg-[#242424] text-[#C8FF00] px-2 py-0.5 rounded">
                  DEMO LOCATION
                </span>
              </div>

              {/* Styled Map Representation */}
              <div className="relative aspect-[16/7] rounded bg-[#121212] border border-[#2b2b2b] overflow-hidden flex items-center justify-center">
                {/* Stylized grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(#C8FF00 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                <div className="relative text-center p-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#C8FF00] text-[#101010] flex items-center justify-center mx-auto mb-2 shadow-lg shadow-[#C8FF00]/20 animate-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-display text-sm font-bold uppercase text-white">
                    IRON CULT FITNESS
                  </p>
                  <p className="text-xs text-[#8e8e8e]">
                    21 Fitness Avenue, Vaishali Nagar, Jaipur (302021)
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-[#6e6e6e] mt-2 italic">
                * Note: Demonstration location. In a production launch, this embeds the gym's verified Google Maps location.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-6 bg-[#181818] border border-[#343434] rounded-lg p-6 sm:p-8 shadow-xl">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#B6B6B6] mb-6">
              {t.contact.formSubtitle}
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded bg-[#202020] border border-[#C8FF00]/40 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#C8FF00] mx-auto mb-3" />
                <h4 className="font-display text-lg font-bold uppercase text-white mb-1">
                  Enquiry Recorded
                </h4>
                <p className="text-xs text-[#B6B6B6] mb-4">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry details have been captured for this demonstration.
                </p>
                <div className="p-3 bg-[#181818] rounded text-left text-xs space-y-1 mb-4 text-[#8e8e8e]">
                  <p><strong className="text-white">Mobile:</strong> {formData.phone}</p>
                  {formData.email && <p><strong className="text-white">Email:</strong> {formData.email}</p>}
                  {formData.message && <p><strong className="text-white">Query:</strong> {formData.message}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#101010] bg-[#C8FF00] rounded hover:bg-[#d6ff33]"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Arun Sharma"
                    className={`w-full px-3.5 py-2.5 rounded bg-[#101010] border text-white text-sm focus:outline-none focus:border-[#C8FF00] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-[#343434]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.contact.phoneInputLabel} *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded bg-[#101010] border text-white text-sm focus:outline-none focus:border-[#C8FF00] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-[#343434]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.contact.emailInputLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="arun@example.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-sm focus:outline-none focus:border-[#C8FF00] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#B6B6B6] uppercase tracking-wider mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I am interested in morning workout slots and personal coaching packages..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#101010] border border-[#343434] text-white text-sm focus:outline-none focus:border-[#C8FF00] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-[#C8FF00] hover:bg-[#d6ff33] text-[#101010] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : t.contact.sendBtn}</span>
                </button>

                <p className="text-[11px] text-[#707070] text-center">
                  {t.contact.demoNotice}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
