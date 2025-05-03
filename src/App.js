import ApiBlock from "./components/ApiBlock/ApiBlock";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SecurityBlock from "./components/SecurityBlock/SecurityBlock";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Dashboard />
      <ApiBlock />
      <SecurityBlock />
      <Offer />
    </div>
  );
}

export default App;
