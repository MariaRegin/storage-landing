import "./App.css";
import ApiBlock from "./components/ApiBlock/ApiBlock";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Dashboard></Dashboard>
      <ApiBlock></ApiBlock>
    </div>
  );
}

export default App;
