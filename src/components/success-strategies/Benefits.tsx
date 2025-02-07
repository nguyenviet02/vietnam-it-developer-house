import AboutUsImg1 from "@images/aboutus-1.png";
import AboutUsImg2 from "@images/aboutus-2.png";
import AboutUsImg3 from "@images/aboutus-3.png";
import AboutUsImg4 from "@images/aboutus-4.png";
import AboutUsImg5 from "@images/aboutus-5.png";

import Benefit1 from "@icons/benefit-1.svg";
import Benefit2 from "@icons/benefit-2.svg";
import Benefit3 from "@icons/benefit-3.svg";
import Benefit4 from "@icons/benefit-4.svg";

import ITSLogo from "@images/ITSLogo.png";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icons: Benefit1,
      title: "1:1 비즈 매칭",
      description:
        "참여자분 은 이벤트에서 잠재 파트너와의 만남 및 교류를 위해 일정이 조정됨",
    },
    {
      id: 2,
      icons: Benefit2,
      title: "베트남 IT아웃소싱에 대한 토론 섹션",
      description:
        "한국 기업들을 위한 베트남 IT 아우소싱 협력에 대한 절차, 법률, 보안 및 계약에 관한 질문 해답",
    },
    {
      id: 3,
      icons: Benefit3,
      title: "파트너 네트워크 구축",
      description:
        "참여자분 은 이벤트에서 잠재 파트너와의 만남 및 교류를 위해 일정이 조정됨",
    },
    {
      id: 4,
      icons: Benefit4,
      title: "선물",
      description:
        "협력 시 디스카운트 쿠폰 및 프로그램 주최 측에서 선물 받을 기회",
    },
  ];
  return (
    <div className="relative size-full">
      <div className="absolute left-0 top-0 z-0 flex size-full h-fit flex-col justify-start xl:relative">
        {/* Line image 1 */}
        <div className="flex size-full">
          <img
            src={AboutUsImg1}
            className="h-auto w-1/3 flex-1 object-cover ~max-h-[5.3rem]/[20.5rem]"
            alt=""
          />
          <img
            src={AboutUsImg2}
            className="h-auto w-1/3 flex-1 object-cover ~max-h-[5.3rem]/[20.5rem]"
            alt=""
          />
          <img
            src={AboutUsImg3}
            className="h-auto w-1/3 flex-1 object-cover ~max-h-[5.3rem]/[20.5rem]"
            alt=""
          />
        </div>

        {/* Line image 2 */}
        <div className="flex size-full">
          <img
            src={AboutUsImg4}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
          <img
            src={AboutUsImg4}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
          <img
            src={AboutUsImg4}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
          <img
            src={AboutUsImg4}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
        </div>

        {/* Line image 3 */}
        <div className="flex size-full">
          <img
            src={AboutUsImg5}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
          <img
            src={AboutUsImg4}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
          <img
            src={AboutUsImg5}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
          <img
            src={AboutUsImg4}
            className="h-auto w-1/4 flex-1 object-cover ~max-h-[4.5rem]/[15.625rem]"
            alt=""
          />
        </div>
      </div>
      <div className="relative size-full max-w-container ~px-4/[6.875rem] ~pt-10/[9rem] xl:absolute xl:left-1/2 xl:top-1/2 xl:h-fit xl:-translate-x-1/2 xl:-translate-y-1/2 xl:pt-0">
        <div className="relative flex w-full max-w-container flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#330304] px-[2.125rem] ~pt-[1.375rem]/[3.25rem] xl:h-fit">
          <img
            src={ITSLogo}
            className="absolute left-0 top-0 h-full max-h-[50rem] w-auto min-w-[28.75rem] opacity-10"
            alt=""
          />
          <h2 className="~text-[1.5rem]/[4rem] ~mb-[1.5rem]/[2.625rem] ~leading-[1.75rem]/[4.75em]">
            참여 혜택
          </h2>
          <div className="grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {benefits.map((benefit) => {
              return (
                <div
                  key={benefit.id}
                  className="flex h-fit min-h-[18.125rem] flex-col items-center rounded-xl bg-white px-7 pt-[38px] ~gap-[1rem]/[1.5rem]"
                >
                  <img className="size-[60px]" src={benefit.icons} alt="" />
                  <h3 className="text-[1.5rem] font-bold leading-[1.75rem] text-[#A50101]">
                    {benefit.title}
                  </h3>
                  <p className="text-[1rem] font-light leading-[1.25rem] text-primary">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
