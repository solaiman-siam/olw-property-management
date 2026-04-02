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