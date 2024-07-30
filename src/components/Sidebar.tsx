"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white shadow-lg p-6 hidden flex-col md:flex">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="text-2xl font-bold mb-6 text-gray-800"
      >
        SALADMAKER
        <span className="text-[#F8B602] text-3xl">.</span>
      </button>
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
                  className={pathname === "/" ? "text-white" : "text-[#A098AE]"}
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
  );
}
