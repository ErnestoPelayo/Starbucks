import { useEffect, useState } from "react";
import { db, dbClass } from "../helpers/db";

const Stars = () => {
  const [state, setState] = useState<dbClass>()
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    setState(db.find((item) => item.id === 25))
    setSelected(25); 
  }, []);

  const onHandledClick = (star: number) => {
    const newstate = db.find((item) => item.id === star)
    setState(newstate)
    setSelected(star)
  };

  const buttonClass = (value: number) => 
    `flex justify-center pb-8  w-full ${
      selected === value ? "border-b-4 border-secondary" : ""
    }`;

  return (
    <>
      <div className="bg-lightWhite">
        <div className="pt-16 flex flex-col items-center lg:w-2/3 lg:mx-auto">
          <p className="text-center text-2xl font-bold">
            Get your favorites for free
          </p>
          <div className="w-5/6 flex items-center justify-between mt-10 text-xl lg:text-2xl">
            <button
              onClick={(e) => onHandledClick(+e.currentTarget.value)}
              value={25}
              className={buttonClass(25)}
            >
              25
              <i className="bx bxs-star text-yellow-400 bx-xs cursor-pointer"></i>
            </button>
            <button
              onClick={(e) => onHandledClick(+e.currentTarget.value)}
              value={100}
              className={buttonClass(100)}
            >
              100
              <i className="bx bxs-star text-yellow-400 bx-xs cursor-pointer"></i>
            </button>
            <button
              onClick={(e) => onHandledClick(+e.currentTarget.value)}
              value={200}
              className={buttonClass(200)}
            >
              200
              <i className="bx bxs-star text-yellow-400 bx-xs cursor-pointer"></i>
            </button>
            <button
              onClick={(e) => onHandledClick(+e.currentTarget.value)}
              value={300}
              className={buttonClass(300)}
            >
              300
              <i className="bx bxs-star text-yellow-400 bx-xs cursor-pointer"></i>
            </button>
            <button
              onClick={(e) => onHandledClick(+e.currentTarget.value)}
              value={400}
              className={buttonClass(400)}
            >
              400
              <i className="bx bxs-star text-yellow-400 bx-xs cursor-pointer"></i>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-lightGreen">
        <div className="w-5/6 mx-auto py-5 space-y-5 md:grid md:grid-flow-col md:items-center md:justify-between md:w-2/3 md:py-8 md:mx-auto  ">
          <img
            className=" gap-x-0 object-cover"
            src={`/${state?.img}`}
            alt=""
          />
          <div className="flex flex-col space-y-5 md:w-3/4">
            <p className="font-semibold text-2xl text-center">{state?.title}</p>
            <p className="text-gray-600 text-center">{state?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stars;
