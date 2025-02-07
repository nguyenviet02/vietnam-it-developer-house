import HeroBg from "@images/hero-bg.png";
import ITSLogo from "@images/ITS-logo.svg";

const Hero = () => {
  return (
    <div className="relative flex size-full flex-col justify-center ~min-h-[14.0625rem]/[49.8125rem]">
      <img src={HeroBg} className="absolute -z-[1] size-full" alt="" />
      <div className="flex size-full max-w-container flex-col items-center justify-center ~px-4/[5rem]">
        <div className="flex size-full flex-col items-center justify-center text-white ~gap-[0.5625rem]/[1.5rem] ~pt-[4.875rem]/[11.875rem]">
          <div className="flex w-full items-center justify-center ~gap-4/8 ~py-4/8">
            <span className="font-bold uppercase text-white ~text-[0.75rem]/[1.25rem] ~leading-[1.125rem]/[2.25rem]">
              Hosted on
            </span>
            <img
              src={ITSLogo}
              className="h-auto ~w-[8.2rem]/[14.375rem]"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-extrabold ~text-[0.75rem]/[1.5rem] ~leading-4/[1.75rem]">
              2025/03/20 | 서울, 한국
            </span>
            <h2 className="font-extrabold ~text-[1.45rem]/[3rem] ~leading-[1.75rem]/[3.5rem]">
              웹3 오딧세이: 빌더, 트렌드, 그리고 미래
            </h2>
            <h3 className="max-w-[56.125rem] text-center text-[1.25rem] leading-[2.25rem]">
              이 행사는 베트남과 블록체인 전문 한국 기업 간의 기술 협력을
              촉진하고, 블록체인을 기존 앱에 통합하려는 기업들이 해외 IT 인재를
              찾고 팀을 구축하는 데 도움을 주는 것을 목표로 합니다. 또한, 이는
              웹3 창업자 및 개발자들이 네트워킹하고, 웹3에서 AI 트렌드에 대해
              교류할 수 있는 기회이기도 합니다.
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full items-center justify-center bg-[#FFFFFF33] p-4 backdrop-blur">
        <span className="~text-[0.75rem]/[1.5rem] ~leading-[1rem]/[1.75rem]">
          주최사: 아이스티 소프트웨어 및 아이스티 소프트웨어 코리아
        </span>
      </div>
    </div>
  );
};

export default Hero;
