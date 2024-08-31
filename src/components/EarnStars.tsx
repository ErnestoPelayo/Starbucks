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
      <div className="lg:w-5/6">
        <div className="grid  md:grid-cols-1 lg:grid-cols-2">
          <div>
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
              <p className="font-semibold text-xl">Scan and pay separately</p>
              <p className="mt-5 text-lg text-gray-800">
                  Use cash or credit/debit card at the register.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 border-t-2 text-gray-500"></div>
    </div>
  );
};

export default EarnStars;