import ApiBlock from "./components/ApiBlock/ApiBlock";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SecurityBlock from "./components/SecurityBlock/SecurityBlock";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./providers/ThemeProvider/useTheme";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <Navbar />
      <Header />
      <Dashboard />
      <ApiBlock />
      <SecurityBlock />
      <Offer />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
