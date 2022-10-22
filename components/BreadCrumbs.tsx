export default function App({ postCategory, title }: any) {
  let category: string;

  switch (postCategory) {
    case "SELF_DEVELOPMENT":
      category = "Self Development";
      break;
    case "HEALTH":
      category = "Health";
      break;
    case "TRAVEL":
      category = "Travel";
      break;
    case "NEWS":
      category = "News";
      break;
    case "TECH":
      category = "Tech";
      break;
    case "TRENDS":
      category = "Trends";
      break;
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center gap-1 text-sm text-gray-500">
        <li>
          <a href="#" className="block transition-colors hover:text-gray-700">
            <span className="sr-only"> Home </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            href="#"
            className="block transition-colors hover:text-gray-700 text-xs"
          >
            Blog
          </a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            href="#"
            className="block transition-colors hover:text-gray-700 text-xs"
          >
            {category}
          </a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            href="#"
            className="block transition-colors hover:text-gray-700 text-xs"
          >
            {title}
          </a>
        </li>
      </ol>
    </nav>
  );
}
