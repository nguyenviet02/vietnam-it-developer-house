import Background from "@images/gifts-bg.png";
import Gift1 from "@images/gift-1.png";
import Gift2 from "@images/gift-2.png";
import Gift3 from "@images/gift-3.png";

const Gifts = () => {
  return (
    <section className="relative w-full overflow-hidden ~mt-[2.75rem]/[7.5rem] flex justify-center">
      <img
        src={Background}
        className="absolute right-0 -z-[1] h-auto w-full"
        alt=""
      />
      <div className="w-full max-w-container ~px-4/[5rem] ~pb-[1rem]/[3rem]">
        <h1 className="text-center font-bold uppercase text-white ~text-[1.5rem]/[4rem] ~my-[1.5rem]/[5.625rem] ~leading-[1.75rem]/[4.75rem]">
          이벤트 참여 시 받을 선물
        </h1>
        <div className="flex items-center justify-center ~gap-6/[3.5rem]">
          <div className="relative flex flex-col items-center ~gap-3/6">
            <button
              style={{ writingMode: "vertical-rl" }}
              className="absolute left-0 top-0 flex w-fit -translate-x-1/2 -translate-y-1/3 items-center bg-gradient-to-b from-[#2250B5] to-[#289BE3] font-bold ~text-[0.75rem]/[1.5rem] ~rounded-[0.25rem]/[0.75rem] ~px-1/[1.25rem] ~py-2/[3.375rem] ~leading-[1rem]/[1.75rem]"
            >
              은 상
            </button>
            <img
              src={Gift1}
              className="rounded-xl object-cover ~h-[7.35rem]/[28.125rem] ~w-[5.25rem]/[20rem]"
              alt=""
            />
            <span className="font-bold ~text-[0.75rem]/[1.5rem] ~leading-[1rem]/[1.75rem]">
              보온병
            </span>
          </div>
          <div className="relative flex flex-col items-center ~gap-3/6">
            <button
              style={{ writingMode: "vertical-rl" }}
              className="absolute left-0 top-0 flex w-fit -translate-x-1/2 -translate-y-1/3 items-center bg-gradient-to-b from-[#2250B5] to-[#289BE3] font-bold ~text-[0.75rem]/[1.5rem] ~rounded-[0.25rem]/[0.75rem] ~px-1/[1.25rem] ~py-2/[4.875rem] ~leading-[1rem]/[1.75rem]"
            >
              금 상
            </button>
            <img
              src={Gift2}
              className="rounded-xl object-cover ~h-[9.35rem]/[34.875rem] ~w-[6.625rem]/[25.3rem]"
              alt=""
            />
            <span className="font-bold ~text-[0.75rem]/[1.5rem] ~leading-[1rem]/[1.75rem]">
              에어팟
            </span>
          </div>
          <div className="relative flex flex-col items-center ~gap-3/6">
            <button
              style={{ writingMode: "vertical-rl" }}
              className="absolute left-0 top-0 flex w-fit -translate-x-1/2 -translate-y-1/3 items-center bg-gradient-to-b from-[#2250B5] to-[#289BE3] font-bold ~text-[0.75rem]/[1.5rem] ~rounded-[0.25rem]/[0.75rem] ~px-1/[1.25rem] ~py-2/[3.375rem] ~leading-[1rem]/[1.75rem]"
            >
              동 상
            </button>
            <img
              src={Gift3}
              className="rounded-xl object-cover ~h-[7.35rem]/[28.125rem] ~w-[5.25rem]/[20rem]"
              alt=""
            />
            <span className="font-bold ~text-[0.75rem]/[1.5rem] ~leading-[1rem]/[1.75rem]">
              베트남 G7 커피
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
