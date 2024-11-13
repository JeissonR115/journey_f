/* existing imports */
import App from "../App";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JourneySpecial } from "../components/";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/journey/special",
    element: <JourneySpecial />,
  },
]);
export const Root = () => <RouterProvider router={router} />;
