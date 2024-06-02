type NavObject = {
  name: string;
  path: string;
};

type NavArray = NavObject[];

export const NavLinks: NavArray = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "FAQs",
    path: "faqs",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

export const OtherLinks: NavArray = [
  {
    name: "News",
    path: "/",
  },
  {
    name: "Team",
    path: "/",
  },
  {
    name: "API Docs",
    path: "/",
  },
];

export const LegalLinks: NavArray = [
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    path: "/terms-and-conditions",
  },
  {
    name: "Disclaimer",
    path: "/disclaimer",
  },
];
