import healthImage from "../public/categories/health1.jpg";
import techImage from "../public/categories/tech1.jpg";
import newsImage from "../public/categories/news1.jpg";
import selfDevelopmentImage from "../public/categories/self-development1.jpg";
import travelImage from "../public/categories/travel1.jpg";
import trendsImage from "../public/categories/trends1.jpg";
import { StaticImageData } from "next/image";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function App({
  categoryName,
  categoryDescription,
}: {
  categoryName: string;
  categoryDescription: string;
}) {
  const [image, setImage] = useState();

  let categoryImage;

  useEffect(() => {}, []);

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
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
                : categoryName === "news"
                ? newsImage
                : ""
            }
            layout="responsive"
            alt="category cover image"
            className="w-full h-60 sm:h-96 dark:bg-gray-500 mt-12"
          />
        </div>
        <div className="p-6 z-10 pb-6 m-4 mx-auto -mt-12 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="flex items-start justify-center flex-col">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {categoryName}
            </a>
            <div className="dark:text-gray-100">
              <p>{categoryDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
