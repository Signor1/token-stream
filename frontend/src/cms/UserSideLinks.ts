export const NavLinks = [
  {
    name: "Dashboard",
    url: "/user",
  },
  {
    name: "Services",
    url: "/user/services",
  },
  {
    name: "Subscriptions",
    subLinks: [
      {
        name: "Create Subscription",
        url: "/user/createsubscription",
      },
      {
        name: "Update Subscription",
        url: "/user/updatesubscription",
      },
    ],
  },
  {
    name: "Salary Streaming",
    subLinks: [
      {
        name: "Create Salary Stream",
        url: "/user/createsalarystream",
      },
      {
        name: "Update Salary Stream",
        url: "/user/updatesalarystream",
      },
    ],
  },
];
