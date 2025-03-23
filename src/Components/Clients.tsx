

type Props = {
    img : string,
    text: string,
    name : string;
}

const Clients = ({ img , text, name }: Props) => {
  return (
    <div className="h-[18rem] w-[22rem] lg:w-[32rem] lg:h-[34rem] rounded-[2rem]  border-4 border-green-800 flex flex-col justify-center items-center p-[2rem] gap-8">
        <img src={img} alt="" className="lg:h-[20%]"/>
        <p className="lg:text-[1.6rem]">{text}</p>
        <h2 className="text-green-500 lg:text-[1.6rem]">{name}</h2>
    </div>
  )
}

export default Clients;