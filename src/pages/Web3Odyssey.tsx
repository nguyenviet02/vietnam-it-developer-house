import Reference from "@components/common/Reference";
import Sponsor from "@components/common/Sponsor";
import Benefits from "@components/web3-odyssey/Benefits";
import EventHighlight from "@components/web3-odyssey/EventHighlight";
import Hero from "@components/web3-odyssey/Hero";
import PreRegistration from "@components/web3-odyssey/PreRegistration";

const Web3Odyssey = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <EventHighlight />
      <PreRegistration />
      <Reference />
      <Sponsor />
    </>
  );
};

export default Web3Odyssey;
