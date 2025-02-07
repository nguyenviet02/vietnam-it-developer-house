"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import LogoHeader from "@images/LogoHeader.svg";
import Bar3Icon from "@icons/Bars3Icon.svg";
import XMarkIcon from "@icons/XMarkIcon.svg";

const navigation = [
  { name: "홈페이지", href: "#" },
  { name: "이벤트 소개", href: "#" },
  { name: "연락처", href: "#" },
  { name: "사전등록", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[9999] flex w-full items-center justify-center bg-transparent backdrop-blur">
      <nav
        aria-label="Global"
        className="mx-auto flex w-full max-w-container items-center justify-between py-4 ~px-4/[6.875rem] lg:py-0"
      >
        <div className="flex w-full items-center justify-between gap-x-[2.2rem]">
          <a href="#" className="-m-1.5 p-1.5">
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
                className="hover:bg-red px-[27px] py-6 text-[1rem] font-bold leading-[1.125rem] text-white"
              >
                {item.name}
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
