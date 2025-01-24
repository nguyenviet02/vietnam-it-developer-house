import AboutUs from "@components/AboutUs";
import Benefits from "@components/Benefits";
import Hero from "@components/Hero";
import MainLayout from "@layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Benefits />
    </MainLayout>
  );
}

export default App;
