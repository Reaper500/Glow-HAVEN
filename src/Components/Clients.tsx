

type Props = {
    img : string,
    text: string,
    name : string;
}

const Clients = ({ img , text, name }: Props) => {
  return (
    <div className="h-[18rem] w-[22rem] rounded-[2rem]  border-4 border-green-800 flex flex-col justify-center items-center p-[2rem] gap-8">
        <img src={img} alt="" />
        <p>{text}</p>
        <h2>{name}</h2>
    </div>
  )
}

export default Clients;