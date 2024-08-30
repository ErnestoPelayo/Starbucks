const EndlessExtras = () => {
  return (
    <div className="pb-20 pt-20">
      <p className="text-2xl text-center font-bold">Endless Extras</p>
      <p className="mt-5 px-5 mx-auto text-md text-center md:flex md:w-1/2 md:mx-auto md:justify-center md:items-center">
        Joining Starbucks® Rewards means unlocking access to benefits like quick
        and easy ordering, tasty Rewards and—yes, free coffee.
      </p>

      <div className="mt-10 gap-y-10 grid md:grid-cols-3 md:w-5/6 md:mx-auto md:space-y-2">
        <article className="flex gap-x-5 px-4 mx-auto md:flex-col md:items-center">
          <div>
            <img className="md:scale-50" src={`/funfreebies.webp`} alt="" />
          </div>
          <div className="flex flex-col space-y-2  md:text-center">
            <p className="font-bold">Fun freebies</p>
            <p className="text-sm">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <p className="underline text-secondary hover:no-underline cursor-default">
              Learn more
            </p>
          </div>
        </article>
        <article className="flex gap-x-5 px-4 mx-auto md:flex-col md:items-center">
          <div>
            <img className=" md:scale-50" src={`/orderandpayahead.webp`} alt="" />
          </div>
          <div className="flex flex-col space-y-2  md:text-center">
            <p className="font-bold">Order & pay ahead</p>
            <p className="text-sm">
            Master the art of ordering ahead with saved favorites and payment methods.
            </p>
            <p className="underline text-secondary hover:no-underline cursor-default">
              Learn more
            </p>
          </div>
        </article>
        <article className="flex gap-x-5  px-4 mx-auto md:flex-col md:items-center">
          <div>
            <img className=" md:scale-50" src={`/gettofreefaster.webp`} alt="" />
          </div>
          <div className="flex flex-col space-y-2  md:text-center">
            <p className="font-bold">Get to free faster</p>
            <p className="text-sm">
            Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games
            </p>
            <p className="underline text-secondary hover:no-underline cursor-default">
              Learn more
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EndlessExtras;
