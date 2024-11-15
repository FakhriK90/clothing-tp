import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Categories from "./components/categories/Categories";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signInUP/SignIn";
import SignUp from "./components/signInUP/SignUp";

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
      title: "Women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

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
      </Routes>
      {location.pathname !== "/signUp" && location.pathname !== "/signIn" && <Footer />}
    </>
  );
}

export default App;
