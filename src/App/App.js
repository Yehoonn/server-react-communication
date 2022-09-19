import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import About from "../Components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
