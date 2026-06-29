import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CertificationsPage from "./pages/CertificationsPage";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
};

export default App;
