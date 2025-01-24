import AboutUsBg from "@images/aboutus-bg.png";
import ITSLogo from "@icons/its-logo.svg";

const AboutUs = () => {
  return (
    <div className="size-full">
      {/* Content */}
      <div className="relative flex size-full flex-col items-center justify-center">
        <img src={AboutUsBg} alt="" className="absolute -z-[1] size-full" />
        <div className="flex w-full max-w-container flex-col items-center justify-center ~gap-2/7 ~px-[1.125rem]/[18.1875rem] ~pt-[1.375rem]/[6.875rem]">
          <div>
            <h2 className="text-center font-bold ~text-[1.125rem]/[4rem] ~leading-[1.5rem]/[4.75rem]">
              Vietnam IT Developer
            </h2>
            <h2 className="text-center font-bold ~text-[1.125rem]/[4rem] ~leading-[1.5rem]/[4.75rem]">
              House는 무엇인가?
            </h2>
          </div>
          <h3 className="text-center font-bold ~text-[0.75rem]/[1.25rem] ~leading-[1.125rem]/[2.25rem]">
            이 이벤트는 베트남과 한국의 IT 기업 및 스타트업 간 기술 협력을
            증진하고, 한국 IT 기업들이 베트남 IT 아웃소싱 기업과 협력하는
            과정에서 직면하는 다양한 궁금증과 과제를 해결하는 데 중점을 둡니다.
          </h3>
        </div>
        <div className="flex items-center ~mt-[0.875rem]/[3.25rem] ~gap-2/8 ~pb-[2.25rem]/[8.5rem]">
          <p>Hosted on</p>
          <img src={ITSLogo} className="h-auto ~w-[3.875rem]/[15rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
