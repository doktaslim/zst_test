const NavbarSearch = () => {
  return (
    <div className="rounded-full shadow-sm hover:shadow-md border h-11 p-2 flex items-center w-full md:w-auto">
      <div className="flex items-center justify-between divide-x w-full h-full">
        <p className="h-full flex items-center px-3 cursor-pointer text-sm font-semibold">Anywhere</p>
        <p className="h-full flex items-center px-3 cursor-pointer text-sm font-semibold">Any week</p>
        <p className="h-full pl-3 cursor-pointer text-sm text-gray-600 flex items-center justify-center space-x-2">
          <span className="w-auto">Add guests</span>
          <span className="h-auto w-auto p-1 rounded-full bg-pink-primary flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default NavbarSearch;
