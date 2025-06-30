import "./App.css";
import HeroSection from "./components/HeroSection";
import ProjectDetails from "./components/ProjectDetails";
// import LocationInfo from "./components/LocationInfo";
import LeadForm from "./components/LeadForm";
import Amenities from "./components/Amenities";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ProjectDetails />
      <LeadForm />
      <Amenities />
      {/* <LocationInfo /> */}
    </div>
  );
}

export default App;
