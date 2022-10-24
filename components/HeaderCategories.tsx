import healthImage from "../public/categories/health1.jpg";
import techImage from "../public/categories/tech1.jpg";
import newsImage from "../public/categories/news1.jpg";
import selfDevelopmentImage from "../public/categories/self-development1.jpg";
import travelImage from "../public/categories/travel1.jpg";
import trendsImage from "../public/categories/trends1.jpg";

import Image from "next/image";
// import { useEffect, useState } from "react";

export default function App({
  categoryName,
  categoryDescription,
}: {
  categoryName: string;
  categoryDescription: string;
}) {
  // const [style, setStyle] = useState("");

  // useEffect(() => {
  //   headerColor();
  // }, []);

  // const headerColor = () => {
  //   switch (categoryName) {
  //     case "Self Development":
  //       setStyle(
  //         "p-5 mx-auto sm:p-10 bg-gradient-to-tr from-sky-500 via-sky-300 to-sky-500"
  //       );
  //       break;
  //     case "Health":
  //       setStyle(
  //         "p-5 mx-auto sm:p-10 bg-gradient-to-l from-red-500 via-red-300 to-red-500"
  //       );
  //       break;
  //     case "Travel":
  //       setStyle(
  //         "p-5 mx-auto sm:p-10 bg-gradient-to-tr from-sky-200 via-sky-50 to-sky-200"
  //       );
  //       break;
  //     case "News":
  //       setStyle(
  //         "p-5 mx-auto sm:p-10 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-500"
  //       );
  //       break;
  //     case "Technology":
  //       setStyle(
  //         "p-5 mx-auto sm:p-10 bg-gradient-to-tr from-sky-500 via-sky-300 to-sky-500"
  //       );
  //       break;
  //     case "Trends":
  //       setStyle(
  //         "p-5 mx-auto sm:p-10 bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-400"
  //       );
  //       break;
  //   }
  // };

  return (
    <div className="p-5 mx-auto sm:p-10 bg-gradient-to-tr from-sky-500 via-sky-300 to-sky-500">
      <div className="flex flex-col max-w-md mx-auto overflow-hidden rounded">
        <div className="block w-full mx-auto mt-16">
          <Image
            src={
              categoryName === "Health"
                ? healthImage
                : categoryName === "Self Development"
                ? selfDevelopmentImage
                : categoryName === "Technology"
                ? techImage
                : categoryName === "Travel"
                ? travelImage
                : categoryName === "Trends"
                ? trendsImage
                : categoryName === "News"
                ? newsImage
                : ""
            }
            layout="responsive"
            alt="category cover image"
            className="w-full h-60 sm:h-96 bg-gray-500 mt-12"
          />
        </div>
        <div className="p-6 z-10 pb-6 m-4 mx-auto -mt-12 lg:max-w-2xl sm:px-10 sm:mx-12  bg-white">
          <div className="flex items-start justify-center flex-col">
            <p className="inline-block text-2xl font-semibold sm:text-3xl text-gray-800">
              {categoryName}
            </p>
            <div className="text-gray-800">
              <p>{categoryDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
