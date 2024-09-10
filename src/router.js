import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
const router = createBrowserRouter([

    {
      path: "/",
      element: <App/>,
    },

   
 
  
  ]);
  export default router;