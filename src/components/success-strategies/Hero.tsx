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
              2025/03/18~19 | 서울, 한국
            </span>
            <h2 className="font-extrabold ~text-[1.45rem]/[3rem] ~leading-[1.75rem]/[3.5rem]">
              세션 1: 한국기업을 위한 IT아웃소싱 성공전략
            </h2>
            <h3 className="max-w-[56.125rem] text-center text-[1.25rem] leading-[2.25rem]">
              한국 IT 기업과 베트남의 우수한 기술 인력을 연결하는 데 중점을
              두며, 신뢰할 수 있는 아웃소싱 파트너와의 협력 기회를 제공합니다.
              업계 전문가들이 실무 경험을 공유하여 한국 기업이 협력 프로세스를
              명확히 이해하고, 비용을 최적화하며, 베트남 기술 시장의 잠재력을
              효과적으로 활용할 수 있도록 지원합니다.
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
