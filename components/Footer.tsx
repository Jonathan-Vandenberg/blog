const App = () => {
  const navigation = [
    { title: "Self Development", path: "/self-development" },
    { title: "Health", path: "/health" },
    { title: "Technology", path: "/technology" },
    { title: "Trends", path: "/trends" },
    { title: "News", path: "/news" },
    { title: "Travel", path: "/travel" },
    { title: "About", path: "/about" },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto container w-full">
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {navigation.map((item, idx) => (
          <li key={idx} className=" hover:text-gray-800">
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; 2022 Alt.</div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default App;
