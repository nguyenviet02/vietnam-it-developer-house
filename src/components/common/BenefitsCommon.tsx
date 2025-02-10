import AboutUsImg1 from "@images/aboutus-1.png";
import AboutUsImg2 from "@images/aboutus-2.jpg";
import AboutUsImg3 from "@images/aboutus-3.png";
import AboutUsImg4 from "@images/aboutus-4.png";

import ITSLogo from "@images/ITSLogo.png";

type Props = {
  benefits: {
    id: number;
    icons: string;
    title: string;
    description: string;
  }[];
};

const BenefitsCommon = ({ benefits }: Props) => {
  return (
    <div className="relative flex size-full justify-center pb-[4rem]">
      <div className="absolute left-0 top-0 z-0 flex size-full h-fit flex-col justify-start">
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
      </div>
      <div className="relative size-full max-w-container ~px-4/[5rem] ~pt-10/[9rem]">
        <div className="relative flex w-full max-w-container flex-col items-center justify-center overflow-hidden rounded-2xl bg-primary px-[2.125rem] ~py-[1.375rem]/[2rem] xl:h-fit">
          <img
            src={ITSLogo}
            className="absolute left-0 top-0 h-full max-h-[50rem] w-auto min-w-[28.75rem] opacity-10"
            alt=""
          />
          <h2 className="font-extrabold ~text-[1.5rem]/[4rem] ~mb-[1.5rem]/[2.625rem] ~leading-[1.75rem]/[4.75em]">
            참여 혜택
          </h2>
          <div className="grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {benefits.map((benefit) => {
              return (
                <div
                  key={benefit.id}
                  className="flex h-full min-h-[16.125rem] flex-col items-center rounded-xl bg-white px-7 py-[38px] ~gap-[1rem]/[1.5rem]"
                >
                  <img className="size-[60px]" src={benefit.icons} alt="" />
                  <h3 className="text-center text-[1.5rem] font-bold leading-[1.75rem] text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-center text-[1rem] font-light leading-[1.25rem] text-primary">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2 py-[1.875rem]">
            <span className="font-medium ~text-[0.875rem]/[1.25rem] ~leading-[1rem]/[1.5rem]">
              IT아웃소싱 서비스 이용 시 최대
            </span>
            <span className="font-extrabold ~text-[0.75rem]/[2.25rem] ~leading-[1rem]/[3.375rem]">
              20% 할인 바우처
            </span>
            <span className="font-medium ~text-[0.875rem]/[1.25rem] ~leading-[1rem]/[1.5rem]">
              유효 기간:{" "}
              <span className="text-linear-gradient-2">2025년 6월 30일</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCommon;
