
type PropsCard = {
    title:string,
    img:string,
    description:string
}

const Card = ({title,img,description}:PropsCard) => {
  return (
      <div className="flex gap-3 mt-3 w-96">
        <img className="h-48 w-32" src={img} alt="" />
        <div className="flex flex-col">
          <p className="font-semibold ">{title}</p>
          <p className="mt-5 text-gray-800 text-sm">
            {description}
          </p>
        </div>
      </div>
  );
};

export default Card;
