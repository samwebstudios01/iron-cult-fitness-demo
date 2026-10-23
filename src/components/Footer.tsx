import React from 'react';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { GYM_CONFIG, PROGRAMS, MEMBERSHIP_PLANS } from '../data/gymData';
import { Dumbbell, MapPin, Phone, Mail, Clock, Globe, Instagram, Youtube, Facebook, Twitter, ArrowUp, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0b] border-t border-[#262626] text-[#B6B6B6] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#181818] border border-[#343434] flex items-center justify-center text-[#C8FF00]">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-white uppercase">
                IRON CULT <span className="text-[#C8FF00]">FITNESS</span>
              </span>
            </div>

            <p className="text-xs text-[#C8FF00] font-semibold tracking-wider uppercase">
              "{t.footer.tagline}"
            </p>

            <p className="text-xs text-[#8e8e8e] leading-relaxed">
              {t.footer.aboutSnippet}
            </p>

            {/* Social Media Links (Editable Placeholders) */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="#/contact"
                aria-label="Instagram profile"
                className="w-8 h-8 rounded bg-[#181818] border border-[#343434] hover:border-[#C8FF00] hover:text-[#C8FF00] flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#/contact"
                aria-label="YouTube channel"
                className="w-8 h-8 rounded bg-[#181818] border border-[#343434] hover:border-[#C8FF00] hover:text-[#C8FF00] flex items-center justify-center text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#/contact"
                aria-label="Facebook page"
                className="w-8 h-8 rounded bg-[#181818] border border-[#343434] hover:border-[#C8FF00] hover:text-[#C8FF00] flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#/contact"
                aria-label="Twitter X profile"
                className="w-8 h-8 rounded bg-[#181818] border border-[#343434] hover:border-[#C8FF00] hover:text-[#C8FF00] flex items-center justify-center text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links & Disciplines */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.programs}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('trainers')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.trainers}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('membership')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.membership}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('gallery')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Membership Plans */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.programsTitle} & {t.footer.membershipTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {PROGRAMS.slice(0, 4).map(p => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => navigate('program-detail', p.slug)}
                    className="hover:text-[#C8FF00] transition-colors text-left"
                  >
                    {p.tag}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-[#222222]">
                <button
                  type="button"
                  onClick={() => navigate('membership')}
                  className="hover:text-[#C8FF00] transition-colors text-left text-white font-medium"
                >
                  Starter (₹999) · Transform (₹1,799) · Elite (₹2,999)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location, Hours & Language Switcher */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-2 text-xs text-[#9a9a9a]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.location.address}, {GYM_CONFIG.location.city} ({GYM_CONFIG.location.pincode})</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <a href={`tel:${GYM_CONFIG.contact.phoneRaw}`} className="hover:text-white font-mono">
                  {GYM_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8FF00] shrink-0" />
                <span>Mon-Sat: 5AM-10PM · Sun: 7AM-12PM</span>
              </div>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-3 border-t border-[#222222]">
              <span className="text-[11px] uppercase tracking-wider text-[#707070] font-semibold block mb-1.5">
                Switch Language / भाषा
              </span>
              <div className="flex items-center gap-1.5">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                      language === l.code
                        ? 'bg-[#C8FF00] text-[#101010] border-[#C8FF00] font-bold'
                        : 'bg-[#181818] text-[#8e8e8e] border-[#343434] hover:text-white'
                    }`}
                  >
                    {l.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Banner (Mandatory Compliance) */}
        <div className="p-4 rounded bg-[#141414] border border-[#2b2b2b] text-xs text-[#8a8a8a] flex items-start gap-3 mb-8">
          <AlertCircle className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Demonstration Notice: </strong>
            {t.footer.demoDisclaimer}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707070]">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => navigate('privacy')}
              className="hover:text-white transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => navigate('terms')}
              className="hover:text-white transition-colors"
            >
              {t.footer.termsConditions}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#C8FF00] transition-colors flex items-center gap-1 font-semibold"
            >
              <span>{t.common.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
