import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Categories from "./components/categories/Categories";
import Navigation from "./components/navigation/Navigation";
import SignInUp from "./components/signInUP/SignInUp";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <>
      {location.pathname !== "/signInUp" && <Navigation />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Categories categories={categories} />}
        />
        <Route exact path="/signInUp" element={<SignInUp />} />
      </Routes>
      {location.pathname !== "/signInUp" && <Footer />}
    </>
  );
}

export default App;
