import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <>
      <section className="mt-32 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Alternative ways to improve
            <span className="text-indigo-600"> Your Life</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            The path most commonly travelled is not necessary the right path for
            you. That&apos;s why we offer alternatives to help you find what
            suits you.
          </p>
        </div>
      </section>
    </>
  );
}
