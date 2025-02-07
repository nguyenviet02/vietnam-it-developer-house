import ITSLogo from "@images/home-about-event-bg.png";
import AboutEventImage from "@images/home-about-event.png";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router";

const AboutEvent = () => {
  const location = useLocation();
  const aboutEventRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (location.hash === "#about-event") {
      if (aboutEventRef.current) {
        aboutEventRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [location.hash]);
  const navigation = [
    {
      id: 1,
      text: "한국기업을 위한 IT아웃소싱 성공전략",
      href: "/success-strategies",
    },
    {
      id: 2,
      text: "웹3 오딧세이: 빌더, 트렌드, 그리고 미래",
      href: "/web3-odyssey",
    },
  ];
  return (
    <div
      id="#about-event"
      ref={aboutEventRef}
      className="relative mx-auto w-full max-w-container overflow-hidden py-[3.625rem]"
    >
      <img
        src={ITSLogo}
        className="absolute right-0 -z-[1] -translate-y-[30%] opacity-20"
        alt=""
      />
      <div className="~px-4/[5rem]">
        <h3 className="mb-2 text-[1rem] font-bold leading-[1.25rem] text-primary">
          About this event
        </h3>
        <h2 className="text-linear-gradient font-extrabold ~text-[2rem]/[4rem] ~leading-[2.5rem]/[4.75rem]">
          이 이벤트에 대하여
        </h2>
      </div>
      <div className="mt-[3.875rem] flex w-full flex-col items-center gap-[4.7rem] lg:flex-row">
        <img src={AboutEventImage} className="h-auto w-full" alt="" />
        <div className="flex flex-col gap-[3rem] px-4 lg:pr-[5rem]">
          <div className="flex flex-col ~gap-3/6">
            <h2 className="flex flex-col text-[3rem] font-extrabold leading-[3.375rem]">
              <span className="text-linear-gradient">Vietnam IT</span>
              <span className="text-primary">DEVELOPER란?</span>
            </h2>
            <p className="text-[1rem] font-light leading-[1.25rem] text-primary">
              이 행사는 베트남과 한국의 IT 기업 및 스타트업 간 기술 협력을
              촉진하고, 해외 IT 인재를 발굴할 수 있는 기회를 제공하는 것을
              목표로 합니다. 또한, 한국 기업들의 베트남 IT 아웃소싱 협력에 대한
              궁금증을 해소하는 자리일 뿐만 아니라, 전통적인 소프트웨어 개발부터
              블록체인, AI, 그리고 탈중앙화 생태계에 이르기까지 전통 기술 및
              블록체인 기술 트렌드에 대한 논의의 장을 마련합니다
            </p>
          </div>
          <div className="flex flex-col ~gap-3/6">
            {navigation.map((item) => {
              return (
                <a
                  href={item.href}
                  key={item.id}
                  className="group flex items-center justify-between text-[1rem] font-extrabold leading-[1.25rem] text-primary hover:text-[#DC0611]"
                >
                  <span>{item.text}</span>
                  <div className="flex items-center justify-center rounded-full bg-[#DDDDDD] p-3 group-hover:bg-red">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-red group-hover:fill-white"
                    >
                      <path d="M17.6895 11.25H3.75C3.55109 11.25 3.36032 11.329 3.21967 11.4696C3.07902 11.6103 3 11.8011 3 12C3 12.1989 3.07902 12.3896 3.21967 12.5303C3.36032 12.671 3.55109 12.75 3.75 12.75H17.6895L12.219 18.219C12.0782 18.3598 11.9991 18.5508 11.9991 18.75C11.9991 18.9491 12.0782 19.1401 12.219 19.281C12.3598 19.4218 12.5508 19.5009 12.75 19.5009C12.9492 19.5009 13.1402 19.4218 13.281 19.281L20.031 12.531C20.1008 12.4613 20.1563 12.3785 20.1941 12.2874C20.2319 12.1963 20.2513 12.0986 20.2513 12C20.2513 11.9013 20.2319 11.8036 20.1941 11.7125C20.1563 11.6214 20.1008 11.5386 20.031 11.469L13.281 4.71897C13.1402 4.57814 12.9492 4.49902 12.75 4.49902C12.5508 4.49902 12.3598 4.57814 12.219 4.71897C12.0782 4.8598 11.9991 5.05081 11.9991 5.24997C11.9991 5.44913 12.0782 5.64014 12.219 5.78097L17.6895 11.25Z" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
