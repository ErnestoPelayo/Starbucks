const RewardsComming = () => {
  return (
    <div className="bg-lightGreen">
      <p className="pt-10 font-bold text-xl text-center">
        Keep the Rewards Coming
      </p>
      <p className="pt-5 text-gray-700 text-center">
        The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
        and unlock perks from our partners, all while earning more Stars.
      </p>
      <div className="p-5 gap-4 grid lg:grid-cols-3 lg:w-5/6 lg:mx-auto">
        <article className="grid grid-cols-2 lg:flex lg:flex-col items-center">
          <img className="h-24 md:full" src="/delta-skymiles.webp" alt="" />
          <p className="text-sm md:text-lg">
            <span className="text-secondary underline hover:no-underline cursor-default">
              Link your Bank of America
            </span>{" "}
            eligible card and Starbucks® Rewards account to earn 2% Cash Back
            and Bonus Stars on qualifying Starbucks in-app purchases.2
          </p>
        </article>
        <article className="grid grid-cols-2 lg:flex lg:flex-col items-center">
          <img className="h-24 md:full" src="/bank-of-america.webp" alt="" />
          <p className="text-sm md:text-lg" >
            <span className="text-secondary underline hover:no-underline cursor-default">
              Link your Marriott Bonvoy®
            </span>{" "}
            and Starbucks® Rewards accounts to earn Double Stars during eligible
            stays, points during any Marriott Bonvoy Week and more.3
          </p>
        </article>
        <article className="grid grid-cols-2 lg:flex lg:flex-col items-center">
          <img className="h-24 md:full" src="/marriott-logo.webp" alt="" />
          <p className="text-sm md:text-lg">
            <span className="text-secondary underline hover:no-underline cursor-default">
              Link your Delta SkyMiles®
            </span>{" "}
            and Starbucks® Rewards accounts to earn miles on Starbucks Card
            reloads of $25 or more, plus Double Stars on travel days.1
          </p>
        </article>
        <button>Join Starbucks Rewards</button>
      </div>
    </div>
  );
};

export default RewardsComming;
