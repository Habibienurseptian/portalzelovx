import React from "react";

function Navbar(){
    return(
        <section className='bg-black animate-split-in-top'>
        <nav className='flex px-12 py-4 items-center'>
          <h1 className='mr-auto font-extrabold text-lg'>Zelovxᵀᴹ</h1>
          <ul className='flex flex-row gap-4 font-semibold text-sm'>
            <li className='hover:text-purple-500'><a href="">Home</a></li>
            <li className='hover:text-purple-500'><a href="">Tools</a></li>
            <li className='hover:text-purple-500'><a href="">Pricing</a></li>
            <li className='hover:text-purple-500'><a href="">Docs</a></li>
          </ul>
        </nav>
      </section>
    )
}

export default Navbar;