import BenefitsCommon from "@components/common/BenefitsCommon";
import Benefit1 from "@icons/benefit-1.svg";
import Benefit2 from "@icons/benefit-2.svg";
import Benefit3 from "@icons/benefit-3.svg";
import Benefit4 from "@icons/benefit-4.svg";

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
  return <BenefitsCommon benefits={benefits} />;
};

export default Benefits;
