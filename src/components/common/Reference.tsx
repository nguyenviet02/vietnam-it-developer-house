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
    </div>
  );
};

export default Reference;
