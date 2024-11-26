import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import categories from "./Products-data.js";
import Categories from "./components/categories/Categories";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signInUP/SignIn";
import SignUp from "./components/signInUP/SignUp";
import Shop from "./components/shop/Shop.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
  const location = useLocation();


  return (
    <>
      {location.pathname !== "/signUp" && location.pathname !== "/signIn" && <Navigation />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Categories categories={categories} />}
        />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      {location.pathname !== "/signUp" && location.pathname !== "/signIn" && <Footer />}
    </>
  );
}

export default App;
