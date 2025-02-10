import ListTimeline from "@components/common/ListTimeline";
import EventHighlightBg from "@images/home-about-event-bg.png";
import BackgroundTimeline1 from "@images/timeline1.png";
import BackgroundTimeline2 from "@images/timeline2.png";

const EventHighlight = () => {
  const listTimeline = [
    {
      id: 1,
      date: "2025/03/18",
      background: BackgroundTimeline1,
      detail: [
        {
          time: "09:00 ~ 09:30",
          title: "체크인",
        },
        {
          time: "09:30 ~ 09:45",
          title: "개막",
        },
        {
          time: "09:45 ~ 10:00",
          title: "IT아웃소싱 소개",
        },
        {
          time: "10:00 ~ 10:15",
          title: "후원자 회사 소개",
        },
        {
          time: "10:15 ~ 10:30",
          title: "성공 사례: 한국 기업이 베트남 기업과 협력 과정에 대해 발표",
          isHighlight: true,
        },
        {
          time: "10:30 ~ 11:15",
          title: "Q&A - 기업 대표자 답변",
        },
        {
          time: "11:15 ~ 12:00",
          title: "미니게임",
        },
        {
          time: "12:00 ~ 13:00",
          title: "점심 (베트남 음식 체험)",
        },
        {
          time: "13:00 ~ 13:10",
          title: "기존 앱에 블록체인 기술 통합",
        },
        {
          time: "13:10 ~ 15:00",
          title: " 1:1비즈매칭",
          isSpotlight: true,
        },
      ],
    },
    {
      id: 2,
      date: "2025/03/19",
      background: BackgroundTimeline2,
      detail: [
        {
          time: "09:00 ~ 09:30",
          title: "체크인",
        },
        {
          time: "09:30 ~ 09:45",
          title: "IT아웃소싱 소개",
        },
        {
          time: "09:45 ~ 10:00",
          title: "아이스티 소프트웨어 회사 소개",
        },
        {
          time: "10:00 ~ 10:45",
          title: "성공 사례: 베트남 아웃소싱 회사와 협력 사례 발표",
          isHighlight: true,
        },
        {
          time: "10:45 ~ 11:00",
          title: "Q&A - 기업 대표자 답변",
        },
        {
          time: "11:00 ~ 11:45",
          title: "미니게임",
        },
        {
          time: "12:00 ~ 13:00",
          title: "점심 (베트남 음식 체험)",
        },
        {
          time: "13:00 ~ 13:10",
          title: "Web2에서 Web3로의 전환 상담",
        },
        {
          time: "13:10 ~ 15:00",
          title: "1:1비즈매칭",
          isSpotlight: true,
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
            아이스티 소프트웨어 개발한 프로덕트 체험, Web3 창업자 및 빌더들과
            네트워크 등 무궁무진한 활동이 기다리리고 있습니다.
          </h3>
        </div>
        <ListTimeline timelines={listTimeline} />
      </section>
    </div>
  );
};

export default EventHighlight;
