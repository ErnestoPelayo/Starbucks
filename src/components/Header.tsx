import React from 'react'

const Header = () => {
  return (
    <nav className="bg-white w-full font-custom2 ">
      <div className="flex items-center h-full gap-4 text-gray-800 justify-between ">
        <div className="flex items-center gap-8 font-black px-10 h-24">
          <div className="flex justify-center gap-4">
            <img className="h-12 " src="https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-1.png" alt="" />
          </div>
          <div className="flex items-center justify-center border-b-4 border-opacity-0 border-white h-full">
           <p className="p-2 hover:text-secondary cursor-pointer">
            MENU
           </p>
          </div>
          <div className="flex items-center justify-center h-full border-b-4 border-secondary">
            <p className="p-2 hover:text-secondary cursor-pointer">
            REWARDS
            </p>
          </div>
          <div className="flex items-center justify-center border-b-4 border-opacity-0 border-white h-full">
           <p className="p-2 hover:text-secondary cursor-pointer">
            GIFT CARDS
           </p>
          </div>
        </div>
        <div className="flex items-center h-full gap-4 font-medium px-10">
        <i className='flex bx bxs-been-here bx-sm hover:text-secondary cursor-pointer'> 
        <p className="text-sm font-custom2">Find a Store</p>
          </i> 
          
          <button className="bg-white text-sm text-gray-700 border border-black rounded-full p-1 px-4 hover:bg-ligthNatural">Sign in</button>
          <button className="bg-black text-white rounded-full px-3 p-1">Join now</button>
        </div>
      </div>
    </nav>
  )
}

export default Header