import menu from "/src/assets/Glow assests/ci_hamburger-md.png";
import search from "/src/assets/Glow assests/search.png";
import cart from "/src/assets/Glow assests/clarity_shopping-cart-outline-badged.png";
// import female from "/src/assets/Glow assests/Female.png";
import left from "/src/assets/Glow assests/left-image.png";
import right from "/src/assets/Glow assests/right-image.png";

const Nav = () => {
  return (
    <div className="bg-gradient-to-br from-white via-white to-[#0C7638] pt-6 h-[53rem] lg:h-[90rem]">
      <div className="big back">
        {/* Small screen navbar */}
      <div className="flex justify-between items-center mx-4 lg:hidden">
        <img src={menu} alt="Menu" className="w-8 h-8" />
        <div className="flex gap-4">
          <img src={search} alt="Search" className="w-9 h-9" />
          <img src={cart} alt="Cart" className="w-9 h-9" />
        </div>
      </div>

      <div className="hidden mt-[1.5rem] lg:flex lg:w-[150vh] lg:h-[12vh] rounded-[2rem] ml-[13rem]  bg-green-100 justify-between p-[1rem] items-center">
        <h1 className="text-[2.8rem] md:text-4xl font-[600] leading-[3.2rem]">
          Glow Haven
        </h1>
        <ul className="flex gap-8 md:text-xl lg:text-[1.9rem] leading-[1.6rem]">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>

        <div className="flex gap-8 items-center">
          <img src={cart} alt="" className="h-16 w-16"/>
          <button className="py-[1rem] px-[1.8rem] rounded-[0.5rem] lg:text-[1.8rem]">Log In</button>
        </div>
      </div>

      {/* Main content */}
      
      <div className="flex relative  flex-col items-center text-center lg:text-start gap-9 mt-10 lg:flex-row  " >
       <div className="lg:flex lg:flex-col lg:gap-4 relative lg:w-[40%] flex flex-col gap-4 lg:left-[13.2rem] lg:top-[6rem]">
       <h1 className="text-[2.7rem] md:text-4xl font-[600] leading-[3.2rem] lg:text-[6.2rem] lg:w-[20ch] lg:leading-[8rem] lg:tracking-wide">
          Healthy. <span className="text-green-500">Beautiful.</span> <br /> Radiant Skin.
        </h1>
        <p className="text-[1.4rem] text-gray-500 md:text-xl leading-[1.8rem] lg:tracking-wide w-[26ch] lg:text-start lg:w-[35ch] text-center lg:text-[1.6re7]">
          Unlock the secret to radiant skin  with our carefully curated  skincare solutions.
        </p>
        <div className="lg:flex lg:items-center lg:pt-[1.2rem]">
          <input type="text" className="hidden lg:block border-1 focus:outline-none border-gray-500 lg:w-[29rem] lg:h-[3.5rem] lg:p-5 lg:rounded-full" placeholder="Search Products"/>
        <button className="bg-green-800 text-[1.8rem] text-white px-4 py-1 rounded-full lg:absolute lg:left-[18rem]">
          Shop Now
        </button>
        </div>
       </div>
        <div className="w-full  flex justify-center relative top-[24.5rem]">
          {/* <img src={female} alt="Female" className="w-[80%]  lg:h-[80%] lg:w-[100%] "/> */}
        <div className="flex bottom-0 justify-between w-full absolute lg:flex lg:justify-center lg:top-[3rem] lg:right-[52rem]">
            <img src={right} alt="" className="h-[7rem] lg:h-[27rem]"/>
            <img src={left} alt="" className="h-[7rem] lg:h-[27rem]"/>
        </div>
        </div>
      </div>
      
        <div>
          <ul className=" h-[4rem] flex justify-around items-center text-[1.3rem] lg:text-[2.5rem] relative top-[24rem] lg:top-[45rem]">
            <li>Nivea</li>
            <li>L'Oreal</li>
            <li>Compolitan</li>
            <li>Vaseline</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
