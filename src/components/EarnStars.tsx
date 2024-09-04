import Card from "./Card";

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
      <div className="w-5/6 mx-auto lg:mx-10">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-1/3">
            <p className="font-semibold text-lg">1★ per dollar</p>
            <p className="text-gray-700">Pay as you go</p>
          </div>
          <div className="flex flex-col md:flex-row ">
            <Card 
              title="Scan and pay separately"
              description="Use cash or credit/debit card at the register."
              img="1A.png"
              />
            <Card 
            title="Save payment in the app"
            description="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
            img="1B.webp"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full h-2 "></div>
      <div className="w-5/6 mx-auto lg:mx-10">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-1/3">
            <p className="font-semibold text-lg">2★ per dollar</p>
            <p className="text-gray-700">Add funds in the app</p>
          </div>
          <div className="flex flex-col md:flex-row">
          <Card 
            title="Preload"
            description="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
            img="2A.png"
            />
            <Card 
            title="Register your gift card"
            description="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
            img="2B.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnStars;
