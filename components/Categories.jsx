import healhImage from "../public/categories/health1.jpg";
import techImage from "../public/categories/tech1.jpg";
import newsImage from "../public/categories/news1.jpg";
import selfDevelopmentImage from "../public/categories/self-development1.jpg";
import travelImage from "../public/categories/travel1.jpg";
import trendsImage from "../public/categories/trends1.jpg";

export default function App() {
  return (
    <div className="container mx-auto">
      {/* <div className="underline text-2xl text-gray-700 mt-20 mb-6">
        Categories
      </div> */}
      <section className="mb-16 text-gray-800">
        <div className="grid lg:grid-cols-3 gap-6">
          <div
            className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50%" }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              src={selfDevelopmentImage}
              className="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">
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

          <div
            className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50%" }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              src={techImage}
              className="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">
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

          <div
            className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50%" }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              src={healhImage}
              className="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">Health</h5>
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

          <div
            className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50%" }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              src={newsImage}
              className="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">News</h5>
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

          <div
            className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50%" }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              src={travelImage}
              className="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">Travel</h5>
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

          <div
            className="zoom shadow-lg relative overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50%" }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img
              src={trendsImage}
              className="w-full transition duration-300 ease-linear align-middle"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex justify-start items-end h-full">
                  <h5 className="text-lg font-bold text-white m-6">Trends</h5>
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
        </div>
      </section>
    </div>
  );
}
