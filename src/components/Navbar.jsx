import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () =>{
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
        <Link to={'/'}>
        {/* <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>netflix</h1> */}
        <img
    className="nav__logo"
    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
    alt="Netflix"
/>

        </Link>

        {
          user?.email ? (
            <div className='mr-24'>
            <Link to={'/profile'}>
            <button className='capitalize pr-4 font-bold'>profile</button>
            </Link>
           
            <button onClick={handleLogout} className='capitalize bg-red-600 px-6 py-1 rounded cursor-pointer font-bold transition-all duration-300 hover:bg-red-700'>Logout</button>
            
        </div>
          ) : 
          (
            <div className='mr-24'>
            <Link to={'/login'}>
            <button className='capitalize pr-4 font-bold'>login</button>
            </Link>
            <Link to={'/signup'}>
            <button className='capitalize bg-red-600 px-6 py-1 rounded cursor-pointer font-bold transition-all duration-300 hover:bg-red-700'>sign up</button>
            </Link>
        </div>
          )
        }

    </div>
  )
}

export default Navbar