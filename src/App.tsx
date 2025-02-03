import AboutUs from "@components/AboutUs";
import Benefits from "@components/Benefits";
import EventHighlight from "@components/EventHighlight";
import Gifts from "@components/Gifts";
import Hero from "@components/Hero";
import MainLayout from "@layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Benefits />
      <EventHighlight />
      <Gifts />
    </MainLayout>
  );
}

export default App;
