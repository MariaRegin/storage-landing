import ApiBlock from "./components/ApiBlock/ApiBlock";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SecurityBlock from "./components/SecurityBlock/SecurityBlock";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Dashboard />
      <ApiBlock />
      <SecurityBlock />
    </div>
  );
}

export default App;
