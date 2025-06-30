import "./App.css";
import HeroSection from "./components/HeroSection";
import ProjectDetails from "./components/ProjectDetails";
import LocationInfo from "./components/LocationInfo";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ProjectDetails />
      <LocationInfo />
    </div>
  );
}

export default App;
