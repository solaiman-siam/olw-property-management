import { images } from "@/lib/imageProvider";

export const services = [
  {
    id: 1,
    icon: images.Manage_Property,
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    icon: images.Manage_Customer,
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    icon: images.Schedule_House,
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    icon: images.Monitor_Guest,
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    icon: images.TrackAndReport,
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    icon: images.Guest_Inquiry,
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const plans = [
  {
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    yearlyPrice: 0,
    monthlyPrice: 0,
    featured: false,
    features: [
      { text: "20,000+ PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    yearlyPrice: 50,
    monthlyPrice: 5,
    featured: true,
    features: [
      { text: "20,000+ PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ideal for businesses who personalized services and security for large teams.",
    yearlyPrice: 100,
    monthlyPrice: 10,
    featured: false,
    features: [
      { text: "20,000+ PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export const logos = [
  { id: 1, name: "PriceLabs", src: images.PriceLab_Logo },
  { id: 2, name: "Wheelhouse", src: images.WheelHouse_Logo, active: true },
  {
    id: 3,
    name: "Beyond Pricing",
    src: images.BeyondPricing_Logo,
  },
  { id: 4, name: "Hostfully", src: images.Hostfully_Logo },
  { id: 5, name: "Guesty", src: images.Guesty_Logo },
  { id: 6, name: "Lodgify", src: images.Lodgify_Logo },
  { id: 7, name: "Hostfully", src: images.Hostfully_Logo },
  { id: 8, name: "Guesty", src: images.Guesty_Logo },
  { id: 9, name: "Lodgify", src: images.Lodgify_Logo },
];



export const steps = [
  {
    id: "01",
    label: "Add requirements & sign up today",
    icon: images.Add_People,
  },
  {
    id: "02",
    label: "Connect with your CSM & onboarding team",
    icon: images.Connect_People,
  },
  {
    id: "03",
    label: "Meet your STR Assistant next week",
    icon: images.Headset,
  },
];


export const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    avatar: images.Profile1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 2,
    name: "Esther Howard",
     avatar: images.Profile2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    featured: true, // white card, elevated
  },
  {
    id: 3,
    name: "Robert Fox",
     avatar: images.Profile2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 4,
    name: "Cameron Williamson",
    avatar: images.Profile1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    avatar: images.Profile1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 6,
    name: "Leslie Alexander",
    avatar: images.Profile1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
];


export const faqs = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information such as your company name, VAT number, or address to your invoices from the billing settings.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We bill monthly or annually depending on your chosen plan. You'll receive an invoice via email after each payment.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can update your account email from the profile settings page. A verification link will be sent to your new email address.",
  },
];


export const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Features", href: "/features" },
      { label: "Works", href: "/works" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Customer Support", href: "/support" },
      { label: "Delivery Details", href: "/delivery" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Free eBooks", href: "/ebooks" },
      { label: "Development Tutorial", href: "/tutorials" },
      { label: "How to – Blog", href: "/blog" },
      { label: "Youtube Playlist", href: "/youtube" },
    ],
  },
];


export const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: images.Twitter
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: images.Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: images.Instagram,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: images.Github,
  },
];