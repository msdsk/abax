/* eslint-disable @next/next/no-img-element */
function Search() {
  return <div className="relative flex items-center ml-4">
    <img src="/img/search.svg" alt="Search" className="h-4 md:left-4 md:absolute" />
    <input type="text" className="hidden md:block p-2 pr-6 border border-gray-300 rounded w-52 lg:w-64" />
  </div>
}

export default Search