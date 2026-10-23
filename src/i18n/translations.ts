/**
 * Internationalization dictionaries for IRON CULT FITNESS.
 * Supported languages:
 * 1. English (en)
 * 2. Hindi (hi - हिन्दी)
 * 3. Hinglish (hi-Latn - Romanized Hindi)
 */

export type Language = 'en' | 'hi' | 'hi-Latn';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'hi-Latn', name: 'Hinglish', nativeName: 'Hinglish' }
];

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      programs: "Programs",
      trainers: "Trainers",
      membership: "Membership",
      gallery: "Gallery",
      contact: "Contact",
      bookTrial: "BOOK A FREE TRIAL"
    },
    hero: {
      eyebrow: "PREMIUM FITNESS • VAISHALI NAGAR, JAIPUR",
      headlinePrefix: "YOUR NEXT",
      headlineAccent: "LEVEL STARTS",
      headlineSuffix: "HERE.",
      description: "More than a gym. A place to build strength, develop discipline, and become the strongest version of yourself.",
      primaryCta: "BOOK YOUR FREE TRIAL",
      secondaryCta: "EXPLORE MEMBERSHIPS",
      promoBadge: "YOUR FIRST STEP STARTS WITH A FREE SESSION.",
      trust1: "Expert-led training",
      trust2: "Strength & conditioning",
      trust3: "Beginner-friendly environment",
      scrollHint: "Scroll to explore"
    },
    strip: {
      item1: "TRAIN WITH PURPOSE",
      item2: "MOVE WITH CONFIDENCE",
      item3: "GET STRONGER EVERY DAY"
    },
    about: {
      eyebrow: "MORE THAN A WORKOUT",
      heading: "BUILT FOR YOUR STRONGEST SELF.",
      p1: "Whether you're stepping into a gym for the first time or working toward your next personal best, IRON CULT FITNESS gives you a space to train with purpose.",
      p2: "Our approach combines quality equipment, structured training, and an environment that keeps you moving forward without intimidation.",
      feat1Title: "TRAIN WITH PURPOSE",
      feat1Desc: "Structured workouts designed around your fitness goals and current baseline.",
      feat2Title: "FIND YOUR COMMUNITY",
      feat2Desc: "A welcoming, respectful environment for beginners and experienced athletes alike.",
      feat3Title: "PROGRESS WITH CONFIDENCE",
      feat3Desc: "Coaching support to help you build consistency, prevent injuries, and improve technique.",
      discoverBtn: "DISCOVER OUR APPROACH"
    },
    programs: {
      eyebrow: "STRUCTURED DISCIPLINES",
      heading: "FITNESS PROGRAMS DESIGNED FOR REAL PROGRESS",
      subtitle: "Every program at Iron Cult is rooted in progressive biomechanics, sustainable progression, and certified coaching.",
      learnMore: "LEARN MORE",
      viewDetails: "View Program Syllabus",
      bookForThis: "Book Free Trial for This Program",
      intensityLabel: "Intensity",
      durationLabel: "Duration",
      suitableFor: "Suitable For",
      whatInvolves: "What a Session Involves",
      weeklySchedule: "Example Weekly Split",
      strength: {
        title: "Strength Training",
        desc: "Build absolute strength, improve barbell technique, and progress systematically with structured resistance training.",
        audience: "Lifters seeking progressive overload, barbell mastery, and measurable physical resilience."
      },
      hypertrophy: {
        title: "Muscle Building",
        desc: "Train consistently with a focus on progressive volume, biomechanical tension, and restorative muscle recovery.",
        audience: "Individuals focused on muscle hypertrophy, athletic aesthetics, and lean mass development."
      },
      fatloss: {
        title: "Fat-Loss Training",
        desc: "Combine structured resistance workouts and sustainable exercise habits to support long-term body composition goals.",
        audience: "Anyone seeking sustainable body recomposition without dangerous crash diets."
      },
      pt: {
        title: "Personal Training",
        desc: "Receive individualized 1-on-1 coaching, real-time exercise form cues, and personalized nutrition guidance.",
        audience: "Those wanting dedicated accountability, technique correction, or custom injury rehabilitation."
      },
      functional: {
        title: "Functional Fitness",
        desc: "Improve multi-planar movement, coordination, rotational power, and everyday physical durability.",
        audience: "Athletes, runners, and desk workers seeking athletic mobility and full-body durability."
      },
      beginner: {
        title: "Beginner Fitness",
        desc: "Learn fundamental movement patterns, understand gym equipment, and build confidence at your own comfortable pace.",
        audience: "First-time gym goers looking for an encouraging, zero-judgment training space."
      }
    },
    trainers: {
      eyebrow: "CERTIFIED COACHING",
      heading: "MEET THE IRON CULT COACHES",
      subtitle: "Experienced, patient, and dedicated coaches committed to your safety, technique, and sustainable growth.",
      disclaimerNote: "Illustrative demonstration profiles. Certified credentials and bios should be verified before launch.",
      viewProfile: "VIEW PROFILE",
      yearsExp: "Years Experience",
      specialties: "Core Specialties",
      philosophy: "Coaching Philosophy",
      bookConsultation: "Book Consultation with Coach",
      arjun: {
        role: "Strength & Conditioning Coach",
        bio: "Arjun specializes in barbell mechanics, periodized powerlifting, and progressive athletic development with 6 years of coaching athletes.",
        philosophy: "Technique precedes load. Master the movement pattern first, and strength will inevitably follow."
      },
      priya: {
        role: "Personal Fitness Coach",
        bio: "Priya focuses on beginner adaptations, habit adherence, and sustainable lifestyle transformations with 4 years of client success.",
        philosophy: "Fitness should empower your daily life, not exhaust it. Consistency over intensity builds lasting results."
      },
      rohan: {
        role: "Functional Training Coach",
        bio: "Rohan brings 5 years of experience integrating turf athletic conditioning, kettlebells, and mobility protocols to build bulletproof joints.",
        philosophy: "True fitness is movement without restriction. Train your body to move in all planes with confidence."
      }
    },
    memberships: {
      eyebrow: "MEMBERSHIP PLANS",
      heading: "TRANSPARENT, HONEST PRICING",
      subtitle: "No hidden registration fees. No deceptive locking contracts. Choose the plan that aligns with your fitness goals.",
      monthlyBilling: "Monthly",
      annualBilling: "Annual Billing",
      annualDiscountBadge: "Save 15% with Annual",
      perMonth: "/ month",
      perYear: "/ year",
      billedAnnually: "Billed annually as ₹",
      popularBadge: "MOST POPULAR",
      starter: {
        desc: "Essential access for independent lifters seeking top-quality strength and resistance equipment."
      },
      transform: {
        desc: "Complete access with fitness assessment and guided group workshops for accelerated progress."
      },
      elite: {
        desc: "Full VIP tier including 1-on-1 coach consultations, custom programming, and priority facility perks."
      },
      ctaStarter: "CHOOSE STARTER",
      ctaTransform: "CHOOSE TRANSFORM",
      ctaElite: "CHOOSE ELITE",
      tableHeading: "DETAILED FEATURE COMPARISON",
      tableDisclaimer: "Demo pricing for illustrative purposes only. Actual prices and inclusions must be confirmed by the gym owner prior to commercial operation.",
      colFeature: "Plan Feature",
      gymAccessLabel: "Facility Access Hours",
      equipmentLabel: "Equipment Zones",
      assessmentLabel: "Fitness & Posture Assessment",
      groupSessionsLabel: "Group Workshops",
      ptConsultLabel: "Personal Coach Consultation",
      progressReviewLabel: "Progress Reviews",
      lockerLabel: "Locker Privileges",
      guestPassesLabel: "Guest Passes / Month"
    },
    progress: {
      eyebrow: "OUR METHODOLOGY",
      heading: "PROGRESS IS BUILT, NOT WISHED FOR.",
      subtitle: "We believe in sustainable habits and structured training over short-term gimmicks and false promises.",
      step1: {
        title: "SET YOUR GOAL",
        desc: "Understand your priorities, assess your starting biomechanics, and choose an appropriate starting point with coach guidance."
      },
      step2: {
        title: "TRAIN WITH A PLAN",
        desc: "Build consistency with structured workouts, intentional exercise selection, and systematic progressive overload."
      },
      step3: {
        title: "REVIEW AND ADJUST",
        desc: "Track your strength output, monitor recovery metrics, and adjust programming as your body adapts and advances."
      }
    },
    gallery: {
      eyebrow: "FACILITY SHOWCASE",
      heading: "BUILT FOR SERIOUS TRAINING",
      subtitle: "Explore our Vaishali Nagar facility — calibrated barbells, high-grade turf, and spacious lifting stations.",
      all: "All Areas",
      strength: "Strength & Barbells",
      functional: "Turf & Functional",
      coaching: "Coaching Sessions",
      facility: "Gym Interior",
      viewAll: "VIEW ALL PHOTOS",
      lightboxHint: "Use left/right arrows or swipe to navigate"
    },
    testimonials: {
      eyebrow: "MEMBER VOICES",
      heading: "WHAT OUR MEMBERS SAY",
      demoBadge: "ILLUSTRATIVE DEMO TESTIMONIALS — REPLACE WITH VERIFIED CUSTOMER FEEDBACK.",
      disclaimer: "These quotes reflect representative member experiences for demonstration purposes and do not represent verified commercial endorsements."
    },
    faqs: {
      eyebrow: "COMMON QUESTIONS",
      heading: "FREQUENTLY ASKED QUESTIONS",
      subtitle: "Got questions before starting? Here are answers to common questions about training at Iron Cult.",
      q1: "Is this gym suitable for beginners?",
      a1: "Yes, absolutely. We pride ourselves on a welcoming, zero-intimidation environment. Our coaches will walk you through equipment usage, movement technique, and proper warmups on day one.",
      q2: "What should I bring for my first workout?",
      a2: "Bring comfortable athletic wear, clean indoor training shoes, a personal workout towel, and a reusable water bottle. Filtered water and clean locker facilities are provided.",
      q3: "Do you offer personal training?",
      a3: "Yes. We offer certified 1-on-1 personal training packages as well as personal consultation included in our Elite membership tier. All trainers have verified coaching experience.",
      q4: "Which membership is right for me?",
      a4: "If you have prior gym experience and just need high-end equipment, Starter is ideal. If you want fitness assessments and group sessions, Transform is our most popular choice. If you desire direct coach programming, choose Elite.",
      q5: "Can I book a free trial session?",
      a5: "Yes! Every prospective member is invited to book a complimentary 60-minute trial session to tour the gym, experience our equipment, and receive an initial movement check.",
      q6: "Are group training sessions available?",
      a6: "Yes, our Transform and Elite memberships include scheduled strength technique workshops, metabolic conditioning circuits, and functional mobility clinics.",
      q7: "How can I contact the gym?",
      a7: "You can reach us directly via WhatsApp (+91 98765 43210), phone call, or email at hello@ironcultdemo.example. We are located in Vaishali Nagar, Jaipur.",
      q8: "What are the opening hours?",
      a8: "Monday through Saturday: 5:00 AM to 10:00 PM. Sunday: 7:00 AM to 12:00 PM (noon). Early mornings and late evenings allow flexible training around your work schedule."
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      heading: "VISIT OUR VAISHALI NAGAR GYM",
      subtitle: "Drop in for a workout or reach out to our team. We're here to help you get started on your fitness journey.",
      addressLabel: "Demonstration Address",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      hoursLabel: "Opening Hours",
      whatsappCta: "CHAT ON WHATSAPP",
      callCta: "CALL NOW",
      getDirections: "GET DIRECTIONS",
      formTitle: "Send an Enquiry",
      formSubtitle: "Have questions about memberships or facilities? Send us a message.",
      nameLabel: "Your Name",
      phoneInputLabel: "Mobile Number",
      emailInputLabel: "Email Address (Optional)",
      messageLabel: "Message / Question",
      sendBtn: "SEND ENQUIRY",
      demoNotice: "Demonstration Form: Submissions are stored locally for demonstration purposes without transmitting real email."
    },
    booking: {
      title: "BOOK YOUR FREE TRIAL SESSION",
      subtitle: "Experience the Iron Cult training standard with zero commitment.",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      phone: "Mobile Number",
      phonePlaceholder: "+91 98765 43210",
      email: "Email Address (Optional)",
      emailPlaceholder: "name@example.com",
      date: "Preferred Date",
      time: "Preferred Time Slot",
      goal: "Primary Fitness Goal",
      program: "Preferred Program",
      languagePref: "Preferred Language",
      message: "Additional Message or Injuries (Optional)",
      messagePlaceholder: "Tell us about your fitness history, specific goals, or injuries...",
      consent: "I agree to be contacted via WhatsApp/Phone regarding this free trial demonstration request.",
      submit: "CONFIRM DEMO TRIAL BOOKING",
      submitting: "Processing...",
      errors: {
        nameRequired: "Please enter your name",
        phoneRequired: "Please enter a valid 10-digit Indian mobile number (+91)",
        dateRequired: "Please select a valid upcoming date",
        timeRequired: "Please select a preferred time slot",
        consentRequired: "Please accept the consent checkbox to proceed"
      },
      goals: {
        muscle: "Build Muscle (Hypertrophy)",
        fatloss: "Lose Body Fat & Recomposition",
        general: "Improve General Fitness & Health",
        strength: "Increase Raw Strength & Power",
        conditioning: "Improve Athletic Conditioning & Stamina",
        beginner: "Get Started as a Beginner",
        other: "Other Specific Goal"
      },
      slots: {
        earlyMorning: "Early Morning (6:00 AM – 8:00 AM)",
        midMorning: "Mid Morning (8:00 AM – 10:00 AM)",
        afternoon: "Afternoon (12:00 PM – 2:00 PM)",
        evening: "Evening (5:00 PM – 7:00 PM)",
        night: "Night (7:00 PM – 9:00 PM)"
      },
      success: {
        title: "TRIAL BOOKING REQUEST RECORDED",
        badge: "DEMONSTRATION SUBMISSION COMPLETE",
        desc: "Thank you for exploring this demo! Your fictional trial request has been generated with the details below.",
        dateLabel: "Selected Date",
        timeLabel: "Selected Slot",
        programLabel: "Program",
        goalLabel: "Primary Goal",
        nameLabel: "Name",
        phoneLabel: "Phone",
        whatsappPrompt: "Follow up with pre-filled WhatsApp message:",
        whatsappBtn: "OPEN WHATSAPP MESSAGE",
        closeBtn: "CLOSE WINDOW",
        demoDisclaimer: "Note: In a commercial deployment, this form triggers an automated SMS/WhatsApp booking confirmation and CRM lead notification."
      }
    },
    footer: {
      tagline: "BUILD STRENGTH. BECOME UNSTOPPABLE.",
      aboutSnippet: "Premium fitness center and strength-training gym located in Vaishali Nagar, Jaipur. Dedicated to purposeful training and community support.",
      quickLinks: "Quick Navigation",
      programsTitle: "Disciplines",
      membershipTitle: "Plans",
      contactTitle: "Location & Hours",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms and Conditions",
      copyright: "IRON CULT FITNESS DEMO. All Rights Reserved.",
      demoDisclaimer: "This website is a design and functional prototype presented for gym client review. All business information, pricing, trainer credentials, and testimonials are illustrative demo content."
    },
    common: {
      demoNotice: "DEMO PREVIEW",
      demoSubtitle: "Fictional gym concept for Vaishali Nagar, Jaipur",
      learnMore: "Learn More",
      viewAll: "View All",
      close: "Close",
      backToTop: "Back to top",
      popular: "Most Popular",
      recommended: "Recommended"
    }
  },

  // Hindi (हिन्दी)
  hi: {
    nav: {
      home: "होम",
      about: "जिम के बारे में",
      programs: "प्रोग्राम",
      trainers: "ट्रेनर्स",
      membership: "मेंबरशिप",
      gallery: "गैलरी",
      contact: "संपर्क",
      bookTrial: "मुफ़्त ट्रायल बुक करें"
    },
    hero: {
      eyebrow: "प्रीमियम फिटनेस • वैशाली नगर, जयपुर",
      headlinePrefix: "आपका अगला",
      headlineAccent: "स्तर यहाँ से",
      headlineSuffix: "शुरू होता है।",
      description: "सिर्फ एक जिम नहीं। ताकत बनाने, अनुशासन विकसित करने और अपना सबसे मजबूत रूप पाने का स्थान।",
      primaryCta: "मुफ़्त ट्रायल बुक करें",
      secondaryCta: "मेंबरशिप प्लान देखें",
      promoBadge: "आपका पहला कदम एक मुफ़्त सेशन से शुरू होता है।",
      trust1: "अनुभवी कोच का मार्गदर्शन",
      trust2: "स्ट्रेंथ व कंडीशनिंग",
      trust3: "शुरुआती लोगों के लिए अनुकूल",
      scrollHint: "नीचे स्क्रॉल करें"
    },
    strip: {
      item1: "उद्देश्य के साथ अभ्यास करें",
      item2: "आत्मविश्वास से आगे बढ़ें",
      item3: "हर दिन और मजबूत बनें"
    },
    about: {
      eyebrow: "सिर्फ कसरत से कहीं अधिक",
      heading: "आपके सबसे मजबूत रूप के लिए निर्मित।",
      p1: "चाहे आप पहली बार जिम में कदम रख रहे हों या अपने व्यक्तिगत रिकॉर्ड को तोड़ने की तैयारी कर रहे हों, आयरन कल्ट फिटनेस आपको उद्देश्यपूर्ण प्रशिक्षण का माहौल देता है।",
      p2: "हमारा दृष्टिकोण उच्च गुणवत्ता वाले उपकरण, व्यवस्थित ट्रेनिंग और बिना किसी डर के आगे बढ़ने वाले माहौल को जोड़ता है।",
      feat1Title: "उद्देश्य के साथ अभ्यास",
      feat1Desc: "आपके फिटनेस लक्ष्यों और वर्तमान स्तर के अनुसार तैयार व्यवस्थित वर्कआउट।",
      feat2Title: "एक सकारात्मक समुदाय",
      feat2Desc: "शुरुआती और अनुभवी दोनों एथलीटों के लिए एक स्वागतयोग्य और सम्मानजनक वातावरण।",
      feat3Title: "आत्मविश्वास से प्रगति",
      feat3Desc: "नियमितता बनाए रखने और तकनीक सुधारने के लिए प्रमाणित कोच का सहयोग।",
      discoverBtn: "हमारा दृष्टिकोण जानें"
    },
    programs: {
      eyebrow: "व्यवस्थित विधाएं",
      heading: "सच्ची प्रगति के लिए डिज़ाइन किए गए प्रोग्राम",
      subtitle: "आयरन कल्ट का प्रत्येक प्रोग्राम वैज्ञानिक बायोमैकेनिक्स और प्रमाणित कोचिंग पर आधारित है।",
      learnMore: "विस्तार से जानें",
      viewDetails: "प्रोग्राम विवरण देखें",
      bookForThis: "इस प्रोग्राम के लिए मुफ़्त ट्रायल लें",
      intensityLabel: "तीव्रता",
      durationLabel: "अवधि",
      suitableFor: "किसके लिए उपयुक्त",
      whatInvolves: "एक सेशन में क्या शामिल है",
      weeklySchedule: "साप्ताहिक रूपरेखा",
      strength: {
        title: "स्ट्रेंथ ट्रेनिंग",
        desc: "ताकत बढ़ाएं, बारबेल तकनीक सुधारें और व्यवस्थित रेसिस्टेंस ट्रेनिंग के साथ निरंतर आगे बढ़ें।",
        audience: "बारबेल तकनीक में महारत और मापने योग्य शारीरिक ताकत चाहने वाले लोग।"
      },
      hypertrophy: {
        title: "मसल बिल्डिंग",
        desc: "प्रोग्रेसिव ओवरलोड, सटीक एक्सरसाइज तकनीक और बेहतर रिकवरी पर ध्यान देते हुए लगातार ट्रेनिंग करें।",
        audience: "मांसपेशियों का आकार और सुडौल शारीरिक बनावट चाहने वाले व्यक्ति।"
      },
      fatloss: {
        title: "फैट-लॉस ट्रेनिंग",
        desc: "लंबे समय तक स्थायी बॉडी कंपोजिशन के लिए व्यवस्थित वर्कआउट और टिकाऊ आदतों का संयोजन।",
        audience: "बिना नुकसानदायक क्रैश डाइट के स्वस्थ और सुडौल शरीर चाहने वाले लोग।"
      },
      pt: {
        title: "पर्सनल ट्रेनिंग",
        desc: "व्यक्तिगत 1-ऑन-1 कोचिंग, रीयल-टाइम तकनीक सुधार और अनुकूलित डाइट मार्गदर्शन प्राप्त करें।",
        audience: "जो व्यक्तिगत जवाबदेही और कस्टम रिहैब मार्गदर्शन चाहते हैं।"
      },
      functional: {
        title: "फंक्शनल फिटनेस",
        desc: "शारीरिक गतिशीलता, समन्वय, रोटेशनल पावर और दैनिक जीवन की मजबूती में सुधार करें।",
        audience: "एथलीट, धावक और डेस्क जॉब करने वाले जो जोड़ों की मजबूती चाहते हैं।"
      },
      beginner: {
        title: "बिगिनर फिटनेस",
        desc: "बुनियादी मूवमेंट सीखें, जिम उपकरणों को समझें और अपनी गति से आत्मविश्वास बढ़ाएं।",
        audience: "पहली बार जिम आने वाले जो सुरक्षित और उत्साहवर्धक माहौल चाहते हैं।"
      }
    },
    trainers: {
      eyebrow: "प्रमाणित कोचिंग",
      heading: "आयरन कल्ट के कोच से मिलें",
      subtitle: "अनुभवी और धैर्यवान कोच जो आपकी सुरक्षा, तकनीक और सतत प्रगति के प्रति समर्पित हैं।",
      disclaimerNote: "यह डेमो प्रोफाइल है। वास्तविक संचालन से पहले क्रेडेंशियल सत्यापित किए जाने चाहिए।",
      viewProfile: "प्रोफाइल देखें",
      yearsExp: "वर्षों का अनुभव",
      specialties: "प्रमुख विशेषज्ञता",
      philosophy: "ट्रेनिंग दर्शन",
      bookConsultation: "कोच के साथ कंसल्टेशन बुक करें",
      arjun: {
        role: "स्ट्रेंथ व कंडीशनिंग कोच",
        bio: "अर्जुन बारबेल मैकेनिक्स, पीरियडाइज्ड पावरलिफ्टिंग और 6 वर्षों के कोचिंग अनुभव के साथ एथलेटिक विकास में माहिर हैं।",
        philosophy: "वजन उठाने से पहले तकनीक सीखें। सही मूवमेंट से ही असली ताकत आती है।"
      },
      priya: {
        role: "पर्सनल फिटनेस कोच",
        bio: "प्रिया शुरुआती फिटनेस साधकों के लिए आदत निर्माण और टिकाऊ जीवनशैली बदलाव में 4 वर्षों से सफल मार्गदर्शन दे रही हैं।",
        philosophy: "फिटनेस आपको ऊर्जा देने के लिए है, थकाने के लिए नहीं। नियमितता ही सबसे बड़ा परिणाम देती है।"
      },
      rohan: {
        role: "फंक्शनल ट्रेनिंग कोच",
        bio: "रोहन टर्फ कंडीशनिंग, केतलबेल और मोबिलिटी ड्रिल्स के जरिए जोड़ों को मजबूत बनाने में 5 वर्षों का अनुभव रखते हैं।",
        philosophy: "सच्ची फिटनेस बिना दर्द के हिलना-डुलना है। अपने शरीर को हर दिशा में गतिमान बनाएं।"
      }
    },
    memberships: {
      eyebrow: "मेंबरशिप योजनाएं",
      heading: "पारदर्शी और स्पष्ट शुल्क",
      subtitle: "कोई छुपे हुए शुल्क नहीं। कोई भ्रामक लॉक-इन नहीं। अपने लक्ष्यों के अनुसार सही प्लान चुनें।",
      monthlyBilling: "मासिक",
      annualBilling: "वार्षिक बिलिंग",
      annualDiscountBadge: "वार्षिक पर 15% छूट",
      perMonth: "/ माह",
      perYear: "/ वर्ष",
      billedAnnually: "वार्षिक कुल: ₹",
      popularBadge: "सर्वाधिक लोकप्रिय",
      starter: {
        desc: "स्वतंत्र रूप से प्रीमियम स्ट्रेंथ व रेसिस्टेंस उपकरणों पर अभ्यास करने के लिए आवश्यक एक्सेस।"
      },
      transform: {
        desc: "फिटनेस असेसमेंट और गाइडेड ग्रुप सेशंस के साथ तेज प्रगति के लिए संपूर्ण जिम एक्सेस।"
      },
      elite: {
        desc: "1-ऑन-1 कोच कंसल्टेशन, कस्टम प्रोग्रामिंग और प्राथमिक सुविधाओं के साथ संपूर्ण वीआईपी एक्सेस।"
      },
      ctaStarter: "स्टार्टर चुनें",
      ctaTransform: "ट्रांसफॉर्म चुनें",
      ctaElite: "एलीट चुनें",
      tableHeading: "सुविधाओं की तुलना",
      tableDisclaimer: "डेमो मूल्य केवल प्रदर्शन के लिए हैं। वास्तविक मूल्य और नियम जिम मालिक द्वारा निर्धारित किए जाएंगे।",
      colFeature: "सुविधा",
      gymAccessLabel: "जिम प्रवेश समय",
      equipmentLabel: "उपकरण क्षेत्र",
      assessmentLabel: "फिटनेस और पोस्चर जांच",
      groupSessionsLabel: "ग्रुप वर्कशॉप्स",
      ptConsultLabel: "पर्सनल कोच कंसल्टेशन",
      progressReviewLabel: "प्रगति समीक्षा",
      lockerLabel: "लॉकर सुविधा",
      guestPassesLabel: "गेस्ट पास / माह"
    },
    progress: {
      eyebrow: "हमारी कार्यप्रणाली",
      heading: "प्रगति मेहनत से बनती है, केवल चाहने से नहीं।",
      subtitle: "हम अल्पकालिक शॉर्टकट और झूठे वादों के बजाय टिकाऊ आदतों और संरचित प्रशिक्षण में विश्वास करते हैं।",
      step1: {
        title: "लक्ष्य निर्धारित करें",
        desc: "अपनी प्राथमिकताओं को समझें, कोच के साथ अपनी शुरुआती स्थिति का आकलन करें और सही रास्ता चुनें।"
      },
      step2: {
        title: "योजना के साथ अभ्यास",
        desc: "व्यवस्थित वर्कआउट, सही एक्सरसाइज चयन और प्रोग्रेसिव ओवरलोड के साथ नियमितता बनाएं।"
      },
      step3: {
        title: "समीक्षा और सुधार",
        desc: "अपनी शक्ति और रिकवरी को ट्रैक करें और शरीर के अनुसार अपनी ट्रेनिंग योजना में बदलाव करें।"
      }
    },
    gallery: {
      eyebrow: "सुविधा प्रदर्शन",
      heading: "गंभीर प्रशिक्षण के लिए तैयार",
      subtitle: "वैशाली नगर स्थित हमारे जिम की झलक — कैलिब्रेटेड बारबेल, हाई-ग्रेड टर्फ और खुली जगह।",
      all: "सभी क्षेत्र",
      strength: "स्ट्रेंथ व बारबेल",
      functional: "टर्फ व फंक्शनल",
      coaching: "कोचिंग सेशंस",
      facility: "जिम इंटीरियर",
      viewAll: "सभी तस्वीरें देखें",
      lightboxHint: "तस्वीरें बदलने के लिए बाएँ/दाएँ तीर का उपयोग करें"
    },
    testimonials: {
      eyebrow: "सदस्यों के विचार",
      heading: "हमारे सदस्य क्या कहते हैं",
      demoBadge: "नमूना प्रशंसापत्र — वास्तविक ग्राहक प्रतिक्रिया से बदलें।",
      disclaimer: "यह सामग्री प्रदर्शन के उद्देश्य से बनाई गई है और वास्तविक व्यावसायिक अनुशंसा नहीं दर्शाती।"
    },
    faqs: {
      eyebrow: "सामान्य प्रश्न",
      heading: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "शुरू करने से पहले कोई प्रश्न? यहाँ हमारे जिम से जुड़े प्रमुख उत्तर दिए गए हैं।",
      q1: "क्या यह जिम शुरुआती लोगों के लिए उपयुक्त है?",
      a1: "हाँ, बिल्कुल। हम बिना किसी डर के स्वागतयोग्य माहौल देते हैं। पहले ही दिन हमारे कोच आपको उपकरणों के उपयोग और वार्मअप के बारे में विस्तार से बताएंगे।",
      q2: "पहले वर्कआउट के लिए क्या लाना चाहिए?",
      a2: "आरामदायक स्पोर्ट्स कपड़े, साफ इनडोर जूते, एक पर्सनल तौलिया और पानी की बोतल लाएं। स्वच्छ पेयजल और लॉकर की सुविधा उपलब्ध है।",
      q3: "क्या आप पर्सनल ट्रेनिंग प्रदान करते हैं?",
      a3: "हाँ, हम प्रमाणित 1-ऑन-1 पर्सनल ट्रेनिंग प्रदान करते हैं। एलीट मेंबरशिप में भी पर्सनल कंसल्टेशन शामिल है।",
      q4: "मेरे लिए कौन सा मेंबरशिप प्लान सही है?",
      a4: "यदि आपको पहले से अनुभव है, तो स्टार्टर सही है। फिटनेस जांच और ग्रुप सेशंस के लिए ट्रांसफॉर्म सबसे लोकप्रिय है। कोच की पर्सनल प्रोग्रामिंग के लिए एलीट चुनें।",
      q5: "क्या मैं मुफ़्त ट्रायल सेशन बुक कर सकता हूँ?",
      a5: "हाँ! प्रत्येक इच्छुक सदस्य को 60 मिनट का निःशुल्क ट्रायल सेशन मिलता है ताकि वे जिम का माहौल और उपकरण देख सकें।",
      q6: "क्या ग्रुप ट्रेनिंग उपलब्ध है?",
      a6: "हाँ, ट्रांसफॉर्म और एलीट प्लान्स में नियमित स्ट्रेंथ वर्कशॉप और कंडीशनिंग सेशंस शामिल हैं।",
      q7: "मैं जिम से कैसे संपर्क कर सकता हूँ?",
      a7: "आप हमें सीधे व्हाट्सएप (+91 98765 43210), फोन या ईमेल hello@ironcultdemo.example पर संपर्क कर सकते हैं।",
      q8: "जिम खुलने का समय क्या है?",
      a8: "सोमवार से शनिवार: सुबह 5:00 से रात 10:00 बजे तक। रविवार: सुबह 7:00 से दोपहर 12:00 बजे तक।"
    },
    contact: {
      eyebrow: "संपर्क करें",
      heading: "हमारे वैशाली नगर जिम आएं",
      subtitle: "वर्कआउट के लिए आएं या हमारी टीम से संपर्क करें। हम आपकी फिटनेस यात्रा शुरू कराने के लिए तैयार हैं।",
      addressLabel: "डेमो पता",
      phoneLabel: "फोन नंबर",
      emailLabel: "ईमेल पता",
      hoursLabel: "खुलने का समय",
      whatsappCta: "व्हाट्सएप पर चैट करें",
      callCta: "कॉल करें",
      getDirections: "रास्ता देखें",
      formTitle: "पूछताछ भेजें",
      formSubtitle: "मेंबरशिप या सुविधाओं के बारे में प्रश्न? हमें संदेश भेजें।",
      nameLabel: "आपका नाम",
      phoneInputLabel: "मोबाइल नंबर",
      emailInputLabel: "ईमेल (वैकल्पिक)",
      messageLabel: "संदेश / प्रश्न",
      sendBtn: "पूछताछ भेजें",
      demoNotice: "डेमो फॉर्म: डेटा केवल प्रदर्शन के लिए लोकली दर्ज किया जाता है।"
    },
    booking: {
      title: "मुफ़्त ट्रायल सेशन बुक करें",
      subtitle: "बिना किसी प्रतिबद्धता के आयरन कल्ट की ट्रेनिंग का अनुभव लें।",
      name: "पूरा नाम",
      namePlaceholder: "अपना पूरा नाम लिखें",
      phone: "मोबाइल नंबर",
      phonePlaceholder: "+91 98765 43210",
      email: "ईमेल पता (वैकल्पिक)",
      emailPlaceholder: "name@example.com",
      date: "पसंदीदा तारीख",
      time: "पसंदीदा समय स्लॉट",
      goal: "प्राथमिक फिटनेस लक्ष्य",
      program: "पसंदीदा प्रोग्राम",
      languagePref: "बातचीत की भाषा",
      message: "अतिरिक्त संदेश या कोई चोट (वैकल्पिक)",
      messagePlaceholder: "अपने फिटनेस इतिहास या किसी खास लक्ष्य के बारे में बताएं...",
      consent: "मैं इस मुफ़्त ट्रायल डेमो के संबंध में व्हाट्सएप/फोन पर संपर्क किए जाने की सहमति देता हूँ।",
      submit: "डेमो ट्रायल बुकिंग कन्फर्म करें",
      submitting: "प्रक्रिया जारी...",
      errors: {
        nameRequired: "कृपया अपना नाम दर्ज करें",
        phoneRequired: "कृपया मान्य 10-अंकों का भारतीय मोबाइल नंबर (+91) दर्ज करें",
        dateRequired: "कृपया आगामी तारीख चुनें",
        timeRequired: "कृपया समय स्लॉट चुनें",
        consentRequired: "कृपया आगे बढ़ने के लिए सहमति दें"
      },
      goals: {
        muscle: "मसल बनाना (हाइपरट्रॉफी)",
        fatloss: "फैट कम करना व रिकंपोजीशन",
        general: "सामान्य फिटनेस व स्वास्थ्य",
        strength: "ताकत व पावर बढ़ाना",
        conditioning: "स्टैमिना व कंडीशनिंग",
        beginner: "शुरुआती के रूप में शुरुआत",
        other: "अन्य विशेष लक्ष्य"
      },
      slots: {
        earlyMorning: "प्रातःकाल (6:00 AM – 8:00 AM)",
        midMorning: "सुबह (8:00 AM – 10:00 AM)",
        afternoon: "दोपहर (12:00 PM – 2:00 PM)",
        evening: "शाम (5:00 PM – 7:00 PM)",
        night: "रात (7:00 PM – 9:00 PM)"
      },
      success: {
        title: "ट्रायल बुकिंग अनुरोध दर्ज हुआ",
        badge: "डेमो अनुरोध सफलतापूर्वक दर्ज",
        desc: "डेमो देखने के लिए धन्यवाद! आपकी ट्रायल जानकारी नीचे दर्ज कर ली गई है।",
        dateLabel: "चुनी गई तारीख",
        timeLabel: "समय स्लॉट",
        programLabel: "प्रोग्राम",
        goalLabel: "प्राथमिक लक्ष्य",
        nameLabel: "नाम",
        phoneLabel: "फोन",
        whatsappPrompt: "व्हाट्सएप पर प्री-फिल्ड संदेश भेजें:",
        whatsappBtn: "व्हाट्सएप संदेश खोलें",
        closeBtn: "विंडो बंद करें",
        demoDisclaimer: "नोट: वास्तविक वेबसाइट में यह फॉर्म तुरंत एसएमएस/व्हाट्सएप सूचना और सीआरएम लीड बनाता है।"
      }
    },
    footer: {
      tagline: "ताकत बनाएं। अपनी सीमाओं से आगे बढ़ें।",
      aboutSnippet: "वैशाली नगर, जयपुर स्थित प्रीमियम फिटनेस व स्ट्रेंथ ट्रेनिंग सेंटर। उद्देश्यपूर्ण ट्रेनिंग और सकारात्मक समुदाय।",
      quickLinks: "त्वरित नेविगेशन",
      programsTitle: "प्रोग्राम",
      membershipTitle: "योजनाएं",
      contactTitle: "पता व समय",
      privacyPolicy: "गोपनीयता नीति",
      termsConditions: "नियम एवं शर्तें",
      copyright: "आयरन कल्ट फिटनेस डेमो। सर्वाधिकार सुरक्षित।",
      demoDisclaimer: "यह वेबसाइट क्लाइंट डेमो के लिए तैयार की गई है। सभी विवरण, शुल्क और प्रोफाइल केवल प्रदर्शन हेतु हैं।"
    },
    common: {
      demoNotice: "डेमो पूर्वावलोकन",
      demoSubtitle: "वैशाली नगर, जयपुर के लिए डेमो अवधारणा",
      learnMore: "और जानें",
      viewAll: "सभी देखें",
      close: "बंद करें",
      backToTop: "ऊपर जाएं",
      popular: "सर्वाधिक लोकप्रिय",
      recommended: "अनुशंसित"
    }
  },

  // Hinglish (Romanized Hindi)
  'hi-Latn': {
    nav: {
      home: "Home",
      about: "About Us",
      programs: "Programs",
      trainers: "Trainers",
      membership: "Membership",
      gallery: "Gallery",
      contact: "Contact",
      bookTrial: "FREE TRIAL BOOK KAREIN"
    },
    hero: {
      eyebrow: "PREMIUM FITNESS • VAISHALI NAGAR, JAIPUR",
      headlinePrefix: "AAPKA NEXT",
      headlineAccent: "LEVEL YAHAN SE",
      headlineSuffix: "SHURU HOTA HAI.",
      description: "Sirf ek gym nahi. Strength build karne, discipline sikhne aur apna strongest version banne ka space.",
      primaryCta: "FREE TRIAL BOOK KAREIN",
      secondaryCta: "MEMBERSHIP PLANS DEKHEIN",
      promoBadge: "Aapka first step ek free session se shuru hota hai.",
      trust1: "Expert coach training",
      trust2: "Strength & conditioning",
      trust3: "Beginner-friendly space",
      scrollHint: "Neeche scroll karein"
    },
    strip: {
      item1: "PURPOSE KE SAATH TRAIN KAREIN",
      item2: "CONFIDENCE SE MOVE KAREIN",
      item3: "HAR DIN STRONGER BANO"
    },
    about: {
      eyebrow: "MORE THAN A WORKOUT",
      heading: "BUILT FOR YOUR STRONGEST SELF.",
      p1: "Chahe aap pehli baar gym enter kar rahe ho ya apne next PR ki taraf badh rahe ho, IRON CULT FITNESS aapko purpose ke saath train karne ka space deta hai.",
      p2: "Hamara method top-quality equipment, structured training aur zero-intimidation environment ko ek saath laata hai.",
      feat1Title: "PURPOSE KE SAATH TRAIN",
      feat1Desc: "Aapke fitness goals aur current baseline ke hisaab se structured workouts.",
      feat2Title: "APNI COMMUNITY MILO",
      feat2Desc: "Beginners aur experienced lifters dono ke liye ek welcoming aur respectful environment.",
      feat3Title: "CONFIDENCE SE PROGRESS",
      feat3Desc: "Consistency banane aur form improve karne ke liye continuous coach support.",
      discoverBtn: "HAMARA APPROACH DEKHEIN"
    },
    programs: {
      eyebrow: "STRUCTURED DISCIPLINES",
      heading: "REAL PROGRESS KE LIYE DESIGNED PROGRAMS",
      subtitle: "Iron Cult ka har ek program biomechanics aur certified coaching par based hai.",
      learnMore: "DETAIL DEKHEIN",
      viewDetails: "Program Syllabus Dekhein",
      bookForThis: "Is Program Ke Liye Free Trial Book Karein",
      intensityLabel: "Intensity",
      durationLabel: "Duration",
      suitableFor: "Kiske Liye Best Hai",
      whatInvolves: "Session Mein Kya Hoga",
      weeklySchedule: "Weekly Split Example",
      strength: {
        title: "Strength Training",
        desc: "Raw strength build karein, barbell form perfect karein aur structured progressive overload ke saath aage badhein.",
        audience: "Barbell lifts master karne aur measurable power chaahne wale lifters."
      },
      hypertrophy: {
        title: "Muscle Building",
        desc: "Progressive volume, biomechanical tension aur proper muscle recovery ke saath regularly train karein.",
        audience: "Muscle growth aur sculpted athletic physique ke liye focused log."
      },
      fatloss: {
        title: "Fat-Loss Training",
        desc: "Sustainable exercise habits aur resistance workouts combine karke body recomposition achieve karein.",
        audience: "Bina kisi extreme crash diet ke fat loss aur lean fitness chaahne wale log."
      },
      pt: {
        title: "Personal Training",
        desc: "1-on-1 dedicated coach, live technique corrections aur personalized nutrition advice paayein.",
        audience: "Jo personalized accountability aur injury-free coaching prefer karte hain."
      },
      functional: {
        title: "Functional Fitness",
        desc: "Full-body mobility, rotational power, agility aur daily physical resilience improve karein.",
        audience: "Athletes, runners aur desk workers jo active lifestyle chahte hain."
      },
      beginner: {
        title: "Beginner Fitness",
        desc: "Basic exercises seekhein, gym machines samajhein aur bina kisi hesitation ke confidence build karein.",
        audience: "First-time gym aane wale log jinko friendly guidance chahiye."
      }
    },
    trainers: {
      eyebrow: "CERTIFIED COACHING",
      heading: "MEET THE IRON CULT COACHES",
      subtitle: "Experienced aur patient coaches jo aapki safety aur safe progress ke liye committed hain.",
      disclaimerNote: "Illustrative demo profiles. Actual launch se pehle credentials verify kiye jayenge.",
      viewProfile: "PROFILE DEKHEIN",
      yearsExp: "Saal Ka Experience",
      specialties: "Core Specialties",
      philosophy: "Coaching Philosophy",
      bookConsultation: "Coach Ke Saath Consultation Karein",
      arjun: {
        role: "Strength & Conditioning Coach",
        bio: "Arjun barbell mechanics, powerlifting aur 6 saal ke coaching experience ke saath strength programming lead karte hain.",
        philosophy: "Weight badhane se pehle form seekho. Proper technique se hi real strength banti hai."
      },
      priya: {
        role: "Personal Fitness Coach",
        bio: "Priya beginner habit building aur sustainable lifestyle transformations mein 4 saal se clients ko guide kar rahi hain.",
        philosophy: "Fitness aapko energy dene ke liye hai. Daily consistent efforts se hi lasting results aate hain."
      },
      rohan: {
        role: "Functional Training Coach",
        bio: "Rohan turf conditioning, kettlebells aur mobility drills ke saath bulletproof joints banane mein 5 saal se expert hain.",
        philosophy: "True fitness ka matlab hai pain-free movement. Har plane mein freely move karna seekhein."
      }
    },
    memberships: {
      eyebrow: "MEMBERSHIP PLANS",
      heading: "TRANSPARENT AUR HONEST PRICING",
      subtitle: "Koi hidden charges nahi. Koi fake lock-in nahi. Apne workout routine ke hisaab se plan choose karein.",
      monthlyBilling: "Monthly",
      annualBilling: "Annual Billing",
      annualDiscountBadge: "Annual Par 15% Off",
      perMonth: "/ month",
      perYear: "/ year",
      billedAnnually: "Billed annually as ₹",
      popularBadge: "MOST POPULAR",
      starter: {
        desc: "Standard gym floor aur free weights par independent lifting ke liye essential plan."
      },
      transform: {
        desc: "Fitness assessment aur guided group sessions ke saath rapid progress ke liye best plan."
      },
      elite: {
        desc: "1-on-1 coach consultations, custom program aur priority perks ke saath full VIP tier."
      },
      ctaStarter: "STARTER CHOOSE KAREIN",
      ctaTransform: "TRANSFORM CHOOSE KAREIN",
      ctaElite: "ELITE CHOOSE KAREIN",
      tableHeading: "DETAILED PLAN COMPARISON",
      tableDisclaimer: "Demo pricing illustration purpose ke liye hai. Final prices gym management confirm karega.",
      colFeature: "Plan Feature",
      gymAccessLabel: "Gym Access Hours",
      equipmentLabel: "Equipment Zones",
      assessmentLabel: "Fitness & Posture Check",
      groupSessionsLabel: "Group Workshops",
      ptConsultLabel: "Coach 1-on-1 Consultation",
      progressReviewLabel: "Progress Reviews",
      lockerLabel: "Locker Facility",
      guestPassesLabel: "Guest Passes / Month"
    },
    progress: {
      eyebrow: "HAMARA METHOD",
      heading: "PROGRESS IS BUILT, NOT WISHED FOR.",
      subtitle: "Hum fake quick-fixes ke bajaye sustainable training aur science-backed discipline mein trust karte hain.",
      step1: {
        title: "GOAL SET KAREIN",
        desc: "Apni primary needs samajhein, coach ke saath baseline test karein aur right path choose karein."
      },
      step2: {
        title: "PLAN KE SAATH TRAIN",
        desc: "Structured routine, right exercises aur progressive overload ke saath consistency banayein."
      },
      step3: {
        title: "REVIEW AUR ADJUST",
        desc: "Apni strength aur recovery track karein, aur body response ke mutabiq routine update karein."
      }
    },
    gallery: {
      eyebrow: "FACILITY GLIMPSE",
      heading: "BUILT FOR SERIOUS TRAINING",
      subtitle: "Vaishali Nagar gym ka overview — calibrated barbells, turf tracks aur spacious floor.",
      all: "Sabhi Photos",
      strength: "Strength & Barbells",
      functional: "Turf & Functional",
      coaching: "Coaching Sessions",
      facility: "Gym Interior",
      viewAll: "SABHI PHOTOS DEKHEIN",
      lightboxHint: "Next/prev photo ke liye left/right arrow dabayein"
    },
    testimonials: {
      eyebrow: "MEMBER VOICES",
      heading: "HAMARE MEMBERS KYA KEHTE HAIN",
      demoBadge: "SAMPLE DEMO TESTIMONIALS — CLIENT FEEDBACK SE REPLACE KAREIN.",
      disclaimer: "Yeh feedback demonstration purpose ke liye illustrative hai aur commercial claims nahi karta."
    },
    faqs: {
      eyebrow: "COMMON QUESTIONS",
      heading: "FREQUENTLY ASKED QUESTIONS",
      subtitle: "Join karne se pehle koi confusion? Yahan Iron Cult ke bare mein key answers hain.",
      q1: "Kya yeh gym beginners ke liye theek hai?",
      a1: "Bilkul. Hamara mahaul friendly aur supportive hai. Day 1 se coaches aapko equipment use karna aur safe form sikhayenge.",
      q2: "Pehle workout mein kya saath lana chahiye?",
      a2: "Comfortable workout clothes, clean indoor shoes, personal towel aur water bottle. Filtered drinking water aur lockers available hain.",
      q3: "Kya aap personal training dete hain?",
      a3: "Haan, certified 1-on-1 personal training available hai. Elite membership mein bhi coach consultation included hai.",
      q4: "Kaun sa membership plan mere liye best hai?",
      a4: "Agar aapko pehle se experience hai toh Starter plan best hai. Agar guided sessions chahiye toh Transform lein. Coach guidance ke liye Elite choose karein.",
      q5: "Kya main free trial session book kar sakta hoon?",
      a5: "Haan! Har interested person ke liye 60-minute ka free demo trial session available hai jismein aap facility explore kar sakte hain.",
      q6: "Kya group classes hoti hain?",
      a6: "Haan, Transform aur Elite plans mein technique workshops aur high-energy conditioning sessions scheduled hote hain.",
      q7: "Gym se contact kaise karein?",
      a7: "Aap seedhe WhatsApp (+91 98765 43210), direct phone call ya email hello@ironcultdemo.example par contact kar sakte hain.",
      q8: "Gym ki timings kya hain?",
      a8: "Monday se Saturday: Morning 5:00 AM se Night 10:00 PM tak. Sunday: 7:00 AM se 12:00 PM (Noon) tak."
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      heading: "HAMARE VAISHALI NAGAR GYM AAYEIN",
      subtitle: "Workout ke liye drop in karein ya inquiry bhejein. Hamari team aapki help ke liye ready hai.",
      addressLabel: "Demo Address",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      hoursLabel: "Timings",
      whatsappCta: "WHATSAPP PAR CHAT KAREIN",
      callCta: "CALL NOW",
      getDirections: "DIRECTIONS DEKHEIN",
      formTitle: "Inquiry Bhejein",
      formSubtitle: "Memberships ya facilities ke bare mein koi question? Message drop karein.",
      nameLabel: "Aapka Name",
      phoneInputLabel: "Mobile Number",
      emailInputLabel: "Email (Optional)",
      messageLabel: "Message / Question",
      sendBtn: "INQUIRY SUBMIT KAREIN",
      demoNotice: "Demo form: Data locally store hota hai without external email dependency."
    },
    booking: {
      title: "FREE TRIAL SESSION BOOK KAREIN",
      subtitle: "Bina kisi commitment ke Iron Cult standard training experience karein.",
      name: "Full Name",
      namePlaceholder: "Apna poora naam likhein",
      phone: "Mobile Number",
      phonePlaceholder: "+91 98765 43210",
      email: "Email Address (Optional)",
      emailPlaceholder: "name@example.com",
      date: "Preferred Date",
      time: "Preferred Time Slot",
      goal: "Primary Fitness Goal",
      program: "Preferred Program",
      languagePref: "Preferred Language",
      message: "Additional Message ya koi injury (Optional)",
      messagePlaceholder: "Apne fitness experience ya specific goal ke bare mein batayein...",
      consent: "Main trial session regarding WhatsApp/Phone call par update lene ke liye agree karta hoon.",
      submit: "DEMO TRIAL BOOKING CONFIRM KAREIN",
      submitting: "Processing...",
      errors: {
        nameRequired: "Apna naam enter karein",
        phoneRequired: "Valid 10-digit Indian mobile number (+91) enter karein",
        dateRequired: "Upcoming date select karein",
        timeRequired: "Time slot choose karein",
        consentRequired: "Aage badhne ke liye consent checkbox check karein"
      },
      goals: {
        muscle: "Muscle Build Karna (Hypertrophy)",
        fatloss: "Fat Loss & Body Tone",
        general: "General Fitness & Health",
        strength: "Raw Strength & Power Badhana",
        conditioning: "Stamina & Athletic Conditioning",
        beginner: "Beginner Ke Taur Par Shuru Karna",
        other: "Koi Aur Specific Goal"
      },
      slots: {
        earlyMorning: "Early Morning (6:00 AM – 8:00 AM)",
        midMorning: "Subah (8:00 AM – 10:00 AM)",
        afternoon: "Dopahar (12:00 PM – 2:00 PM)",
        evening: "Shaam (5:00 PM – 7:00 PM)",
        night: "Raat (7:00 PM – 9:00 PM)"
      },
      success: {
        title: "TRIAL BOOKING REQUEST RECORDED",
        badge: "DEMO REQUEST COMPLETE",
        desc: "Demo check karne ke liye thank you! Aapki demo details generate ho chuki hain.",
        dateLabel: "Selected Date",
        timeLabel: "Time Slot",
        programLabel: "Program",
        goalLabel: "Primary Goal",
        nameLabel: "Name",
        phoneLabel: "Phone",
        whatsappPrompt: "Direct pre-filled WhatsApp message bhejein:",
        whatsappBtn: "WHATSAPP MESSAGE KHOLEIN",
        closeBtn: "WINDOW CLOSE KAREIN",
        demoDisclaimer: "Note: Real website par yeh instantly WhatsApp SMS notification aur CRM update karta hai."
      }
    },
    footer: {
      tagline: "BUILD STRENGTH. BECOME UNSTOPPABLE.",
      aboutSnippet: "Vaishali Nagar, Jaipur ka premium fitness aur strength center. Dedicated to disciplined training and community support.",
      quickLinks: "Quick Links",
      programsTitle: "Programs",
      membershipTitle: "Plans",
      contactTitle: "Location & Timings",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      copyright: "IRON CULT FITNESS DEMO. All Rights Reserved.",
      demoDisclaimer: "Yeh website gym owners ke presentation ke liye demo prototype hai. Sabhi details, pricing aur profiles illustrative hain."
    },
    common: {
      demoNotice: "DEMO PREVIEW",
      demoSubtitle: "Vaishali Nagar, Jaipur demo concept",
      learnMore: "Aur Dekhein",
      viewAll: "Sabhi Dekhein",
      close: "Close",
      backToTop: "Upar Jaayein",
      popular: "Most Popular",
      recommended: "Recommended"
    }
  }
};
