const Rewards = () => {
  return (
    <div className="bg-lightGreen min-h-screen relative">
      <img className="absolute" draggable={false} />
      <div className="relative h-full flex justify-center items-center lg:w-5/6 mx-auto">
        <div className="w-5/6 mt-10 flex flex-col justify-center items-center md:items-start">
          <p className="text-4xl font-semibold text-center md:text-left md:text-2xl" >
            FREE COFFEE IS A TAP AWAY
          </p>
          <p className="mt-5 text-gray-600 text-center md:text-left text-xl ">
            Join now to start earning Rewards.
          </p>
          <button className="mt-10 px-4 py-1 rounded-full bg-secondary text-white text-lg lg:hidden">
            Join in the app
          </button>
          <button className="mt-10 px-4 py-1 rounded-full bg-secondary text-white text-lg hidden lg:block">
            Join now
          </button>
          <p className="hidden lg:block mt-5 text-gray-600 text-center md:text-left text-xl">
            Or <span className="underline hover:no-underline ">join in the app</span> for the best experience
          </p>
          <p className="lg:hidden mt-5 text-gray-600 text-center md:text-left text-xl">
            <span className="underline hover:no-underline ">Or join in the app</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
