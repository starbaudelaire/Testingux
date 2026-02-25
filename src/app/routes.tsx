import { createBrowserRouter } from "react-router";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Browse from "./pages/Browse";
import Insights from "./pages/Insights";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Onboarding1,
  },
  {
    path: "/onboarding-2",
    Component: Onboarding2,
  },
  {
    path: "/onboarding-3",
    Component: Onboarding3,
  },
  {
    path: "/browse",
    Component: Browse,
  },
  {
    path: "/insights",
    Component: Insights,
  },
]);
