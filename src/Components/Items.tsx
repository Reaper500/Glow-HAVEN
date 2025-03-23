
type Props = {
    img : string;
    text : string;
    price : number;
    cart : string;
    like : string;
}

const Items = ({ img, text,price,cart,like }: Props) => {
  return (
    <div className=" shadow-[1px_4px_4px_2px_rgba(0,0,0,0.1)] rounded-[0.5rem]  w-[15rem] lg:w-[32rem] lg:h-[30rem] inline-block h-[17rem]">
        <img src={img} alt="" className="rounded-t-[0.5rem] h-1/2 lg:h-[60%] w-full object-cover"/>
        <div className="p-[0.6rem]  lg:flex lg:flex-col lg:gap-[1rem] lg:text-[1.5rem]">
        <p className="text-[1.2rem]  lg:text-[1.5rem]">{text}</p>
        <h1 className="text-[1.2rem] lg:text-[1.5rem] font-bold">${price}</h1>
        <div className="flex gap-[0.8rem] mt-[0.5rem] items-center">
            <button className="border-[0.1rem] border-green-800 py-[0.3rem] px-[1.2rem] lg:px-[6.5rem] lg:py-[0.6rem] rounded-[1.2rem] text-[1.2rem]">{cart}</button>
            <div className="bg-green-100 w-[2.5rem] h-[2.5rem] lg:h-[3rem] lg:w-[3rem] flex justify-center items-center rounded-full">
            <img src={like} alt="" className="w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem] mt-[0.4rem] mb-[0.3rem]"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Items;