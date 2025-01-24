import Logo from "@images/LogoFooter.svg";
import MailIcon from "@icons/mail.svg";
import KakaoTalkIcon from "@icons/kakao_talk.svg";
import LocationIcon from "@icons/location.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-3 flex w-full flex-col items-center justify-center border-t border-[#808080] bg-[#FFFFFFB2] ~gap-8/12 ~py-8/[3.125rem]">
      <div className="max-w-1440 grid w-full grid-cols-1 items-start ~gap-8/12 ~px-[1rem]/[6.875rem] md:grid-cols-3">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="group">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#687780] group-hover:fill-[#2250B5]"
              >
                <path d="M26.8533 0H2.14102C0.957227 0 0 0.93457 0 2.09004V26.9043C0 28.0598 0.957227 29 2.14102 29H26.8533C28.0371 29 29 28.0598 29 26.91V2.09004C29 0.93457 28.0371 0 26.8533 0ZM8.60371 24.7123H4.29902V10.8693H8.60371V24.7123ZM6.45137 8.9832C5.06934 8.9832 3.95352 7.86738 3.95352 6.49102C3.95352 5.11465 5.06934 3.99883 6.45137 3.99883C7.82773 3.99883 8.94355 5.11465 8.94355 6.49102C8.94355 7.86172 7.82773 8.9832 6.45137 8.9832ZM24.7123 24.7123H20.4133V17.9834C20.4133 16.3805 20.385 14.3131 18.176 14.3131C15.9387 14.3131 15.5988 16.0633 15.5988 17.8701V24.7123H11.3055V10.8693H15.4289V12.7611H15.4855C16.0576 11.6736 17.4623 10.5238 19.5523 10.5238C23.908 10.5238 24.7123 13.3898 24.7123 17.1168V24.7123Z" />
              </svg>
            </a>
            <a href="#" className="group">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#687780] group-hover:fill-[#2250B5]"
              >
                <path d="M28.5469 14.5005C28.5469 6.74072 22.2598 0.453613 14.5 0.453613C6.74025 0.453613 0.45314 6.74072 0.45314 14.5005C0.45314 21.5115 5.58988 27.3228 12.3052 28.3774V18.5611H8.73683V14.5005H12.3052V11.4056C12.3052 7.88543 14.4009 5.94096 17.6107 5.94096C19.1479 5.94096 20.7554 6.2151 20.7554 6.2151V9.67018H18.9837C17.2392 9.67018 16.6948 10.7531 16.6948 11.8639V14.5005H20.5906L19.9675 18.5611H16.6948V28.3774C23.4102 27.3228 28.5469 21.5115 28.5469 14.5005Z" />
              </svg>
            </a>
            <a href="#" className="group">
              <svg
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#687780] group-hover:fill-[#2250B5]"
              >
                <path d="M14.8454 11.557L24.0221 0.8125H21.8471L13.8811 10.1414L7.51563 0.8125H0.175003L9.79938 14.921L0.175003 26.1875H2.35L10.7636 16.3348L17.4862 26.1875H24.8268L14.8454 11.557ZM11.8674 15.0443L10.8923 13.6396L3.133 2.46187H6.47344L12.7338 11.4827L13.7089 12.8874L21.8489 24.6143H18.5084L11.8674 15.0443Z" />
              </svg>
            </a>
          </div>
          <img src={Logo} alt="XssetHub" className="h-auto w-[320px]" />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-primary">
            About Vietnam IT Developer House
          </h2>
          <div className="flex gap-[64px]">
            <div className="flex flex-col gap-4">
              <a
                className="text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
                href="#"
              >
                홈페이지
              </a>
              <a
                className="text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
                href="#"
              >
                사전등록
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
                href="#"
              >
                이벤트 소개
              </a>
              <a
                className="text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
                href="#"
              >
                연락처
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-primary">연락처</h2>
          <div className="flex flex-col items-start gap-4">
            <a
              className="flex items-center justify-center gap-6 text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
              href=""
            >
              <img src={MailIcon} alt="" />
              itskorea@icetea-software.com
            </a>
            <a
              className="flex items-center justify-center gap-6 text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
              href="#"
            >
              <img src={KakaoTalkIcon} alt="" />
              huong_1018 (Ms. Huong / 원혜영)
            </a>
            <a
              className="flex items-center justify-center gap-6 text-[16px] font-light leading-5 text-[#808080] hover:text-[#2250B5]"
              href="#"
            >
              <img src={LocationIcon} alt="" />
              Seoul, Korea
            </a>
          </div>
        </div>
      </div>
      <p className="text-[1rem] font-light leading-[1.25rem] text-primary ~px-[1rem]/[6.875rem]">
        © {currentYear} GRANVISTA Hotels&Resorts co.,Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
