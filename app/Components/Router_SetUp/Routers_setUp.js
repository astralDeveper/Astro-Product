import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About_1 from "../ABOUT_US_PAGE/About_1";
import Contact_1 from "../Contact_US_PAGE/Contact_1";
import Service from "../SERVICES_PAGE/Service";
import WebDev from "../Inner_Pages/Web/WebDev";
// import Digi from "../Inner_Pages/Web/App_dev";
import App_dev from "../Inner_Pages/Web/App_dev";
import UiDes from "../Inner_Pages/Web/UiDes";
import Isuue from "../Inner_Pages/Web/Isuue";
import HomePage from "../HomePage/HomePage";
import Seo from "../Inner_Pages/Web/Seo";
import DigiTal from "../Inner_Pages/Web/DigiTal";
import Product from "../Inner_Pages/Web/Product";
import Graphic from "../Inner_Pages/Web/Graphic";
import Ecome from "../Inner_Pages/Web/Ecome";
import Products from "../Product_Pages/Product";
import Cart from "../Product_Pages/Cart";
import ProductDetails from "../Product_Pages/ProductDetails";
import Checkout from "../Checkout/Checkout";
const routerSetup = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/About",
    element: <About_1 />,
  },
  {
    path: "/Contact",
    element: <Contact_1 />,
  },
  {
    path: "/Services",
    element: <Service />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/Services/Web_development",
    element: <WebDev />,
  },
  {
    path: "/Services/Digital_Marketing",
    element: <DigiTal />,
  },
  {
    path: "/Services/UI/UX",
    element: <UiDes />,
  },
  {
    path: "/Services/App_development",
    element: <App_dev />,
  },
  {
    path: "/Services/Quality_Assurance",
    element: <Isuue />,
  },
  {
    path: "/Services/SEO",
    element: <Seo />,
  },
  {
    path: "/Services/Product_Management",
    element: <Product />,
  },
  {
    path: "/Services/Graphics_Designing",
    element: <Graphic />,
  },
  {
    path: "/Services/Ecommerce",
    element: <Ecome />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
export default routerSetup;
