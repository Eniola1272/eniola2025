const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const frontendSkills = [
  {
    name: "React js",
    category: "Framework",
    experience: "4+ years",
  },
  {
    name: "Next js",
    category: "Framework",
    experience: "3+ years",
  },
  {
    name: "JavaScript",
    category: "Language",
    experience: "5+ years",
  },
  {
    name: "TypeScript",
    category: "Language",
    experience: "2+ years",
  },
  {
    name: "TailwindCSS",
    category: "Styling",
    experience: "4+ years",
  },
  {
    name: "WordPress",
    category: "CMS",
    experience: "6+ years",
  },
];

const backendSkills = [
  {
    name: "Node js",
    category: "Runtime",
    experience: "3+ years",
  },
  {
    name: "Express js",
    category: "Framework",
    experience: "3+ years",
  },
  {
    name: "MongoDB",
    category: "Database",
    experience: "3+ years",
  },
  {
    name: "Python",
    category: "CMS",
    experience: "3+ years",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const technicalStrengths = [
  "Clean, maintainable code",
  "Performance optimization",
  "Mobile-first development",
  "API integration expertise",
];

const softSkills = [
  "Problem-solving mindset",
  "Clear communication",
  "Team collaboration",
  "Continuous learning",
];

const contactInfo = {
  heading: "Let's Build Something",
  address: "39, Lasokun, Ibadan, Nigeria",
  contact: {
    phone: "+234 903 868 1717",
    email: "aderounmueniola60@gmail.com",
  },
};

const availability = [
  { day: "Mon–Fri", time: "9:00am – 6:00pm WAT" },
  { day: "Weekends", time: "Available for urgent tasks" },
];

const socials = [
  {
    name: "LinkedIn",
    icon: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/eniola-aderounmu-89a16224a/",
  },
  {
    name: "GitHub",
    icon: "/images/github.png",
    url: "https://github.com/eniola1272/",
  },
  {
    name: "Twitter",
    icon: "/images/x.png",
    url: "https://www.x.com/eniaderounmu/",
  },
];

const allProjects = [
  {
    id: 1,
    name: "Course Masters",
    image: "/images/thecoursemasters.png",
    title: "Modern E-Learning Platform",
    description:
      "Built with Next.js and TailwindCSS, Course Masters delivers a seamless learning experience with fast page loads, intuitive navigation, and responsive design across all devices.",
    link: "https://thecoursemasters-frontend.vercel.app/",
  },
  {
    id: 2,
    name: "Vagabond",
    image: "/images/vagabond.jpg",
    title: "Apartment Rental Website",
    description:
      "A sleek, user-friendly rental platform built with WordPress, featuring advanced search, property listings, and a seamless booking process for an optimal user experience.",
    link: "https://vagabond.ae/",
  },
  {
    id: 3,
    name: "Mercy Land Home Care",
    image: "/images/mercylandhomecare.jpg",
    title: "Home Care Service Website",
    description:
      "Professional home care service site built with NextJS and TypeScript, showcasing services, team, and contact options, optimized for performance and SEO.",
    link: "https://www.mercylandhomehealth.com/",
  },
  {
    id: 5,
    name: "Restoration Villa",
    image: "/images/restoration-villa.jpg",
    title: "Rental Website",
    description:
      "Clean, professional vacation home rental site showcasing services and features, built with WordPress and optimized for performance and SEO.",
    link: "https://restorationvilla.com/",
  },
  {
    id: 4,
    name: "Avalanche Tech",
    image: "/images/avalanche.jpg",
    title: "Corporate Website",
    description:
      "Clean, professional corporate site showcasing services and expertise, built with WordPress and optimized for performance and SEO.",
    link: "https://avalanchetechsolutions.net/",
  },
  {
    id: 6,
    name: "Chrisema",
    image: "/images/portfolio/chrisemart.jpg",
    title: "E-Commerce for Used Goods",
    description:
      "Full-featured marketplace with dedicated seller and buyer dashboards, built with Next.js and TypeScript. Features ShadCN UI components and complete API integrations for a seamless trading experience.",
    link: "https://chrisemart.com/",
  },
  {
    id: 7,
    name: "Horace",
    image: "/images/portfolio/horacelearning.jpg",
    title: "LMS Platform",
    description:
      "Comprehensive learning management system built with Next.js and TypeScript, featuring MUI components and API integrations. Includes a dedicated student portal at portal.horacelearning.com.",
    link: "https://www.horacelearning.com/",
  },
  {
    id: 8,
    name: "Olayemi Foundation",
    image: "/images/portfolio/olaf.jpg",
    title: "Charity Organization Website",
    description:
      "Charity organization website built with Next.js and TypeScript, featuring ShadCN UI, donation flows, program listings, and impact stories with full API integrations.",
    link: "https://www.olayemiadeyemifoundation.com/",
  },
  {
    id: 9,
    name: "BOAJ Care",
    image: "/images/portfolio/boaj.jpg",
    title: "Healthcare Organization",
    description:
      "US-based healthcare organization website built with Next.js and TypeScript. Features ShadCN UI components, comprehensive service listings, and seamless API integrations.",
    link: "https://www.boajcare.com/",
  },
];

const projectsList = [
  {
    category: "Platforms & Web Apps",
    projects: [
      {
        name: "Course Masters",
        subtitle: "E-Learning Platform",
        link: "https://thecoursemasters-frontend.vercel.app/",
      },
      {
        name: "Chrisema",
        subtitle: "E-Commerce · Used Goods Marketplace",
        link: "https://chrisemart.com/",
      },
      {
        name: "Horace Learning",
        subtitle: "LMS Platform",
        link: "https://www.horacelearning.com/",
      },
      {
        name: "Horace Portal",
        subtitle: "LMS Student Dashboard",
        link: "https://portal.horacelearning.com/",
      },
      {
        name: "Habbode",
        subtitle: "Property Platform",
        link: "https://habbode-two.vercel.app/",
      },
      {
        name: "Rental Website",
        subtitle: "React · Vercel Project",
        link: "https://rental-website-six.vercel.app/",
      },
    ],
  },
  {
    category: "Healthcare",
    projects: [
      {
        name: "Mercy Land Home Care",
        subtitle: "Home Care Services",
        link: "https://www.mercylandhomehealth.com/",
      },
      {
        name: "BOAJ Care",
        subtitle: "Healthcare Organization · USA",
        link: "https://www.boajcare.com/",
      },
      {
        name: "Hawaii Loa Care",
        subtitle: "Home Care Services",
        link: "https://hawaiiloacare.com/",
      },
      {
        name: "Medicare GV",
        subtitle: "Healthcare",
        link: "https://medicaregv.com",
      },
    ],
  },
  {
    category: "Real Estate & Rentals",
    projects: [
      {
        name: "Vagabond",
        subtitle: "Apartment Rentals",
        link: "https://vagabond.ae/",
      },
      {
        name: "TopSpot Properties",
        subtitle: "Real Estate Listings",
        link: "https://properties.topspothub.com/",
      },
      {
        name: "Dreamscape Lodgings",
        subtitle: "Vacation Rentals",
        link: "https://dreamscapelodgings.com/",
      },
      {
        name: "Mondo Rentals",
        subtitle: "Rentals",
        link: "http://mondorentals.com",
      },
      {
        name: "MJ Rentals",
        subtitle: "Rental Properties",
        link: "https://mj-rentals.com",
      },
      {
        name: "Casa Prive Group",
        subtitle: "Luxury Rentals",
        link: "https://casaprivegroup.com/",
      },
      {
        name: "Seattle Hanai Properties",
        subtitle: "Property Management",
        link: "https://seattlehanaiproperties.com/",
      },
      {
        name: "Noble Luxury Stays",
        subtitle: "Luxury Vacation Rentals",
        link: "https://nobleluxurystays.com/",
      },
      {
        name: "Restoration Villa",
        subtitle: "Vacation Home Rental",
        link: "https://restorationvilla.com/",
      },
      {
        name: "The Henlee Apartments",
        subtitle: "Apartments",
        link: "https://thehenleeapartments.com/",
      },
      {
        name: "Leaf Peeper Point",
        subtitle: "Vacation Rental",
        link: "https://leafpeeperpoint.com",
      },
      {
        name: "Altavilla Properties",
        subtitle: "Real Estate",
        link: "https://altavillaproperties.com/properties/",
      },
      {
        name: "Kaz Residences",
        subtitle: "Residential Properties",
        link: "https://kazresidences.com/",
      },
      {
        name: "Myrtle Beach Bums",
        subtitle: "Vacation Rentals",
        link: "https://myrtlebeachbums.com/",
      },
      {
        name: "Extended Stays Home",
        subtitle: "Extended Stay Rentals",
        link: "https://extendedstayshome.com/",
      },
      {
        name: "Deluxe Homes",
        subtitle: "Property Management",
        link: "https://www.deluxehomes.com/property-management/",
      },
      {
        name: "Apartments Am Werdersee",
        subtitle: "Apartments",
        link: "https://apartmentsamwerdersee.com/a/",
      },
      {
        name: "Casa Cheetah",
        subtitle: "Vacation Rentals",
        link: "https://casacheetah.com/",
      },
      {
        name: "Bluvue Vacations",
        subtitle: "Vacation Rentals",
        link: "https://bluvuevacations.com/",
      },
      {
        name: "Foresight Property Homes",
        subtitle: "Real Estate",
        link: "https://foresightpropertyhomes.com/",
      },
    ],
  },
  {
    category: "Corporate & Business",
    projects: [
      {
        name: "Avalanche Tech Solutions",
        subtitle: "Corporate Website",
        link: "https://avalanchetechsolutions.net/",
      },
      {
        name: "WGA Constructions",
        subtitle: "Construction · Nigeria",
        link: "https://wgaconstructions.com.ng",
      },
      {
        name: "Less Heat Tint",
        subtitle: "Window Tinting Services",
        link: "https://lessheattint.com/",
      },
      {
        name: "Dluxe Shades",
        subtitle: "Window Shades",
        link: "https://dluxeshades.com/",
      },
      {
        name: "Dias Sublimes",
        subtitle: "Business",
        link: "https://diassublimes.pt/",
      },
      {
        name: "TopSpot (Design Prototype)",
        subtitle: "Figma UI/UX Design",
        link: "https://www.figma.com/proto/FjkWa9BvAH97VhKDYUbSws/TOPSPOT?node-id=31-223&t=3FMeVRLMFu4aRTt8-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=31%3A223",
      },
    ],
  },
  {
    category: "Non-Profit",
    projects: [
      {
        name: "Olayemi Adeyemi Foundation",
        subtitle: "Charity Organization",
        link: "https://www.olayemiadeyemifoundation.com/",
      },
    ],
  },
];

export {
  navLinks,
  frontendSkills,
  backendSkills,
  profileLists,
  technicalStrengths,
  softSkills,
  contactInfo,
  availability,
  socials,
  allProjects,
  projectsList,
};
