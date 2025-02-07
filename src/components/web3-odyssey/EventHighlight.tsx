import ListTimeline from "@components/common/ListTimeline";
import EventHighlightBg from "@images/home-about-event-bg.png";
import BackgroundTimeline1 from "@images/timeline1.png";

const EventHighlight = () => {
  const listTimeline = [
    {
      id: 1,
      date: "2025/03/20",
      background: BackgroundTimeline1,
      detail: [
        {
          time: "09:00 ~ 09:30",
          title: "체크인",
        },
        {
          time: "09:30 ~ 09:40",
          title: "개막",
        },
        {
          time: "09:40 ~ 10:00",
          title: "아이스티 소프트웨어 개발한 프로덕트 체험",
        },
        {
          time: "10:00 ~ 10:15",
          title: "아이스티 소프트웨어 대표이사: 웹3에서의 AI는 무엇인가?",
          isSpotlight: true,
        },
        {
          time: "10:15 ~ 11:30",
          title: "Web3 개발을 위한 전담팀 &  해외 파트너와의 협력 사례",
          isSpotlight: true,
        },
        {
          time: "11:30 ~ 12:00",
          title: "Q&A",
        },
        {
          time: "12:00 ~ 13:00",
          title: "점심 식사 (베트남 음식 체험)",
        },
        {
          time: "13:00 ~ 13:30",
          title: "아이스티 소프트웨어 개발한 프로덕트 체험",
        },
        {
          time: "13:30 ~ 13:45",
          title: "아이스티 소프트웨어 대표이사: 웹3에서의 AI는 무엇인가?",
          isSpotlight: true,
        },
        {
          time: "13:45 ~ 14:00",
          title: "Web3 개발을 위한 전담팀 &  해외 파트너와의 협력 사례",
          isSpotlight: true,
        },
        {
          time: "14:00 ~ 14:30",
          title: "Q&A",
        },
      ],
    },
  ];
  return (
    <div className="relative flex w-full justify-center">
      <img
        src={EventHighlightBg}
        className="absolute right-0 -z-[1] h-auto w-[50%] -translate-y-1/2 object-contain opacity-20"
        alt=""
      />
      <section className="z-10 flex size-full max-w-container flex-col items-start ~gap-[2.25rem]/[5.25rem]">
        <div className="flex flex-col gap-4 ~px-4/[5rem]">
          <h2 className="~text-[0.875rem]/6 font-medium uppercase text-primary ~leading-[1.125rem]/7">
            Agenda Event * Highlight
          </h2>
          <h1 className="text-linear-gradient font-bold ~text-[1.5rem]/[4rem] ~leading-[1.75rem]/[4.75rem]">
            이벤트 일정 & 하이라이트
          </h1>
          <h3 className="text-[1rem] leading-5 text-primary">
            이벤트는 2일 동안 진행되며, 매일 각 분야에서 소프트웨어 개발
            성공사례를 공유합니다.
          </h3>
        </div>
        <ListTimeline timelines={listTimeline} />
      </section>
    </div>
  );
};

export default EventHighlight;
