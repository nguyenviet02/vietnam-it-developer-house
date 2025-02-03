import AboutUs from "@components/AboutUs";
import Benefits from "@components/Benefits";
import EventHighlight from "@components/EventHighlight";
import Hero from "@components/Hero";
import MainLayout from "@layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Benefits />
      <EventHighlight />
    </MainLayout>
  );
}

export default App;
