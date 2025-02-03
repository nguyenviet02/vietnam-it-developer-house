import EventHighlightBg from "@images/event-bg.png";
import SpotlightImg from "@images/spotlight.svg";
import PenImg from "@images/pen.png";

const EventHighlight = () => {
  const listTimeline = [
    {
      id: 1,
      date: "2025/03/18",
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
  ];
  return (
    <div className="relative flex w-full justify-center">
      <img
        src={EventHighlightBg}
        className="absolute right-0 -z-[1] h-auto w-[50%] object-contain"
        alt=""
      />
      <section className="flex size-full max-w-container flex-col items-start ~gap-[2.25rem]/[5.25rem] ~pt-9/[12.75rem]">
        <div className="flex flex-col gap-4 ~px-4/[6.875rem]">
          <h2 className="~text-[0.875rem]/6 font-bold uppercase text-primary ~leading-[1.125rem]/7">
            Agenda Event * Highlight
          </h2>
          <h1 className="text-linear-gradient font-bold ~text-[1.5rem]/[4rem] ~leading-[1.75rem]/[4.75rem]">
            이벤트 일정 & 하이라이트
          </h1>
          <h3 className="text-[1rem] font-light leading-5 text-primary">
            이벤트는 2일 동안 진행되며, 매일 각 분야에서 소프트웨어 개발
            성공사례를 공유합니다.
          </h3>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center ~gap-4/6 ~px-4/[6.875rem]">
          {listTimeline.map((timeline) => {
            return (
              <div
                key={timeline.id}
                className="relative flex max-w-[598px] flex-col rounded-xl bg-blue-400"
              >
                <img src="" alt="" />
                <div className="flex size-full flex-col ~gap-2/4 ~px-[1.125rem]/10 ~pt-6/[4rem] ~pb-6/[3rem]">
                  <button className="w-fit rounded-[30px] bg-gradient-to-r from-[#2250B5] to-[#289BE3] font-bold text-white ~text-[0.75rem]/[1rem] ~px-[0.875rem]/[2.8rem] ~py-[0.375rem]/[0.625rem] ~leading-[0.875rem]/5">
                    Timeline
                  </button>
                  <h2 className="font-Azonix ~text-[1.75rem]/[3rem] ~leading-[2rem]/[3.6rem]">
                    {timeline.date}
                  </h2>
                  <div className="h-[0.5px] w-full bg-white"></div>
                  <div className="flex w-full flex-col flex-wrap gap-2">
                    {timeline.detail.map((detailTimeline) => {
                      return (
                        <div
                          className={`flex w-full items-center px-3 py-2 ~gap-4/8 ${detailTimeline.isHighlight ? "bg-[#F5F5F5] text-[#2050B5]" : ""}`}
                        >
                          <p className="w-[35%] shrink-0 font-Azonix ~text-[0.875rem]/[1.25rem] ~leading-[1rem]/[1.5rem]">
                            {detailTimeline.time}
                          </p>
                          <p className="w-fit ~text-[0.875rem]/[1.25rem] ~leading-[1rem]/[1.5rem]">
                            {detailTimeline.title}
                          </p>
                          {detailTimeline.isSpotlight && (
                            <img
                              src={SpotlightImg}
                              className="h-auto ~w-[5.3rem]/[10rem]"
                              alt=""
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full flex-col items-center ~pr-4/[6.875rem]">
          <div className="flex w-full flex-col-reverse ~gap-9/[6.625rem] lg:flex-row">
            <img
              src={PenImg}
              className="h-auto w-full max-w-[75%] object-contain lg:max-w-[50%]"
              alt=""
            />
            <div className="flex flex-1 flex-col items-end text-right ~gap-2/4">
              <h1 className="text-linear-gradient pl-0 font-bold ~text-[1.5rem]/[4rem] ~leading-[1.75rem]/[4.75rem] lg:pl-[120px]">
                이벤트 참여 시 받을 선물
              </h1>
              <h3 className="font-bold text-primary ~text-[0.825rem]/[2rem] ~leading-[1.125rem]/[4rem]">
                IT아웃소싱 서비스 이용 시 최대
              </h3>
              <div className="w-fit rounded-2xl bg-[#289BE326] px-[1.5rem] py-[1rem]">
                <span className="text-linear-gradient font-bold ~text-[1.5rem]/[3rem] ~leading-[1.75rem]/[4rem]">
                  20% 할인 바우처
                </span>
              </div>
              <div className="font-bold text-primary ~text-[0.825rem]/[1.75rem] ~leading-[1.125rem]/[2rem]">
                <span>유효 기간: </span>
                <span className="text-linear-gradient">2025년 6월 30일</span>
              </div>
            </div>
          </div>
          <div className="relative flex w-full justify-center ~-translate-y-4/8 ~pl-4/[6.875rem]">
            <button className="flex w-fit items-center justify-center bg-gradient-to-r from-[#2250B5] to-[#289BE3] px-8 py-3 ~text-[1rem]/[1.5rem] ~h-[2.25rem]/[3.5rem] ~leading-[1.75rem]/[2rem]">
              체크인 시 받을 선물
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventHighlight;
