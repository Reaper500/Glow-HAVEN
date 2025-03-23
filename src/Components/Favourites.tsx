

type Props = {
    img : string;
    text : string;
    price : number;
    cart : string;
}

const Favourites = ({ img, text,price,cart }: Props) => {
  return (
    <div className=" shadow-[1px_4px_4px_2px_rgba(0,0,0,0.1)] rounded-[0.5rem]  w-[15rem] inline-block h-[17rem] bg-white lg:w-[32rem] lg:h-[30rem]">
        <img src={img} alt="" className="rounded-t-[0.5rem] h-1/2 lg:h-[60%] w-full object-cover"/>
        <div className="p-[0.6rem] lg:flex lg:flex-col lg:gap-[1rem]">
        <p className="text-[1.2rem] lg:text-[1.5rem]">{text}</p>
        <h1 className="text-[1.2rem] lg:text-[1.5rem] font-bold">${price}</h1>
        
            <button className="bg-green-800 py-[0.5rem] text-white px-[1.2rem] rounded-[1.2rem] text-[1.2rem]">{cart}</button>
        
        </div>
    </div>
  )
}

export default Favourites;