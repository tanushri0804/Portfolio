import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
    </Routes>
  );
};

export default App;
