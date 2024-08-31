import EarnStars from "../components/EarnStars";
import EndlessExtras from "../components/EndlessExtras";
import Stars from "../components/Stars";

const Rewards = () => {
  return (
    <>
      <div className="bg-lightGreen min-h-screen relative">
        <img 
          src="https://seeklogo.com/images/S/starbucks-logo-BFBFE6C3A3-seeklogo.com.png" 
          className="absolute top-3/4 right-0 lg:top-1/2 lg:right-0 transform -translate-y-1/2" 
          draggable={false} 
        />
        <div className="relative h-full flex justify-center items-center lg:w-5/6 mx-auto">
          <div className="w-5/6 mt-10 flex flex-col justify-center items-center md:items-start">
            <p className="text-4xl font-semibold text-center md:text-left md:text-2xl">
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
              Or{" "}
              <span className="underline hover:no-underline ">
                join in the app
              </span>{" "}
              for the best experience
            </p>
            <p className="lg:hidden mt-5 text-gray-600 text-center md:text-left text-lg">
              <span className="underline hover:no-underline ">
                Or join in the app
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center pt-16 pb-8 lg:py-24">
        <h1 className="text-2xl lg:text-4xl font-bold">Getting started is easy</h1>
        <p className="mt-5 text-gray-600 text-lg">
          Earn Stars and get rewarded in a few easy steps.
        </p>
      </div>
      <div className="pb-28 grid md:grid-cols-4 md:w-4/5 md:flex md:mx-auto md:gap-x-10">
        <article className="text-center w-5/6 mx-auto py-5 md:w-4/5 md:gap-0">
          <button className="rounded-full px-4 py-2.5  border-2 border-secondary text-sm text-secondary">
            1
          </button>
          <p className="font-bold p-3 text-xl">Create an account</p>
          <p className="text-gray-600 ">
            To get started,{" "}
            <span className="text-secondary underline hover:no-underline cursor-pointer">
              {" "}
              join now
            </span>
            . You can also{" "}
            <span className="text-secondary underline hover:no-underline cursor-pointer">
              {" "}
              Join in the app
            </span>{" "}
            to get access to the full range of Starbucks® Rewards benefits.
          </p>
        </article>
        <article className="text-center w-5/6 mx-auto py-5 md:w-4/5">
          <button className="rounded-full px-4 py-2.5  border-2 border-secondary text-sm text-secondary">
            2
          </button>
          <p className="font-bold p-3 text-xl">Order and pay how you’d like</p>
          <p className="text-gray-600 ">
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways.
            <span className="text-secondary underline hover:no-underline cursor-pointer">
              Learn how
            </span>
          </p>
        </article>
        <article className="text-center w-5/6 mx-auto py-5 md:w-4/5">
          <button className="rounded-full px-4 py-2.5  border-2 border-secondary text-sm text-secondary">
            3
          </button>
          <p className="font-bold p-3 text-xl">Earn Stars, get Rewards</p>
          <p className="text-gray-600 ">
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </article>
      </div>
      <Stars />
      <EndlessExtras />
      <EarnStars />
    </>
  );
};

export default Rewards;
