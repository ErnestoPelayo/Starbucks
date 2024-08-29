import TopStarbucks from "./TopStarbucks";

const Header = () => {
  return (
    <>
      <nav className="bg-white w-full relative z-10">
        <div className="flex items-center h-full gap-4 text-gray-800 justify-between">
          <div className="flex items-center gap-8 font-mono font-semibold px-10 h-24">
            <div className="flex justify-center gap-4">
              <img
                className="min-w-12 h-12"
                src="https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-1.png"
                alt=""
              />
            </div>
            <div className="hidden lg:flex items-center justify-center border-b-4 border-opacity-0 border-white h-full">
              <p className="p-2 hover:text-secondary cursor-pointer">MENU</p>
            </div>
            <div className="hidden lg:flex items-center justify-center h-full border-b-4 border-secondary">
              <p className="p-2 hover:text-secondary cursor-pointer">REWARDS</p>
            </div>
            <div className="hidden lg:flex items-center justify-center border-b-4 border-opacity-0 border-white h-full">
              <p className="p-2 hover:text-secondary cursor-pointer">
                GIFT CARDS
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center h-full gap-8 font-mono px-10">
            <div className="gap-8">
              <i className="flex bx bxs-been-here bx-sm hover:text-secondary cursor-pointer">
                <p className="text-sm font-custom2">Find a Store</p>
              </i>
            </div>
            <div className="flex gap-4 font-mono">
              <button className="bg-white text-sm  text-gray-700 border border-black rounded-full p-1 px-4 hover:bg-ligthNatural">
                Sign in
              </button>
              <button className="bg-black text-white rounded-full px-6 p-1 hover:opacity-75">
                Join now
              </button>
            </div>
          </div>
          <div className="lg:hidden px-4">
            <i className="bx bx-menu bx-md text-gray-500"></i>
          </div>
        </div>
      </nav>
      <TopStarbucks />
    </>
  );
};

export default Header;
