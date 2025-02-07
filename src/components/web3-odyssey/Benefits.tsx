import BenefitsCommon from "@components/common/BenefitsCommon";
import Benefit1 from "@icons/benefit-1.svg";
import Benefit2 from "@icons/benefit-2.svg";
import Benefit3 from "@icons/benefit-3.svg";
import Benefit4 from "@icons/benefit-5.svg";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icons: Benefit1,
      title: "네트워킹",
      description:
        "웹3 관련 기업 및 커뮤니티에서 온 창업자 및 빌더들과 밋업의 기회",
    },
    {
      id: 2,
      icons: Benefit2,
      title: "Web3 개발을위한전담팀 활용에대한토론세션",
      description:
        "Web3 프로젝트에 적합한 ODC 팀 구성 방식과 프로세스에 대한 궁금증을 해결할 기회",
    },
    {
      id: 3,
      icons: Benefit3,
      title: "Web3에서의 AI 활용에대한토론",
      description: "Web3에 AI활용가능성 및 미래전망",
    },
    {
      id: 4,
      icons: Benefit4,
      title: "아이스티 소프트웨어 개발한 프로덕트 체험",
      description:
        "아이스티 소프트웨어가 개발한 미니 게임, 런치패드, 마켓플레이스 등 체험",
    },
  ];
  return <BenefitsCommon benefits={benefits} />;
};

export default Benefits;
