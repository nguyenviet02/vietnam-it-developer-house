import SpotlightImg from "@images/spotlight.svg";

type Props = {
  timelines: {
    id: number;
    date: string;
    background: string;
    detail: {
      time: string;
      title: string;
      isHighlight?: boolean;
      isSpotlight?: boolean;
    }[];
  }[];
};

const ListTimeline = ({ timelines }: Props) => {
  return (
    <div className="flex h-full w-full flex-col ~gap-4/6 ~px-4/[5rem] lg:flex-row">
      {timelines.map((timeline) => {
        return (
          <div
            key={timeline.id}
            className="relative flex w-full flex-col rounded-xl"
          >
            <img
              src={timeline.background}
              className="absolute left-0 top-0 -z-[1] size-full"
              alt=""
            />
            <div className="flex h-full flex-col ~gap-2/4 ~px-[1.125rem]/10 ~pt-6/[4rem] ~pb-6/[3rem]">
              <button className="w-fit rounded-[30px] bg-[#EA2323] font-bold text-white ~text-[0.75rem]/[1rem] ~px-[0.875rem]/[2.8rem] ~py-[0.375rem]/[0.625rem] ~leading-[0.875rem]/5">
                타임라인
              </button>
              <h2 className="font-Azonix ~text-[1.75rem]/[3rem] ~leading-[2rem]/[3.6rem]">
                {timeline.date}
              </h2>
              <div className="h-[0.5px] w-full bg-white"></div>
              <div className="flex w-full flex-col flex-wrap items-stretch gap-2">
                {timeline.detail.map((detailTimeline) => {
                  return (
                    <div
                      key={detailTimeline.time}
                      className={`mt-auto flex h-10 min-h-fit w-full items-center px-3 ~gap-1/2 ${detailTimeline.isHighlight ? "bg-[#FFF] py-2 text-[#A50101]" : ""}`}
                    >
                      <p className="w-[35%] min-w-fit shrink-0 font-Azonix ~text-[0.875rem]/[1.25rem] ~leading-[1rem]/[1.5rem]">
                        {detailTimeline.time}
                      </p>
                      <p className="w-fit ~text-[0.875rem]/[1.25rem] ~leading-[1rem]/[1.5rem]">
                        {detailTimeline.title}
                      </p>
                      {detailTimeline.isSpotlight && (
                        <img
                          src={SpotlightImg}
                          className="h-10 w-auto"
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
  );
};

export default ListTimeline;
