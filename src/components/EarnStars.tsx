const EarnStars = () => {
  return (
    <div className="pt-10 bg-ligthNatural">
      <p className="font-bold text-2xl text-center">
        Cash or card, you earn Stars
      </p>
      <div className="flex items-center justify-center">
        <p className="text-center md:w-2/4 p-4">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </div>
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5">
          <div className="w-full lg:w-2/5 ">
            <p className="font-semibold text-lg">1★ per dollar</p>
            <p className="text-gray-700">Add funds in the app</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex gap-3 mt-3 lg:w-5/6">
              <img className="h-48 w-32" src="/1B.webp" alt="" />
              <div className="flex flex-col">
                <p className="font-semibold ">Preload</p>
                <p className="mt-5 text-gray-800 text-sm">
                  Use cash or credit/debit card at the register.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-3 lg:w-5/6">
              <img className="h-48 w-32" src="/1B.webp" alt="" />
              <div className="flex flex-col">
                <p className="font-semibold ">Save payment in the app</p>
                <p className="mt-5 text-gray-800 text-sm">
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full h-2 "></div>
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5">
          <div className=" lg:w-2/5">
            <p className="font-semibold text-lg">2★ per dollar</p>
            <p className="text-gray-700">Add funds in the app</p>
          </div>
          <div className="flex flex-col lg:flex-row   ">
          <div className="flex gap-3 mt-3 lg:w-5/6">
          <img className="h-28 w-24" src="/2A.png" alt="" />
              <div className="flex flex-col">
                <p className="font-semibold ">Preload</p>
                <p className="mt-5 text-gray-800 text-sm">
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-3 lg:w-full">
              <img className="h-48 w-32" src="/2B.webp" alt="" />
              <div className="flex flex-col">
                <p className="font-semibold ">Preload</p>
                <p className="mt-5 text-gray-800 text-sm">
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnStars;
/*
  <div className="lg:w-5/6">
        <div className="grid grid-rows-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="w-1/3">
            <p className="text-xl font-semibold">1★ per dollar</p>
            <p className="text-lg text-gray-800">Pay as you go</p>
          </div>
          <div className="grid md:grid-cols-2 ">
            <div className="lg:grid lg:grid-cols-2">
              <img className="object-cover lg:h-40" src="/1A.png" alt="" />
              <div>
                <p className="font-semibold text-xl">Scan and pay separately</p>
                <p className="mt-5 text-lg text-gray-800">
                  Use cash or credit/debit card at the register.
                </p>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
              <img className="object-cover lg:h-40" src="/1B.webp" alt="" />
              <div>
                <p className="font-semibold text-xl">Save payment in the app</p>
                <p className="mt-5 text-lg text-gray-800">
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

*/
