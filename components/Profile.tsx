import jonProfile from "../public/jonProfile.webp";
import Image from "next/image";

export default function App() {
  return (
    <div className="p-6 sm:p-12 bg-sky-800">
      <div className="flex flex-col space-y-4 md:space-y-0 md:justify-evenly md:flex-row">
        <div className="flex items-center justify-center">
          <Image
            src={jonProfile}
            alt="Author Image"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg text-white font-semibold text-center md:text-left">
            Jonathan van den Berg
          </h4>
          <p className="text-white pt-2 max-w-[400px] mx-auto">
            Jon is a full stack web developer using the most modern frameworks
            and techniques. Specializing in performance and SEO efficiency, Jon
            loves fast and highly visible applications.
          </p>
        </div>
      </div>
    </div>
  );
}
