"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { MdOutlineFastfood, MdClose } from "react-icons/md";

interface DrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer({ drawerOpen, setDrawerOpen }: DrawerProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`min-h-full fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-200 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 min-h-screen md:w-64`}
      >
        <button
          className="md:hidden absolute top-1 right-2"
          onClick={() => setDrawerOpen(false)}
        >
          <MdClose size={30} color="#A098AE" />
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          SALADMAKER
          <span className="text-[#F8B602] text-3xl">.</span>
        </h1>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/" legacyBehavior>
                <a
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                    pathname === "/"
                      ? "bg-[#F8B602] text-white"
                      : "text-gray-700 hover:bg-[#fff7e2]"
                  }`}
                >
                  <MdOutlineFastfood
                    size={20}
                    color={pathname === "/" ? "white" : "#A098AE"}
                  />
                  <span
                    className={
                      pathname === "/" ? "text-white" : "text-[#A098AE]"
                    }
                  >
                    Salad maker
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/recipe" legacyBehavior>
                <a
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                    pathname === "/recipe"
                      ? "bg-[#F8B602] text-white"
                      : "text-gray-700 hover:bg-[#fff7e2]"
                  }`}
                >
                  <FaBook
                    size={20}
                    color={pathname === "/recipe" ? "white" : "#A098AE"}
                  />
                  <span
                    className={
                      pathname === "/recipe" ? "text-white" : "text-[#A098AE]"
                    }
                  >
                    Recipe
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
