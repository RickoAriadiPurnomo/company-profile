"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleLinkClick = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      className={
        "w-full mx-auto flex items-center border-b-2 px-4 py-6 h-14 sticky top-0 bg-white"
      }
    >
      <div
        className={
          "container mx-auto md:max-lg:max-w-full  flex justify-between  items-center border-b-2 px-6 xl:px-10 2xl:px-14 py-2 h-14"
        }
      >
        <div className="flex gap-x-3 items-center align-center">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image width={150} height={90} src="/logo.png" alt="Logo" />
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2 md:gap-5 text-md">
          <Link
            onClick={handleLinkClick}
            className="hover:text-slate-400"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={handleLinkClick}
            className="hover:text-slate-400"
            href="/about"
          >
            About us
          </Link>
          <Link
            onClick={handleLinkClick}
            className="hover:text-slate-400"
            href="/product"
          >
            Product
          </Link>
          <Link
            onClick={handleLinkClick}
            className="hover:text-slate-400"
            href="/teams"
          >
            Teams
          </Link>
        </div>

        <div className="flex grow items-center justify-end md:hidden">
          <PopoverButton
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring focus:ring-inset focus:ring-[#d5904e]"
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              height="1em"
              fill="currentColor"
              className="h-[38px] cursor-pointer text-[#d5904e]"
            >
              <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Z"></path>
            </svg>
          </PopoverButton>
        </div>

        <PopoverBackdrop
          className={`fixed inset-0 bg-slate-900/40 ${
            isPopoverOpen ? "block" : "hidden"
          }`}
        />

        <Transition
          as={Fragment}
          show={isPopoverOpen}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-[#ffffff] shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-x-3 items-center align-center">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Image
                        width={150}
                        height={90}
                        src="/logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="-mr-2">
                    <PopoverButton
                      onClick={() => setIsPopoverOpen(false)}
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[#d5904e] hover:bg-gray-100 hover:text-[#d5904e] focus:outline-none focus:ring-inset focus:ring-[#d5904e]"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-[50px] w-[50px]"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-7 justify-center text-center">
                    <Link
                      onClick={handleLinkClick}
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-[#d5904e] px-2"
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-[#d5904e] px-2"
                      href="/about"
                    >
                      About us
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-[#d5904e] px-2"
                      href="/product"
                    >
                      Product
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="focus-outline-none focus:ring-2 focus:ring-inset focus:ring-[#d5904e] px-2"
                      href="/teams"
                    >
                      Teams
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </div>
    </Popover>
  );
};

export default Navbar;
