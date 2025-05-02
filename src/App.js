import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
