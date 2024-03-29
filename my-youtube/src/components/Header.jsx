import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchedVideo, setSearchedVideo] = useState([]);

  const searchCache = useSelector((store) => store.search);

  const [showSerachList, setShowSerachList] = useState(false);

  const handleClick = () => {
    getSearchVideo();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchVideo = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&order=viewCount&maxResults=50&q=" +
        searchQuery +
        "&regionCode=IN&type=videos&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    setSearchedVideo(json?.items);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json?.[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="Header grid grid-flow-col border-b-2 border-grey-500 overflow-y-scroll">
      <div className="LogoSection col-span-2 flex">
        <img
          onClick={toggleMenuHandler}
          className="w-10 h-10 mt-[20px] m-4 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Hamburger Icon"
        />
        <a href="/">
          <img
            className="w-36"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpybK96bTpZq_ipwlHzzeRa8pZv32Ivyg1orqSTJ3rWQ&s"
            alt="youtube-Logo"
          />
        </a>
      </div>
      <div className="Search col-span-9 mt-[20px] ml-32">
        <div>
          <input
            className="border  border-gray-400 w-3/4 pl-3 py-2 rounded-l-full"
            type="text"
            placeholder=" Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSerachList(true)}
            onBlur={() => setShowSerachList(false)}
          />

          <button
            className="bg-slate-200 border border-l-0 border-gray-400 px-6 py-2 rounded-r-full"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          {showSerachList && (
            <div className="absolute font-mono bg-white py-2 px-5 w-[32rem] shadow-xl rounded-xl border border-gray-100">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="p-1 shadow-sm hover:bg-gray-200 rounded-md"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="User flex col-span-1 mt-[20px]">
        <img
          className="w-10 h-10 mr-1"
          src="https://t4.ftcdn.net/jpg/01/98/33/63/360_F_198336329_D3JsfuSGm5UBTXR9fwcr2WhKNebr7SiB.jpg"
          alt=""
        />
        <img
          className="w-10 h-10"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
