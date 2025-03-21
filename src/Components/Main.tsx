import oil from "../assets/Glow assests/Oil center.png"
import cucumber from "../assets/Glow assests/cucumber treatment.png"
import likes from "../assets/Glow assests/Vector.png"
import Items from "../Components/Items"
import Product from "../Components/Herosection/Products"
import Favourite from "../Components/Favourites"
import woman2 from "../assets/Glow assests/woman 2.png"
import Clients from "../Components/Clients"
import client from "../assets/Glow assests/client.png"
import social from "../assets/Glow assests/social.png"  


const Main = () => {
  return (
    <div>
       <div>
       <div>
        <h1 className="text-[2.2rem] text-center mt-[2.5rem]">
            <span className="text-green-800">Glow Haven;</span>Your Skin Bestfriend
        </h1>

        <p className="text-center text-gray-500 mt-[1.2rem] mx-[1.9rem]">
        Glow Haven is here to help you achieve radiant, healthy skin with our carefully crafted skincare products. We combine luxurious ingredients with science-backed formulas to nourish and rejuvenate your skin. Whether you're tackling specific concerns or just want a natural glow, our products are designed for all skin types. Embrace your beauty with Glow Haven– where glowin
        </p>
       </div>

        <div className="flex justify-center mt-[2.5rem]">
            <img src={oil} alt="" />
        </div>
        </div>
        <div>
            <h1 className="text-center text-[1.8rem] font-bold">Skincare Products</h1>
            <div className="flex overflow-hidden overflow-x-auto whitespace-nowrap hide-scrollbar gap-[1rem] px-[1rem] mt-4">
            <Product products="Moisturizers"/>
            <Product products="Scrub"/>
            <Product products="Mask"/>
            <Product products="Toner"/>
            <Product products="Oils"/>
            <Product products="Tools"/>
            </div>
        </div>
        <div className="ml-[1rem] flex gap-[1.5rem] px-[1rem]overflow-hidden overflow-x-auto whitespace-nowrap hide-scrollbar p-[0.2rem]">
            <Items img={cucumber} text="Liquid Gel Moisturizer" price={58.56} cart="Add to Cart" like={likes}/>
            <Items img={cucumber} text="Liquid Gel Moisturizer" price={58.56} cart="Add to Cart" like={likes}/>
            <Items img={cucumber} text="Liquid Gel Moisturizer" price={58.56} cart="Add to Cart" like={likes}/>
        </div>
        
      <div className="ml-[18rem] my-[2.1rem]">
         <button className="text-white bg-green-800 text-[1.1rem] px-[1.2rem] py-[0.5rem] rounded-[20px]">View all products</button>
      </div>

      <div className="bg-green-50 h-[30rem]">
        <h1 className="text-center text-[1.5rem] font-[600] pt-[1rem]">Your Favourites</h1>
      <div className="flex overflow-hidden overflow-x-auto whitespace-nowrap hide-scrollbar gap-[1.6rem] px-[1rem]overflow-hidden ml-[5rem] mt-[2.8rem] p-[0.2rem]">
            <Favourite img={cucumber} text="Liquid Gel Moisturizer" price={58.56} cart="Add to Cart"/>
            <Favourite img={cucumber} text="Liquid Gel Moisturizer" price={58.56} cart="Add to Cart"/>
        </div>

        <div className="ml-[18rem] my-[2.1rem]">
         <button className="text-green-800 bg-green-50 text-[1.1rem] px-[1.2rem] py-[0.5rem] rounded-[20px] border-1">View all favourites</button>
      </div>
      </div>

      <div className="h-[55rem] bg-green-800">
          <img src={woman2} alt="" className="h-[60%] w-[100%]"/>
          <div className="text-white mt-[1rem] flex flex-col justify-center itmes-center gap-6 p-6 leading-[1.9rem]">
            <h1 className="text-center">Know your skin better</h1>
            <p>Scan your skin with our AI scanner to determine your skin type, conditions and get personalized product recommendations and skincare routine for a healthy, glowing skin.</p>
            <div>
            <button className="text-white bg-green-800 text-[1.1rem]  px-[2.9rem] py-[0.5rem] rounded-[20px] border-1">Scan</button>
            </div>
          </div>

          <div className="flex flex-col gap-12 h-[55rem] justify-center items-center">
              <h1 className="text-[1.6rem]">Clients Testimonial</h1>
              <Clients img={client} text="I love the products i got from Glow Haven, they are all originals and works perfectly for my skin." name="Grace Jacob"/>
              <Clients img={client} text="I love the products i got from Glow Haven, they are all originals and works perfectly for my skin." name="Grace Jacob"/>
          </div>

          <div className="h-[60rem] bg-green-800 py-[4rem] px-[4rem] text-white text-center">
              <h1 className="text-[1.9rem]">Glow Haven</h1>
              <h2 className="text-[1.2rem] p-[1.2rem]">Healthy.beautiful. <br />radiant skin</h2>
              <p className="p-[1rem]">Want to stay updated on our latest products and offers</p>
              <button className="bg-black px-[8rem] py-[1.2rem] rounded-[2.1rem]">Subscribe</button>
              <h2 className="p-[1rem] text-[1.4rem]">Glow Haven</h2>
              <ul className="flex flex-col gap-4">
                <li>About</li>
                <li>Products</li>
                <li>Carts</li>
                <li>Privacy Policy</li>
                <li>Recommendation</li>
              </ul>
              <h2 className="p-[1rem] text-[1.5rem]">Contact Us</h2>
              <ul className="flex flex-col gap-4 font-thin">
                <li>+234 7044185426</li>
                <li>+234 7010003608</li>
                <li>glowhaven@gmail.com</li>
              </ul>

              <h2 className="p-[1.8rem] text-[1.6rem]">Reach out to us via:</h2>
              <img src={social} alt="" className="ml-[4.4rem]"/>
          </div>
          <div className="h-[5rem] text-center flex justify-center items-center">
            <p>Copyright @glowhaven 2024 All rights reserved.</p>
          </div>
      </div>

    </div>
  )
}

export default Main;