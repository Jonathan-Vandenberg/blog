import nextLogo from "../public/nextLogo.png";
import graphqlLogo from "../public/graphqlLogo.png";
import tailwindLogo from "../public/tailwind-css-1.svg";
import tsLogo from "../public/ts-logo-512.svg";
import graphcms from "../public/graphcms-1.svg";
import Image from "next/image";

export default function App() {
  return (
    <section className="bg-gray-100 text-700">
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="text-2xl font-bold underline underline-offset-4 text-gray-700">
          Tech Stack for this Website
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-between py-2">
          <div className="max-w-[170px] mx-10 my-6  md:mx-12 lg:m-0">
            <Image width={414} height={248} alt="Next.js Logo" src={nextLogo} />
          </div>
          <div className="max-w-[180px] mx-10 my-6 md:mx-12 lg:m-0 flex items-center lg:pb-6">
            <Image alt="GraphCMS Logo" src={graphcms} />
          </div>
          <div className="max-w-[80px] mx-10 my-6 md:mx-12 lg:m-0 flex items-center lg:pb-6">
            <Image alt="Typescript Logo" src={tsLogo} />
          </div>
          <div className="max-w-[190px] lg:pb-9 mx-10 my-6 md:mx-12 lg:m-0 flex items-center">
            <Image src={tailwindLogo} alt="Tailwind Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
