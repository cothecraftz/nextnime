import Form from "next/form";
import SelectBox from "./layouts/Navbar/SelectBox";
import { ImCross } from "react-icons/im";
import useSearch from "@/store/useSearchStore";

const Search = ({ endPoint, setEndPoint, inputRef }: any) => {
  const { navInput, setNavInput } = useSearch();
  return (
    <Form action="/search">
      <div className="flex gap-4 items-center">
        <div
          className={`absolute z-50 left-0 bg-indigo-500 p-4 sm:p-0 w-full sm:w-auto sm:bg-transparent sm:static flex ${
            navInput ? "top-0" : "-top-40"
          } gap-2 items-center justify-center transition-all duration-200`}
        >
          <SelectBox endPoint={endPoint} setEndPoint={setEndPoint} />
          <div className="relative mr-3 md:mr-0 sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="search"
              name="query"
              ref={inputRef}
              className="bg-gray-50 border border-gray-300 text-black-gray sm:text-sm rounded-lg  focus:outline-none outline-none placeholder:text-gray-light block w-full pl-10 p-2"
              placeholder="Search..."
            />
          </div>
          <ImCross
            className="text-2xl text-white cursor-pointer sm:hidden"
            onClick={() => setNavInput(!navInput)}
          />
        </div>
      </div>
    </Form>
  );
};

export default Search;
