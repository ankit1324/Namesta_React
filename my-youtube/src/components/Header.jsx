import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="Header grid grid-flow-col border-b-2 border-grey-500">
      <div className="LogoSection col-span-2 flex">
        <img
          className="w-10 h-10 mt-[20px] m-4"
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
        <input
          className="border  border-gray-400 w-3/4 pl-3 py-2 rounded-l-full"
          type="text"
          placeholder=" Search"
        />
        <button className="bg-slate-200 border border-l-0 border-gray-400 px-6 py-2 rounded-r-full">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="User flex col-span-1 mt-[20px]">
        <img
          className="w-10 h-10 mr-1"
          src="https://t4.ftcdn.net/jpg/01/98/33/63/360_F_198336329_D3JsfuSGm5UBTXR9fwcr2WhKNebr7SiB.jpg"
          alt=""
          s
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
