import TechStack from "../components/TechStack";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import UserMessage from "../components/UserMessage";

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
              Email or fill in the form to start a conversation
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
                <a href="mailto:jonvdberg8@gmail.com">Send an Email</a>
              </p>
            </div>
          </div>
          <UserMessage />
        </div>
      </section>
    </>
  );
}
