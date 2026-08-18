import { BookEdition, Chapter, Review, FaqItem } from '../types';

export const BOOK_DETAILS = {
  title: "Fertility Back",
  subtitle: "A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely",
  tagline: "Your Healthy Body Today, Your Happy Pregnancy Tomorrow",
  author: "Olumind Synergy Venture",
  authorTagline: "Health • Wellness • A Better Tomorrow",
  authorLocation: "Lagos, Nigeria",
  pages: 70,
  language: "English",
  rating: "4.9/5",
  ratingCount: "380+ ratings",
  badge: "70 PAGES COMPLETE FERTILITY WELLNESS GUIDE",
  heroDescription: "Discover proven, science-backed natural protocols to understand your conception cycle, optimize male and female reproductive wellness, and prepare your body safely for a healthy pregnancy. No guesswork required!",
  orderUrl: "https://selar.com/67164te3hn",
  coverImage: "/src/assets/images/fertility_back_book_mockup_1787075468223.jpg",
  disclaimer: "Copyright © 2024–2026 Olumind Synergy Venture. All Rights Reserved. This ebook is for educational purposes only and does not replace professional medical advice. Always consult a qualified healthcare provider for diagnosis and treatment."
};

export const RETAILERS = [
  {
    name: "Amazon Kindle",
    tagline: "Instant 1-Click Delivery",
    rating: "4.9 / 5.0",
    badge: "Bestseller",
    description: "Read instantly on Kindle, iPad, Android, or PC apps worldwide.",
    link: "#order-section"
  },
  {
    name: "Apple Books",
    tagline: "Interactive ePub Format",
    rating: "4.8 / 5.0",
    badge: "Top Choice",
    description: "Designed seamlessly with bookmarks for iPhone, iPad & Mac.",
    link: "#order-section"
  },
  {
    name: "Audible Audio",
    tagline: "Narrated Audio Companion",
    rating: "5.0 / 5.0",
    badge: "Included with Kit",
    description: "Listen to guided relaxation audio and dietary protocols on the go.",
    link: "#order-section"
  },
  {
    name: "Google Play",
    tagline: "Mobile & Web Access",
    rating: "4.9 / 5.0",
    badge: "Official",
    description: "Universal PDF and ePub download with lifetime offline sync.",
    link: "#order-section"
  }
];

export const CORE_MODULES = [
  {
    number: "01",
    title: "Understanding Fertility & Conception",
    description: "Demystify the biological journey of egg and sperm, hormonal triggers, and what truly happens during conception without confusing medical jargon.",
    bulletPoints: [
      "The exact timeline of fertilization and implantation",
      "Key hormones: Estrogen, Progesterone, LH, and FSH explained",
      "Top myths about fertility debunked with clinical research"
    ]
  },
  {
    number: "02",
    title: "Menstrual Cycle & Ovulation Guide",
    description: "Master pinpoint cycle tracking, identifying your true fertile window, and recognizing fertile cervical mucus and basal temperature shifts.",
    bulletPoints: [
      "How to pinpoint your peak 5-day fertile window accurately",
      "Interpreting OPK (Ovulation Predictor Kits) & BBT charting",
      "What irregular cycles mean and natural steps to regulate them"
    ]
  },
  {
    number: "03",
    title: "Nutrition & Lifestyle for Better Fertility",
    description: "Fuel your reproductive system with micronutrient-dense fertility superfoods, gut health optimization, and toxin reduction strategies.",
    bulletPoints: [
      "The complete Fertility Nutrition Plate and daily meal plans",
      "Essential pre-conception vitamins: Folate, CoQ10, Zinc, Omega-3",
      "Safe, low-impact exercise routines that boost pelvic circulation"
    ]
  },
  {
    number: "04",
    title: "Male and Female Fertility Health",
    description: "Fertility is a 50/50 team effort. Learn how to optimize sperm motility, morphology, count, alongside egg quality and ovarian reserve.",
    bulletPoints: [
      "Male fertility boosters: Diet, temperature, and lifestyle tweaks",
      "Protecting egg quality against oxidative stress",
      "Couple's collaborative wellness habits for stress reduction"
    ]
  },
  {
    number: "05",
    title: "Fertility Tests & When to See a Specialist",
    description: "Know what clinical tests to request, understand hormone lab panels, and walk into your fertility clinic consultations fully prepared and confident.",
    bulletPoints: [
      "Checklist of essential hormone blood panels (AMH, Thyroid, Prolactin)",
      "Understanding HSG, ultrasound, and semen analysis results",
      "Questions to ask your reproductive endocrinologist or OB-GYN"
    ]
  },
  {
    number: "06",
    title: "90-Day Fertility Back Program",
    description: "A structured, week-by-week step-by-step roadmap to reset your body, detoxify your environment, and build optimal conception readiness.",
    bulletPoints: [
      "Phase 1 (Days 1-30): Systemic detox and nutrient saturation",
      "Phase 2 (Days 31-60): Hormone balancing and cycle calibration",
      "Phase 3 (Days 61-90): Peak conception timing and implantation support"
    ]
  }
];

