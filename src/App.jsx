import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Form from "./components/Form";
import Success from "./components/success";
import "./App.css";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </Router>
  );
}

export default App;
