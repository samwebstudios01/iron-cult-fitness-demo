/**
 * Centralized configuration and business information for IRON CULT FITNESS demo.
 * Clearly identified as demonstration data for prospective gym owners.
 */

export interface ProgramItem {
  id: string;
  slug: string;
  titleKey: string;
  descKey: string;
  audienceKey: string;
  image: string;
  tag: string;
  intensity: 'Medium' | 'High' | 'All Levels';
  duration: string;
  sessionFocus: string[];
  weeklyStructure: { day: string; focus: string }[];
  faqs: { q: string; a: string }[];
}

export interface TrainerItem {
  id: string;
  slug: string;
  name: string;
  roleKey: string;
  experienceYears: number;
  specialtiesKey: string[];
  bioKey: string;
  philosophyKey: string;
  image: string;
  quote: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  popular?: boolean;
  descKey: string;
  inclusionsKey: string[];
  features: {
    gymAccess: string;
    equipment: string;
    assessment: boolean;
    groupSessions: boolean;
    personalConsultation: boolean;
    progressReview: string;
    lockerAccess: string;
    guestPasses: number;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'functional' | 'facility' | 'coaching';
  image: string;
  description: string;
}

export const GYM_CONFIG = {
  name: "IRON CULT FITNESS",
  tagline: "BUILD STRENGTH. BECOME UNSTOPPABLE.",
  type: "Premium Fitness Center & Strength Training Gym",
  location: {
    address: "21 Fitness Avenue, Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302021",
    country: "India",
    fullAddress: "21 Fitness Avenue, Vaishali Nagar, Jaipur, Rajasthan 302021",
    landmark: "Near Vaishali Community Center",
    coordinates: { lat: 26.9077, lng: 75.7423 }
  },
  contact: {
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsapp: "+91 98765 43210",
    whatsappRaw: "919876543210",
    email: "hello@ironcultdemo.example"
  },
  hours: {
    weekdays: "5:00 AM – 10:00 PM",
    sunday: "7:00 AM – 12:00 PM"
  },
  disclaimer: "This is a demonstration website created for client showcase. All business details, pricing, trainer profiles, and testimonials are illustrative and must be confirmed prior to commercial launch.",
  images: {
    hero: "/src/assets/images/hero_athlete_training_1792665187194.jpg",
    strengthRack: "/src/assets/images/strength_squat_rack_1792665187911.jpg",
    personalTraining: "/src/assets/images/personal_training_session_1792665187860.jpg",
    functionalTurf: "/src/assets/images/functional_turf_training_1792665187921.jpg",
    trainerArjun: "/src/assets/images/trainer_arjun_mehta_1792665210268.jpg",
    trainerPriya: "/src/assets/images/trainer_priya_sharma_1792665210696.jpg",
    trainerRohan: "/src/assets/images/trainer_rohan_verma_1792665211535.jpg",
    gymFloor: "/src/assets/images/gym_interior_floor_1792665211660.jpg"
  }
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: "prog-1",
    slug: "strength-training",
    titleKey: "programs.strength.title",
    descKey: "programs.strength.desc",
    audienceKey: "programs.strength.audience",
    image: GYM_CONFIG.images.strengthRack,
    tag: "STRENGTH & POWER",
    intensity: "High",
    duration: "60-75 mins",
    sessionFocus: [
      "Barbell compound movement mastery (Squat, Bench, Deadlift, Overhead Press)",
      "Progressive overload programming tailored to your individual baseline",
      "Injury prevention protocols and joint mobility warmups",
      "Velocity and technique tracking with certified strength coaches"
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Lower Body Squat Focus & Posterior Chain" },
      { day: "Day 2", focus: "Upper Body Horizontal Press & Row Dynamics" },
      { day: "Day 3", focus: "Deadlift Mechanics & Core Bracing" },
      { day: "Day 4", focus: "Overhead Strength & Unilateral Stability" }
    ],
    faqs: [
      {
        q: "Do I need prior lifting experience?",
        a: "Not at all. Coaches assess your movement pattern first and teach barbell fundamentals safely from empty bar to loaded lifts."
      },
      {
        q: "What equipment is used in this program?",
        a: "Calibrated Olympic barbells, competition power cages, bumper plates, lifting platforms, and specialized accessory bars."
      }
    ]
  },
  {
    id: "prog-2",
    slug: "muscle-building",
    titleKey: "programs.hypertrophy.title",
    descKey: "programs.hypertrophy.desc",
    audienceKey: "programs.hypertrophy.audience",
    image: GYM_CONFIG.images.hero,
    tag: "HYPERTROPHY & SCULPT",
    intensity: "High",
    duration: "55-70 mins",
    sessionFocus: [
      "Targeted mechanical tension and time under tension (TUT)",
      "High-density hypertrophy splits with machine and dumbbell isolation",
      "Nutritional recovery coaching and protein intake guidance",
      "Deload week scheduling to prevent systemic central fatigue"
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Chest & Biceps Hypertrophy" },
      { day: "Day 2", focus: "Back & Rear Delts Thickness" },
      { day: "Day 3", focus: "Quads & Hamstrings Volume" },
      { day: "Day 4", focus: "Shoulders, Triceps & Upper Body Sculpt" }
    ],
    faqs: [
      {
        q: "How soon do hypertrophy adaptations appear?",
        a: "With consistent progressive overload and adequate nutrition, muscle firmness and baseline tone adapt notably within 6 to 8 weeks."
      }
    ]
  },
  {
    id: "prog-3",
    slug: "fat-loss-training",
    titleKey: "programs.fatloss.title",
    descKey: "programs.fatloss.desc",
    audienceKey: "programs.fatloss.audience",
    image: GYM_CONFIG.images.gymFloor,
    tag: "METABOLIC CONDITIONING",
    intensity: "High",
    duration: "50-60 mins",
    sessionFocus: [
      "Resistance-first fat loss to preserve lean muscular tissue",
      "High-output metabolic finishers using sleds, air bikes, and rowers",
      "Sustainable habit tracking rather than extreme crash diets",
      "Resting metabolic rate and body composition check-ins"
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Full Body Resistance & High Energy Finishers" },
      { day: "Day 2", focus: "Zone 2 Low-Impact Cardio & Core Stability" },
      { day: "Day 3", focus: "Upper/Lower Metabolic Density Circuits" },
      { day: "Day 4", focus: "Sled Conditioning & Functional Endurance" }
    ],
    faqs: [
      {
        q: "Do you guarantee fat loss results?",
        a: "We do not offer medical claims or unrealistic guarantees. We deliver proven, structured training and nutritional guidance so you build sustainable body composition."
      }
    ]
  },
  {
    id: "prog-4",
    slug: "personal-training",
    titleKey: "programs.pt.title",
    descKey: "programs.pt.desc",
    audienceKey: "programs.pt.audience",
    image: GYM_CONFIG.images.personalTraining,
    tag: "1-ON-1 COACHING",
    intensity: "All Levels",
    duration: "60 mins",
    sessionFocus: [
      "Dedicated 1-on-1 coach tracking every repetition, rest interval, and form cue",
      "Tailored biomechanical assessment addressing imbalances and past injuries",
      "Bi-weekly body composition, mobility, and strength milestones",
      "WhatsApp accountability line for daily nutrition and recovery questions"
    ],
    weeklyStructure: [
      { day: "Flexible", focus: "Personalized 2x, 3x, or 4x weekly coaching schedules configured around your lifestyle." }
    ],
    faqs: [
      {
        q: "Can I choose my personal coach?",
        a: "Yes. After your initial trial assessment, we match you with a coach whose specialty aligns with your primary goals (strength, fat loss, or functional mobility)."
      }
    ]
  },
  {
    id: "prog-5",
    slug: "functional-fitness",
    titleKey: "programs.functional.title",
    descKey: "programs.functional.desc",
    audienceKey: "programs.functional.audience",
    image: GYM_CONFIG.images.functionalTurf,
    tag: "ATHLETIC AGILITY",
    intensity: "Medium",
    duration: "50-60 mins",
    sessionFocus: [
      "Multi-planar movement: rotational strength, deceleration, and plyometrics",
      "Turf track training with weighted sleds, farmer carries, and sandbags",
      "Shoulder and hip mobility complexes to ensure athletic longevity",
      "Real-world physical resilience for sports and active lifestyles"
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Locomotion, Sled Dynamics & Grip Strength" },
      { day: "Day 2", focus: "Rotational Core & Lateral Acceleration" },
      { day: "Day 3", focus: "Full Body Functional Capacity & Kettlebell Complexes" }
    ],
    faqs: [
      {
        q: "Is functional training useful for desk workers?",
        a: "Extremely useful. It actively counteracts posture collapse, strengthens the glutes and upper back, and restores hip mobility."
      }
    ]
  },
  {
    id: "prog-6",
    slug: "beginner-fitness",
    titleKey: "programs.beginner.title",
    descKey: "programs.beginner.desc",
    audienceKey: "programs.beginner.audience",
    image: GYM_CONFIG.images.personalTraining,
    tag: "FOUNDATIONS & CONFIDENCE",
    intensity: "All Levels",
    duration: "45-55 mins",
    sessionFocus: [
      "Zero-intimidation introduction to all gym zones and equipment",
      "Step-by-step coaching on breathing, bracing, and posture basics",
      "Simple, repeatable routines that build steady confidence",
      "Supportive community of like-minded fitness newcomers"
    ],
    weeklyStructure: [
      { day: "Day 1", focus: "Machine Assisted Foundations (Upper Body Push & Pull)" },
      { day: "Day 2", focus: "Lower Body Stability (Goblet Squats & Glute Bridges)" },
      { day: "Day 3", focus: "Cardio Baseline, Core & Full Body Coordination" }
    ],
    faqs: [
      {
        q: "I feel intimidated by gym environments. Is this for me?",
        a: "Yes. Our facility is designed to be welcoming, respectful, and encouraging. You will receive patient guidance from day one."
      }
    ]
  }
];

