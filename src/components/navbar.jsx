import React from "react";

function Navbar(){
    return(
        <section className='animate-split-in-top'>
        <nav className='flex px-12 py-4 items-center'>
          <h1 className='mr-auto font-extrabold text-lg'>Zelovxᵀᴹ</h1>
          <ul className='flex flex-row gap-4 font-semibold text-sm'>
            <li className='hover:text-purple-500'><a href="#profile">Home</a></li>
            <li className='hover:text-purple-500'><a href="#project">Project</a></li>
            <li className='hover:text-purple-500'><a href="#language">Language</a></li>
            <li className='hover:text-purple-500'><a href="">Set  </a></li>
          </ul>
        </nav>
      </section>  
    )
}

export default Navbar;