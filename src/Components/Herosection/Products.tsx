

type Props = {
    products : string;
}

const Products = ({products}: Props) => {
  return (
    <div className="p-[1rem]">
        <button className="text-white bg-green-300 text-[1.1rem] px-[1rem] py-[0.5rem] rounded-[15px]">{products}</button>
    </div>
  )
}

export  default Products