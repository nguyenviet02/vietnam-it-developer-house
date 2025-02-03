import AboutUs from "@components/AboutUs";
import Benefits from "@components/Benefits";
import EventHighlight from "@components/EventHighlight";
import Gifts from "@components/Gifts";
import Hero from "@components/Hero";
import PreRegistration from "@components/PreRegistration";
import Reference from "@components/Reference";
import MainLayout from "@layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Benefits />
      <EventHighlight />
      <Gifts />
      <PreRegistration />
      <Reference />
    </MainLayout>
  );
}

export default App;
