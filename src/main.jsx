import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.js";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import PubilcRoutes from "./routes/PubilcRoutes.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Clothes from "./pages/Clothes.jsx";
import Furniture from "./pages/Furniture.jsx";
import Electronics from "./pages/Electronics.jsx";
import Shoes from "./pages/Shoes.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderPlaced from "./pages/OrderPlaced.jsx";
import Orders from "./pages/Orders.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public routes contains URLs accessible to everyone */}
      <Route element={<PubilcRoutes />}>
        <Route index element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/my-orders" element={<Orders />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </Provider>
);
