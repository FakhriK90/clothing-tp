import { Route, Routes } from "react-router-dom";
import './App.scss'
import Categories from './components/categories/Categories'
import Navigation from "./components/navigation/Navigation";

function App() {
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
    <Route exact path="/" element={<Categories categories={categories} />} />
    </Routes>
    </>
  )
}

export default App
