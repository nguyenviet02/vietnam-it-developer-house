import Ref1Img from "@images/ref1.png";
import Ref2Img from "@images/ref2.png";
import Ref3Img from "@images/ref3.png";
import Ref4Img from "@images/ref4.png";
import Ref5Img from "@images/ref5.png";

import ITSLogo from "@images/ITS-logo.svg";

const Reference = () => {
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-4">
        <img className="size-full object-cover" src={Ref1Img} alt="" />
        <img className="size-full object-cover" src={Ref2Img} alt="" />
        <img className="size-full object-cover" src={Ref3Img} alt="" />
        <img className="size-full object-cover" src={Ref4Img} alt="" />
      </div>
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-[#B52224] to-[#600018] ~gap-3/6 ~py-2/[2.75rem]">
        <img
          className="size-full ~max-w-[7rem]/[18rem] object-cover"
          src={Ref5Img}
          alt=""
        />
        <img
          className="size-full ~max-w-[7rem]/[18rem] object-cover"
          src={Ref5Img}
          alt=""
        />
        <img
          className="size-full ~max-w-[7rem]/[18rem] object-cover"
          src={Ref5Img}
          alt=""
        />
        <img
          className="size-full ~max-w-[7rem]/[18rem] object-cover"
          src={Ref5Img}
          alt=""
        />
      </div>
      <div className="flex w-full items-center justify-center ~gap-4/8 ~py-4/8">
        <span className="font-bold uppercase text-white ~text-[0.75rem]/[1.25rem] ~leading-[1.125rem]/[2.25rem]">
          Hosted on
        </span>
        <img src={ITSLogo} className="h-auto ~w-[8.2rem]/[14.375rem]" alt="" />
      </div>
    </div>
  );
};

export default Reference;
