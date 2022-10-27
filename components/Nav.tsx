import { useState } from "react";
import logo from "../public/alt.png";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Self Development", path: "/self-development" },
    { title: "Health", path: "/health" },
    { title: "Technology", path: "/technology" },
    { title: "Trends", path: "/trends" },
    { title: "News", path: "/news" },
    { title: "Travel", path: "/travel" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white/90 w-full border-b md:border-0 md:static relative">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <div className="flex space-x-8 items-baseline">
            <div className="w-10 h-10">
              <Link href={"/"}>
                <a>
                  <Image
                    src={logo}
                    width={300}
                    height={300}
                    alt="Float UI logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
              aria-label="menu button"
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-7 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} onClick={() => setState(!state)}>
                  <Link href={item.path}>
                    <a className="text-gray-600 hover:text-gray-900">
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
