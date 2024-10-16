import React from 'react';
import logo  from '../assets/baarilabs.jpg';


const Navbar = () => {
  return (
    <nav className="bg-[#FE921C] p-4 shadow-md">
     <div className='ml-4 h-12 w-12'>
      <img src={logo} alt="" />

     </div>
    </nav>
  );
};

export default Navbar;
