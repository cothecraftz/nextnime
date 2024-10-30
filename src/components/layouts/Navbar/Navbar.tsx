"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import DropdownNavlist from "@/components/layouts/Navbar/DropdownNavlist";
import ProfileNavbar from "@/components/layouts/Navbar/ProfileNavbar";
import { TbWorldSearch } from "react-icons/tb";
import Search from "@/components/Search";
import useSearch from "@/store/useSearchStore";

const Navbar = () => {
  const { navInput, navScrool, setNavInput, setNavScrool } = useSearch();

  const inputRef: RefObject<HTMLInputElement | null> = useRef(null);
  const { data: session, status } = useSession();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const typeEndPoint = params.get("type")?.toString();
  const [endPoint, setEndPoint] = useState(typeEndPoint || "anime");

  useEffect(() => {
    setNavInput(false);
  }, [pathname, searchParams, setNavInput]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > 0) {
        setNavScrool(true);
        setNavInput(false);
        if (inputRef.current) inputRef.current.blur();
      } else {
        setNavScrool(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setNavInput, setNavScrool]);

  return (
    <header
      className={`${
        navScrool ? "shadow-md" : ""
      } w-full fixed top-0 left-0 z-50 bg-white h-16 flex justify-center items-center`}
    >
      <nav className="border-gray-200 w-full">
        <div className="wrapper flex flex-wrap items-center justify-between">
          {/* title */}
          <Link href="/" className="flex">
            <span className="self-center text-2xl pr-10 font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 ">
              NextNime
            </span>
          </Link>

          {/* search */}
          <Search endPoint={endPoint} setEndPoint={setEndPoint} inputRef={inputRef} />

          {/* list */}
          <div className="flex gap-2 items-center bg-white">
            <TbWorldSearch
              className="text-[27px] cursor-pointer block sm:hidden"
              onClick={() => {
                setNavInput(!navInput);
                if (inputRef.current) inputRef.current.focus();
              }}
            />
            <div className="mx-auto">
              <DropdownNavlist />
            </div>
            <div className="flex gap-2">
              {status !== "authenticated" ? (
                <button
                  onClick={() => signIn()}
                  className="bg-primary px-5 py-2 grid place-content-center rounded-md text-white"
                >
                  Login
                </button>
              ) : (
                <ProfileNavbar image={session?.user?.image!} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
