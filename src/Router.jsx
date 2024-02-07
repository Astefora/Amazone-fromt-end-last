import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Result/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Result from "./Pages/Result/Result";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
//   "pk_test_51OU6YoIrgvX7vjwlwFwZFFmBbuXRo77ewG49UZBndLITKEtINgOsTCmKbx4dvva5opJQYlTggPJ3SuK3HpprL1Pj006REMjwGf"
// );
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />

        <Route path="/order" element={<Orders />} />
        <Route path="/category/:CategoryName" element={<Result />} />
        <Route path="/Products/:ProductId" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