export const TOOLKIT_ITEMS = [
  {
    title: "Healthy Nutrition Plan",
    desc: "30-day fertility-boosting meal planner, grocery shopping lists & anti-inflammatory recipes.",
    icon: "Utensils"
  },
  {
    title: "Lifestyle & Wellness Tips",
    desc: "Sleep hygiene protocols, endocrine disruptor avoidance guide, and stress-relief routines.",
    icon: "HeartPulse"
  },
  {
    title: "Cycle & Ovulation Trackers",
    desc: "Printable daily calendar sheets to log BBT, LH surge strips, and physical symptoms.",
    icon: "CalendarCheck"
  },
  {
    title: "Doctor Visit Checklist",
    desc: "25+ targeted questions to ask your gynecologist, plus test interpretation reference sheets.",
    icon: "ClipboardList"
  },
  {
    title: "Fertility Journal & Planner",
    desc: "Daily guided mindset prompts, gratitude pages, and medication/supplement logs.",
    icon: "BookOpen"
  },
  {
    title: "30-Day Couples Challenge",
    desc: "Fun, actionable daily habits for both partners to build vitality and intimacy together.",
    icon: "Users"
  }
];

export const EDITIONS: BookEdition[] = [
  {
    id: "ebook",
    name: "Digital eBook Edition",
    format: "PDF + ePub instant download",
    priceUSD: 14.99,
    priceNGN: 12500,
    features: [
      "Complete 70-page Fertility Back Guide",
      "Instant PDF & ePub download to phone & PC",
      "All 6 Core Learning Modules",
      "Printable Trackers & Worksheets",
      "Free lifetime digital updates"
    ]
  },
  {
    id: "complete-bundle",
    name: "Deluxe Complete Wellness Kit",
    format: "Digital Ebook + Audio Guide + All Tools",
    priceUSD: 24.99,
    priceNGN: 22000,
    popular: true,
    badge: "Most Popular",
    features: [
      "Complete 70-page Fertility Back eBook",
      "Audiobook companion (narrated audio)",
      "Printable 90-Day Fertility Journal & Planner",
      "Fertility Nutrition Meal Prep Blueprint",
      "Doctor Visit Checklist & Lab Interpreting Sheet",
      "Exclusive 30-Day Couples Challenge calendar",
      "Priority email support"
    ]
  },
  {
    id: "paperback",
    name: "Paperback Edition",
    format: "Full-color softcover book + Free eBook",
    priceUSD: 29.99,
    priceNGN: 28500,
    features: [
      "High quality 70-page printed full-color book",
      "Immediate digital eBook access while shipping",
      "Spiral-bound work sections for easy writing",
      "Fast worldwide & nationwide delivery",
      "Complimentary bookmark & planner card"
    ]
  }
];

