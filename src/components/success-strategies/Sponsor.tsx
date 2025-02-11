import ITSKoreaLogo from "@images/ITSKorea-logo.svg";

const Sponsor = () => {
  return (
    <div className="flex flex-col items-center bg-[#010021] pb-6">
      <div className="flex w-full items-center justify-center ~gap-4/10 ~py-4/8">
        <span className="font-bold uppercase text-white ~text-[0.75rem]/[1.25rem] ~leading-[1.125rem]/[2.25rem]">
          Hosted on
        </span>
        <img
          src={ITSKoreaLogo}
          className="h-auto ~w-[8.2rem]/[14.375rem]"
          alt=""
        />
      </div>
      <span className="text-center text-[1.125rem] font-extrabold leading-[1.5rem]">
        후원 기관: Vietnam Association of Small and Medium IT Enterprises
      </span>
    </div>
  );
};

export default Sponsor;
