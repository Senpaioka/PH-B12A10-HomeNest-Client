import { NavLink, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import defaultPic from '../assets/photos/dp.jpg';


function Navbar() {

    const { user, logoutUser } = useAuth();

    const menuLink = (
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-products'>All Properties</NavLink></li>
        <li><NavLink to='/my-products'>My Properties</NavLink></li>
        <li><NavLink to='/bids'>My Ratings</NavLink></li>
        <li><NavLink to='/create-product'>Add Properties</NavLink></li>
    </>
  )

    return (
        <div className="bg-base-100 shadow-sm">
        <div className="navbar w-10/12 mx-auto">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    { menuLink }
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">HomeNest</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                { menuLink }
                </ul>
            </div>

            <div className="navbar-end">


                {
                !user ?
                (
                    <>
                    <div className="flex items-center gap-3 flex-wrap">
                    <Link to='/registration' className="btn px-3 py-2">SignUp</Link>
                    <Link to='/login' className="btn px-5 py-2">Login</Link>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 h-auto rounded-full">
                            <img className="w-full" src={user?.photoURL || defaultPic} alt={user?.displayName || 'Default Profile Pic'} />
                        </div>
                        </div>
                        <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className="p-1">{user.displayName}</li>
                        <li className="p-1">{user.email}</li>
                        <li><a onClick={logoutUser} className="btn btn-soft">Logout</a></li>
                        </ul>
                    </div>   
                    </>
                )
                }

            </div>
        </div>
    </div>
    );
}

export default Navbar;