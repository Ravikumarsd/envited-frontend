import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Event from "./Event/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/event",
    element: <Event />,
  },
]);
export default router;
