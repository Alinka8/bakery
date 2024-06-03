import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import OrderForm from "./components/Order/Order";
import Footer from "./components/Footer/Footer";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <HomePage />
      <Products />
      <About />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
