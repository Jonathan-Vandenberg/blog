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
          <div className="space-y-4 pt-8">
            <p className="flex items-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a className="text-gray-1" href="mailto:jonvdberg8@gmail.com">
                Send an Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
