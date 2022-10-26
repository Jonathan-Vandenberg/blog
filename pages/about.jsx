import TechStack from "../components/TechStack";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Profile from "../components/Profile";

export default function App() {
  return (
    <>
      <div className="py-12">
        <Hero />
      </div>
      {}
      <TechStack />
      {}
      <div className=""></div>
      <Profile />
      <section className="py-6 text-gray-700">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>jonvdberg8@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-3 m-1 ring-1 ring-slate-400"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                className="block p-3 m-1 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 ring-1 ring-slate-400"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 ring-1 ring-slate-400 p-3 m-1"
              ></textarea>
            </label>
            <Button content="Leave A Message..." />
          </form>
        </div>
      </section>
    </>
  );
}