export const TRAINERS: TrainerItem[] = [
  {
    id: "trainer-1",
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    roleKey: "trainers.arjun.role",
    experienceYears: 6,
    specialtiesKey: [
      "Strength Training",
      "Exercise Technique",
      "Progressive Programming"
    ],
    bioKey: "trainers.arjun.bio",
    philosophyKey: "trainers.arjun.philosophy",
    image: GYM_CONFIG.images.trainerArjun,
    quote: "True strength isn't just the weight on the bar; it's the discipline you carry into every aspect of life."
  },
  {
    id: "trainer-2",
    slug: "priya-sharma",
    name: "Priya Sharma",
    roleKey: "trainers.priya.role",
    experienceYears: 4,
    specialtiesKey: [
      "Beginner Fitness",
      "Training Consistency",
      "General Conditioning"
    ],
    bioKey: "trainers.priya.bio",
    philosophyKey: "trainers.priya.philosophy",
    image: GYM_CONFIG.images.trainerPriya,
    quote: "Fitness should never feel punishing. Small, consistent daily victories build extraordinary long-term transformations."
  },
  {
    id: "trainer-3",
    slug: "rohan-verma",
    name: "Rohan Verma",
    roleKey: "trainers.rohan.role",
    experienceYears: 5,
    specialtiesKey: [
      "Functional Movement",
      "Conditioning",
      "Mobility-Focused Exercise"
    ],
    bioKey: "trainers.rohan.bio",
    philosophyKey: "trainers.rohan.philosophy",
    image: GYM_CONFIG.images.trainerRohan,
    quote: "Move freely, train intentionally, and build a body that performs just as well outside the gym as inside."
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    monthlyPrice: 999,
    descKey: "memberships.starter.desc",
    inclusionsKey: [
      "Standard gym floor access",
      "Access to strength & resistance equipment",
      "General workout orientation session",
      "Locker access (subject to availability)",
      "Dedicated member mobile app access"
    ],
    features: {
      gymAccess: "Full Operating Hours",
      equipment: "Free Weights & Machines",
      assessment: false,
      groupSessions: false,
      personalConsultation: false,
      progressReview: "Quarterly Self-Log",
      lockerAccess: "Standard Locker",
      guestPasses: 0
    }
  },
  {
    id: "transform",
    name: "TRANSFORM",
    monthlyPrice: 1799,
    popular: true,
    descKey: "memberships.transform.desc",
    inclusionsKey: [
      "Full gym access across all zones",
      "Full strength and cardio equipment access",
      "Comprehensive fitness & posture assessment",
      "Group training sessions where scheduled",
      "Monthly progress & body metrics review",
      "Reserved locker access during workouts"
    ],
    features: {
      gymAccess: "Full Operating Hours + Priority Entry",
      equipment: "All Equipment + Turf Track",
      assessment: true,
      groupSessions: true,
      personalConsultation: false,
      progressReview: "Monthly 1-on-1 Review",
      lockerAccess: "Reserved Day Locker",
      guestPasses: 2
    }
  },
  {
    id: "elite",
    name: "ELITE",
    monthlyPrice: 2999,
    descKey: "memberships.elite.desc",
    inclusionsKey: [
      "Unrestricted gym & performance floor access",
      "Dedicated personal training consultation",
      "Structured individual training programming",
      "Priority booking for all eligible sessions",
      "Bi-weekly coach progress reviews",
      "Complimentary recovery zone access",
      "Guest passes for workout partners"
    ],
    features: {
      gymAccess: "All-Hours VIP Access",
      equipment: "All Zones + Recovery Lounge",
      assessment: true,
      groupSessions: true,
      personalConsultation: true,
      progressReview: "Bi-Weekly Coach Review",
      lockerAccess: "Permanent Assigned Locker",
      guestPasses: 5
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Power Racks & Olympic Platforms",
    category: "strength",
    image: GYM_CONFIG.images.strengthRack,
    description: "Heavy-duty commercial cages with Olympic competition barbells and calibrated rubber bumper plates."
  },
  {
    id: "gal-2",
    title: "Main Performance Gym Floor",
    category: "facility",
    image: GYM_CONFIG.images.gymFloor,
    description: "Spacious training floor with premium dumbell sets up to 50kg, cable towers, and ambient architectural lighting."
  },
  {
    id: "gal-3",
    title: "Speed Track & Sled Turf",
    category: "functional",
    image: GYM_CONFIG.images.functionalTurf,
    description: "High-density 25-meter indoor sprint and weighted sled turf track for athletic conditioning."
  },
  {
    id: "gal-4",
    title: "Heavy Barbell Training Zone",
    category: "strength",
    image: GYM_CONFIG.images.hero,
    description: "Dedicated deadlift and powerlifting stations engineered with shock-absorbing rubber tiles."
  },
  {
    id: "gal-5",
    title: "1-on-1 Technique & Squat Guidance",
    category: "coaching",
    image: GYM_CONFIG.images.personalTraining,
    description: "Certified coaches assisting lifters with biomechanics, movement depth, and spinal bracing."
  },
  {
    id: "gal-6",
    title: "Strength Conditioning Coach Arjun",
    category: "coaching",
    image: GYM_CONFIG.images.trainerArjun,
    description: "Coach Arjun mentoring athletes on periodized power programming."
  },
  {
    id: "gal-7",
    title: "Personal Fitness Coach Priya",
    category: "coaching",
    image: GYM_CONFIG.images.trainerPriya,
    description: "Coach Priya leading structured beginner progressions and mobility."
  },
  {
    id: "gal-8",
    title: "Functional Movement Coach Rohan",
    category: "functional",
    image: GYM_CONFIG.images.trainerRohan,
    description: "Coach Rohan conducting dynamic kettlebell and rotational mobility drills."
  }
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Vikram Rathore",
    role: "Software Engineer",
    location: "Vaishali Nagar, Jaipur",
    quote: "I was nervous about joining a gym, but having a clear routine made starting much easier. The coaches here genuinely care about proper form over ego lifting.",
    highlight: "Clear routine & supportive atmosphere",
    program: "Beginner Fitness Foundations"
  },
  {
    id: "t-2",
    name: "Ananya Mathur",
    role: "Architect & Runner",
    location: "C-Scheme, Jaipur",
    quote: "Training consistently helped me understand the importance of proper technique and recovery. My lower back pain disappeared after 2 months on the functional turf.",
    highlight: "Better posture & zero pain",
    program: "Functional Fitness"
  },
  {
    id: "t-3",
    name: "Kabir Shekhawat",
    role: "College Student & Lifter",
    location: "Mansarovar, Jaipur",
    quote: "The gym layout and structured approach make it easier to stay focused on my goals. Equipment is top tier—heavy dumbbells, solid racks, and no unnecessary crowd chaos.",
    highlight: "World-class equipment & focus",
    program: "Strength Training & Hypertrophy"
  }
];