export const SAMPLE_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1: Understanding Fertility & Conception Fundamentals",
    summary: "How the reproductive system works together and the real science behind conception.",
    pages: "Pages 6 – 18",
    readTime: "7 min read",
    content: [
      "Conception is one of nature's most intricate and delicate biological synchronies. For pregnancy to occur naturally, several key bodily systems—endocrine, reproductive, circulatory, and neurological—must operate in harmonic balance.",
      "Many couples enter their pregnancy journey with feelings of uncertainty, often influenced by societal pressure or misleading online information. The truth is: healthy fertility is not a matter of luck; it is a direct reflection of cellular nutrition, hormonal harmony, balanced inflammation, and precise timing.",
      "In this chapter, we establish the core foundations of male and female biology. You will learn about follicular maturation, how the follicle develops over a 90-day window, why egg quality is dynamic rather than fixed, and how sperm health directly contributes 50% of the embryonic foundation."
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Decoding Your Menstrual Cycle & Ovulation Window",
    summary: "Recognizing your body's fertility signals with precision and confidence.",
    pages: "Pages 19 – 31",
    readTime: "8 min read",
    content: [
      "Every woman's menstrual cycle tells a rich physiological story. While textbooks often cite a standard '28-day cycle with ovulation on day 14', the reality for millions of healthy women varies between 24 and 35 days.",
      "The golden key to natural conception is identifying your unique fertile window—the 5 days leading up to ovulation plus the day of ovulation itself. Because sperm can survive in fertile cervical fluid for up to 5 days while an egg remains viable for only 12 to 24 hours, timing intercourse prior to ovulation is critical.",
      "We will guide you through the three primary biomarkers: Basal Body Temperature (BBT) shifts, Cervical Mucus characteristics (specifically fertile egg-white consistency), and Luteinizing Hormone (LH) surges using easy, home-friendly tracking methods."
    ]
  },
  {
    id: 3,
    title: "Chapter 6: The 90-Day Conception Prep Program",
    summary: "Week-by-week actionable roadmap to prepare body, mind, and environment.",
    pages: "Pages 54 – 68",
    readTime: "6 min read",
    content: [
      "Why 90 days? It takes approximately 90 to 100 days for an ovarian follicle to develop from its dormant state into an ovulated egg, and approximately 74 days for sperm cells to fully generate (spermatogenesis).",
      "During this 3-month window, everything you eat, drink, inhale, and absorb directly influences the DNA integrity, mitochondrial energy, and cell membrane quality of your reproductive cells.",
      "Follow our structured 3-phase plan: Month 1 focuses on eliminating environmental endocrine disruptors and restoring gut health; Month 2 focuses on nutrient saturation and cycle synchronization; Month 3 focuses on peak conception timing and implantation support."
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Amina & Tunde B.",
    location: "Lagos, Nigeria",
    rating: 5,
    date: "2 weeks ago",
    title: "We are pregnant after 14 months of trying!",
    comment: "This book changed everything for us. The 90-day program helped us identify that our ovulation timing was off by 4 full days! Following the nutrition plan and the doctor checklist gave us total clarity.",
    verified: true
  },
  {
    id: "2",
    name: "Sarah & David K.",
    location: "London, UK",
    rating: 5,
    date: "1 month ago",
    title: "Clear, practical, and so empowering",
    comment: "Unlike other medical textbooks that scare you with terminology, Fertility Back is encouraging, concise (70 pages of pure value!), and packed with practical worksheets.",
    verified: true
  },
  {
    id: "3",
    name: "Ngozi E.",
    location: "Abuja, Nigeria",
    rating: 5,
    date: "3 weeks ago",
    title: "Both my husband and I followed the toolkit",
    comment: "I love that this book addresses male fertility just as deeply as female health. The recipes and 30-day couple challenge brought us closer together and reduced our anxiety.",
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "Who is the Fertility Back book designed for?",
    answer: "Fertility Back is designed for any individual or couple actively planning for pregnancy, trying to conceive naturally, experiencing irregular cycles, or simply wanting to optimize their reproductive wellness and egg/sperm health before starting a family."
  },
  {
    category: "Format & Delivery",
    question: "How will I receive the eBook after purchasing?",
    answer: "Immediately upon successful checkout, you will receive an instant download link on your screen as well as a confirmation email containing PDF and ePub formats, readable on any phone, tablet, Kindle, or laptop."
  },
  {
    category: "Program",
    question: "Why is the program based on a 90-day timeline?",
    answer: "It takes approximately 90 days for immature follicles to develop into ovulated eggs and 74 days for sperm cells to fully mature. This 90-day window provides the biological foundation to transform cellular health and nutrient status."
  },
  {
    category: "Tools",
    question: "Are the worksheets and trackers printable?",
    answer: "Yes! All worksheets, meal plans, cycle trackers, doctor visit checklists, and the 30-Day challenge calendars are formatted for high-resolution standard letter and A4 printing."
  },
  {
    category: "Medical",
    question: "Can I use this alongside fertility clinic treatments or IVF?",
    answer: "Yes, the nutritional protocols, toxin reduction strategies, and emotional wellbeing tools are designed to support and complement medical care. Always share your supplement plans with your treating physician."
  }
];
