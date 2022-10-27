import healhImage from "../public/categories/health1.jpg";
import techImage from "../public/categories/tech1.jpg";
import newsImage from "../public/categories/news1.jpg";
import selfDevelopmentImage from "../public/categories/self-development1.jpg";
import travelImage from "../public/categories/travel1.jpg";
import trendsImage from "../public/categories/trends1.jpg";

import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className="container mx-auto">
      <section className="mb-16 text-gray-800">
        <div className="grid lg:grid-cols-3 gap-6">
          <Link href={"/self-development"}>
            <div
              className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image self development"
                src={selfDevelopmentImage}
                className="w-full transition duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-9">
                      Self Development
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/technology"}>
            <div
              className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image technology"
                src={techImage}
                className="w-full transition duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-9">
                      Technology
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/health"}>
            <div
              className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image health"
                src={healhImage}
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-9">Health</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/news"}>
            <div
              className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image news"
                src={newsImage}
                className="w-full transition duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-9">News</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/travel"}>
            <div
              className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image travel"
                src={travelImage}
                className="w-full transition duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-9">Travel</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/trends"}>
            <a aria-label="Trends">
              <div
                className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <Image
                  alt="categories image trends"
                  src={trendsImage}
                  className="w-full transition duration-300 ease-linear align-middle"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <h5 className="text-lg font-bold text-white m-9">
                        Trends
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