export const PROGRESS_STEPS = [
  {
    step: "01",
    titleKey: "progress.step1.title",
    descKey: "progress.step1.desc"
  },
  {
    step: "02",
    titleKey: "progress.step2.title",
    descKey: "progress.step2.desc"
  },
  {
    step: "03",
    titleKey: "progress.step3.title",
    descKey: "progress.step3.desc"
  }
];

export const FAQS = [
  {
    id: "faq-1",
    qKey: "faqs.q1",
    aKey: "faqs.a1"
  },
  {
    id: "faq-2",
    qKey: "faqs.q2",
    aKey: "faqs.a2"
  },
  {
    id: "faq-3",
    qKey: "faqs.q3",
    aKey: "faqs.a3"
  },
  {
    id: "faq-4",
    qKey: "faqs.q4",
    aKey: "faqs.a4"
  },
  {
    id: "faq-5",
    qKey: "faqs.q5",
    aKey: "faqs.a5"
  },
  {
    id: "faq-6",
    qKey: "faqs.q6",
    aKey: "faqs.a6"
  },
  {
    id: "faq-7",
    qKey: "faqs.q7",
    aKey: "faqs.a7"
  },
  {
    id: "faq-8",
    qKey: "faqs.q8",
    aKey: "faqs.a8"
  }
];
