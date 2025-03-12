import menu from "/src/assets/Glow assests/ci_hamburger-md.png";
import search from "/src/assets/Glow assests/search.png";
import cart from "/src/assets/Glow assests/clarity_shopping-cart-outline-badged.png";
import female from "/src/assets/Glow assests/Female.png";
import left from "/src/assets/Glow assests/left-image.png";
import right from "/src/assets/Glow assests/right-image.png";

const Nav = () => {
  return (
    <div className="bg-gradient-to-br from-white via-white to-[#0C7638] h-[108vh] pt-6 px-4">
      {/* Small screen navbar */}
      <div className="flex justify-between items-center mx-4 lg:hidden">
        <img src={menu} alt="Menu" className="w-8 h-8" />
        <div className="flex gap-4">
          <img src={search} alt="Search" className="w-6 h-6" />
          <img src={cart} alt="Cart" className="w-6 h-6" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center gap-10 mt-10">
        <h1 className="text-[2.7rem] md:text-4xl font-[600] leading-[3.2rem]">
          Healthy. <span className="text-green-500">Beautiful.</span> <br /> Radiant Skin.
        </h1>
        <p className="text-[1.4rem] md:text-xl leading-[1.6rem]">
          Unlock the secret to radiant skin <br /> with our carefully curated <br /> skincare solutions.
        </p>
        <button className="bg-green-800 text-[1.8rem] text-white px-4 py-1 rounded-full ">
          Shop Now
        </button>
        <div className="w-full flex justify-center relative top-[50px]">
          <img src={female} alt="Female" className="w-[80%] max-w-[400px]"/>
        </div>
        <div className="flex justify-between w-full relative top-[-100px]">
            <img src={right} alt="" />
            <img src={left} alt="" className="h-[8rem]"/>
        </div>
      </div>
        <div>
          <ul className="flex">
            <li>Nivea</li>
            <li>L'Oreal</li>
            <li>Compolitan</li>
            <li>Vaseline</li>
          </ul>
        </div>
    </div>
  );
};

export default Nav;
