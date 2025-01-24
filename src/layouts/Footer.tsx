import Logo from "@images/LogoFooter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full justify-center bg-[#FFFFFFB2] ~py-[2.625rem]/[4.5rem]">
      <div className="~gap-8/12 grid w-full max-w-1440 grid-cols-1 items-start ~px-[1rem]/[6.875rem] md:grid-cols-3">
        <div className="flex flex-col items-start gap-2">
          <img src={Logo} alt="XssetHub" className="w-auto ~h-7/9" />
          <span className="text-sm text-primary-text opacity-60">{`© ${currentYear} XssetHub. All Rights Reserved.`}</span>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-[#6C6C6C]">About XssetHub</h2>
          <div className="flex gap-[64px]">
            <div className="flex flex-col gap-4">
              <a className="text-[16px] leading-5 text-[#808080]" href="https://docs.xssethub.com">
                Docs
              </a>
              <a className="text-[16px] leading-5 text-[#808080]" href="https://drive.google.com/drive/folders/1Y_WwwDGejRh_peNFjA1vV5VTTyx5I2R2?usp=drive_link">
                Branding
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a className="text-[16px] leading-5 text-[#808080]" href="https://github.com/polkadot-mobile/xssethub">
                Github
              </a>
              <a className="text-[16px] leading-5 text-[#808080]" href="#">
                Xssethub Pay
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-[#6C6C6C]">Contact</h2>
          <div className="flex flex-col items-start gap-4">
            <a
              className="text-[16px] leading-5 text-[#808080]"
              href="https://t.me/xssethub"
            >
              Partnership Inquiry
            </a>
            <a className="text-[16px] leading-5 text-[#808080]" href="#">
              xssethub@pearydot.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
