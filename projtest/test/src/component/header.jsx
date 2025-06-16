import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AgenShopHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
      if (searchQuery.trim()) {
          console.log("Searching for:", searchQuery);
          //search query
          navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
          
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
 

  return (
    <>
      {isLogin ? ( //login state
        <div className="bg-gray-100 text-gray-800 font-sans m-0 p-0 box-border min-h-15 z-50">
          <header className="flex fixed left-0 right-0 px-8 py-4 justify-between items-center bg-white w-full z-50 shadow-lg transition-all duration-300 ease-in-out">

            <Link
              to="/"
              className="logo px-4 py-2 rounded-lg font-bold text-2xl text-orange-500 flex items-center"
            >
              AgenShop
            </Link>

            <div className="search-container flex-grow mx-8 relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full py-3 px-4 pl-10 border border-gray-300 rounded-full text-base transition-all duration-300 ease-in-out bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                onClick={handleSearch}
                className="absolute right-0 top-0 bottom-0 px-5 bg-orange-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Search
              </button>
            </div>

            <div className="auth-buttons flex gap-3">
              <Link
                to="/login"
              >asd</Link>
              <button
                onClick={handleRegister}
                
              >
                Profile
              </button>
            </div>
          </header>
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-800 font-sans m-0 p-0 box-border  z-50">
          <header className="flex fixed left-0 right-0 px-8 py-4 justify-between items-center bg-white w-full z-50 shadow-lg transition-all duration-300 ease-in-out">
          <Link
              to="/"
              className="logo px-4 py-2 rounded-lg font-bold text-2xl text-orange-500 flex items-center"
            >
              AgenShop
            </Link>

            <div className="search-container flex-grow mx-8 relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full py-3 px-4 pl-10 border border-gray-300 rounded-full text-base transition-all duration-300 ease-in-out bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                onClick={handleSearch}
                className="absolute right-0 top-0 bottom-0 px-5 bg-orange-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Search
              </button>
            </div>

            <div className="auth-buttons flex gap-3">
              <Link
              to="/login"
                className="px-6 py-2.5 bg-white text-orange-500 border-2 border-orange-500 rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 hover:shadow-xl"
              >Login</Link>

              <Link
              to="/register"
              className="px-6 py-2.5 bg-orange-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Register
              </Link>
            </div>
          </header>
        </div>
      )}
    </>
  );
}
