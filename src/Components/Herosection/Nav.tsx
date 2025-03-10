import menu from "/src/assets/Glow assests/ci_hamburger-md.png"
import search from "/src/assets/Glow assests/search.png"
import cart from "/src/assets/Glow assests/clarity_shopping-cart-outline-badged.png"

const Nav = () => {
  return (
    <div className="bg-gradient-to-br from-white via-white to-[#0C7638] h-[50rem] sm:pt-[5rem] ">
        {/* small screen */}
       <div className="sm:flex sm:justify-between sm:mx-[2rem] lg:hidden">
        <img src={menu} alt=""/>
        <div className="sm:flex gap-6">
        <img src={search} alt="" />
        <img src={cart} alt="" />
        </div>
       </div>

       <div className="sm:flex sm:flex-col justify-center items-center sm:h-[21.3rem] sm:w-[43.1rem]  gap-8 sm:mt-[4rem] sm:mx-[2rem]">
            <h1 className="   sm:text-[2.87rem] font-[700] leading-[3.3rem]">
                Healthy.<span className="text-green-500">Beautiful.</span> <br /> Radiant Skin.
            </h1>
            <p className=" sm:text-[1.2rem] sm:font-[400] lg:font-[500]">
            Unlock the secret to a radiant skin <br /> with our carefully curated <br /> skincare Solutions. 
            </p>
            <button className="bg-green-500 sm:px-[1.18rem] sm:py-[1.5rem] sm:w-[7.1rem] sm:h-[2.3rem] ">Shop Now</button>
        </div>  
    </div>
  )
}
export default Nav