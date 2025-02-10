import ITSLogo from "@images/ITS-logo.svg";
import ITSKoreaLogo from "@images/ITSKorea-logo.svg";

import Ref1Img from "@images/ref1.png";
import Ref2Img from "@images/ref2.png";
import Ref3Img from "@images/ref3.png";
import Ref4Img from "@images/ref4.png";

const Reference = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#010021] pb-6">
      <div className="grid w-full grid-cols-4">
        <img className="size-full object-cover" src={Ref1Img} alt="" />
        <img className="size-full object-cover" src={Ref2Img} alt="" />
        <img className="size-full object-cover" src={Ref3Img} alt="" />
        <img className="size-full object-cover" src={Ref4Img} alt="" />
      </div>
      <div className="flex w-full items-center justify-center ~gap-4/10 ~py-4/8">
        <span className="font-bold uppercase text-white ~text-[0.75rem]/[1.25rem] ~leading-[1.125rem]/[2.25rem]">
          Hosted on
        </span>
        <img src={ITSLogo} className="h-auto ~w-[8.2rem]/[14.375rem]" alt="" />
        <img src={ITSKoreaLogo} className="h-auto ~w-[8.2rem]/[14.375rem]" alt="" />
      </div>
      <span className="text-center text-[1.125rem] font-extrabold leading-[1.5rem]">
        후원 기관: 베트남 중소 IT 기업 연합
      </span>
    </div>
  );
};

export default Reference;
