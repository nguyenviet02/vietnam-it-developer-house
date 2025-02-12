"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import LogoHeader from "@images/LogoHeader.svg";
import Bar3Icon from "@icons/Bars3Icon.svg";
import XMarkIcon from "@icons/XMarkIcon.svg";

const navigation = [
  { name: "홈페이지", href: "/" },
  {
    name: "이벤트 소개",
    href: "#about-event",
    subMenu: [
      {
        name: "한국기업을 위한 IT아우소싱 성공전략",
        href: "/success-strategies",
      },
      {
        name: "웹3 오딧세이: 빌더, 트렌드, 그리고 미래",
        href: "/web3-odyssey",
      },
    ],
  },
  { name: "연락처", href: "#contact" },
  {
    name: "사전등록",
    href: "https://event-us.kr/itskorea/event/97652?utm_source=facebook&utm_campaign=wsbbe0ecey",
    isHighlight: true,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  console.log("☠️ ~ Example ~ isSticky:", isSticky);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-[9999] flex w-full items-center justify-center backdrop-blur ${isSticky ? "bg-[#20233566] shadow-md" : "bg-transparent"}`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex w-full max-w-container items-center justify-between py-4 ~px-4/[5rem] lg:py-0"
      >
        <div className="flex w-full items-center justify-between gap-x-[2.2rem]">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={LogoHeader}
              className="h-auto ~w-[6rem]/[10.875rem]"
            />
          </a>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group relative px-[27px] py-6 text-[1rem] font-bold leading-[1.125rem] text-white ${item.isHighlight ? "bg-red" : ""}`}
              >
                {item.name}
                {item?.subMenu && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-10 flex w-fit min-w-[250px] -translate-x-1/2 transform flex-col items-center gap-6 rounded-xl bg-[#202335] p-6 opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-xs font-bold leading-[14px] text-white hover:text-red"
                      >
                        {subItem.name}
                      </a>
                    ))}
                    <div className="absolute -top-1 left-1/2 -z-[1] h-[52px] w-[52px] -translate-x-1/2 rotate-45 transform bg-[#202335]"></div>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <img src={Bar3Icon} alt="Icon" className="filter-white size-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <img src={XMarkIcon} className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
