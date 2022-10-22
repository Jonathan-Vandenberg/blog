export default function App({
  categoryName,
  categoryDescription,
}: {
  categoryName: string;
  categoryDescription: string;
}) {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="https://source.unsplash.com/random/480x360"
          alt="category cover image"
          className="w-full h-60 sm:h-96 dark:bg-gray-500 mt-12"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {categoryName}
            </a>
          </div>
          <div className="dark:text-gray-100">
            <p>{categoryDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
