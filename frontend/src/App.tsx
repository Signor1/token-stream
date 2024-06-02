import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Preloader from "./utils/Preloader";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import PageNotFound from "./utils/PageNotFound";
// import { ToastContainer } from "react-toastify";
//react-toastify css
// import "react-toastify/dist/ReactToastify.css";

import { lazy } from "react";
import { admin_routes, guest_routes, user_routes } from "./routes";
import UserLayout from "./layouts/UserLayout";
import { configWeb3Modal } from "./connection";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
const Signup = lazy(() => import("./pages/auth/index"));

//web3 Modal configuration function call
configWeb3Modal();

const App = () => {
  return (
    <main className="w-full min-h-screen bg-gray-950" id="heroPattern">
      <ScrollToTop />
      <Suspense fallback={<Preloader />}>
        <Routes>
          {guest_routes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              index={path === "/"}
              path={path}
              element={<Component />}
            />
          ))}

          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<UserLayout />}>
            {user_routes.map(({ path, component: Component }, index) => (
              <Route
                key={index}
                index={path === "/user"}
                path={path}
                element={<Component />}
              />
            ))}
          </Route>
          <Route element={<AdminLayout />}>
            {admin_routes.map(({ path, component: Component }, index) => (
              <Route
                key={index}
                index={path === "/admin"}
                path={path}
                element={<Component />}
              />
            ))}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
    </main>
  );
};

export default App;
