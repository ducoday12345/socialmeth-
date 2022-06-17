import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user}) => {
  const navigate = useNavigate();

  if(!user) return null;

  return (
    <div className="flex gap-2 bg-[#AED6F1] rounded-xl shadow-md md:gap-5 w-full mt-2 pb-3 pt-3">
        <div className="flex justify-start items-center w-full px-2 rounded-md bg-[#AED6F1] border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input 
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}            
            onFocus={() => navigate('/search')}
            className="p-2 w-full bg-white outline-none bg-[#D6EAF8] rounded-md"
          />
        </div>
        <div className="flex gap-3">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img src = {user.image} alt="user-image" className="w-14 h-12 rounded-lg shadow-md"/>
          </Link>
          <Link to='create-pin' className="bg-black text-white rounded-lg shadow-md w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
            <IoMdAdd />
          </Link>
          
        </div>
    </div>
  )
};

export default Navbar;