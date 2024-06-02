import { lazy } from "react";

// guest routes
const Home = lazy(() => import("../pages/guest/index"));
const Disclaimer = lazy(() => import("../pages/guest/Disclaimer"));
const PrivacyPolicy = lazy(() => import("../pages/guest/PrivacyPolicy"));
const TermsAndCondition = lazy(
  () => import("../pages/guest/TermsAndCondition")
);

//user routes
const UserDashboard = lazy(() => import("../pages/user/index"));
const Services = lazy(() => import("../pages/user/Services"));
const CreateSalaryStream = lazy(
  () => import("../pages/user/CreateSalaryStream")
);
const UpdateSalaryStream = lazy(
  () => import("../pages/user/UpdateSalaryStream")
);
const CreateSubscription = lazy(
  () => import("../pages/user/CreateSubscription")
);
const UpdateSubscription = lazy(
  () => import("../pages/user/UpdateSubscription")
);

//admin routes
const AdminDashboard = lazy(() => import("../pages/admin/index"));
const ListOfUsers = lazy(() => import("../pages/admin/ListOfUsers"));
const CreateSubscriptionPlan = lazy(
  () => import("../pages/admin/CreateSubscriptionPlan")
);
const UpdateSubscriptionPlan = lazy(
  () => import("../pages/admin/UpdateSubscriptionPlan")
);
const DailySalaryStream = lazy(
  () => import("../pages/admin/DailySalaryStream")
);
const MonthlySalaryStream = lazy(
  () => import("../pages/admin/MonthlySalaryStream")
);

type Route = {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};
type coreRoutes = Route[];

// guest pages
const guestRoutes: coreRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/disclaimer",
    title: "Disclaimer",
    component: Disclaimer,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms-and-conditions",
    title: "Terms and Condition",
    component: TermsAndCondition,
  },
];

export const guest_routes = [...guestRoutes];

// users ROUTes
const userRoutes: coreRoutes = [
  {
    path: "/user",
    title: "User Dashboard",
    component: UserDashboard,
  },
  {
    path: "/user/services",
    title: "Services",
    component: Services,
  },
  {
    path: "/user/createsubscription",
    title: "Create Subscription",
    component: CreateSubscription,
  },
  {
    path: "/user/updatesubscription",
    title: "Update Subscription",
    component: UpdateSubscription,
  },
  {
    path: "/user/createsalarystream",
    title: "Create Salary Stream",
    component: CreateSalaryStream,
  },
  {
    path: "/user/updatesalarystream",
    title: "Update Salary Stream",
    component: UpdateSalaryStream,
  },
];
export const user_routes = [...userRoutes];

// admin routes
const adminRoutes: coreRoutes = [
  {
    path: "/admin",
    title: "Admin Dashboard",
    component: AdminDashboard,
  },
  {
    path: "/admin/users",
    title: "Users",
    component: ListOfUsers,
  },
  {
    path: "/admin/createsubscriptionplan",
    title: "Create Subscription Plan",
    component: CreateSubscriptionPlan,
  },
  {
    path: "/admin/updatesubscriptionplan",
    title: "Update Subscription Plan",
    component: UpdateSubscriptionPlan,
  },
  {
    path: "/admin/dailysalarystreams",
    title: "Daily Salary Streams",
    component: DailySalaryStream,
  },
  {
    path: "/admin/monthlysalarystreams",
    title: "Monthly Salary Streams",
    component: MonthlySalaryStream,
  },
];
export const admin_routes = [...adminRoutes];
