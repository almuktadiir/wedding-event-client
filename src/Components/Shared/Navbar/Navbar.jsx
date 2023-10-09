import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/wed-logo2.png';
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#ee62a8] text-white font-semibold" : ""
        } to={`/`}>Home</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? 'bg-[#ee62a8] text-white font-semibold' : ""
        } to={`/invitation`}>Invitations</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? 'bg-[#ee62a8] text-white font-semibold' : ""
        } to={`/wedcake`}>Wedding Cakes</NavLink></li>
    </>

    return (
        <div className="border-b-pink-100 border-b shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                            {navLinks}
                            <li className="">
                                {
                                    user?.email ?
                                        < div className="flex items-center justify-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                            <div>
                                                <p className="text-black mx-1 border-0">{user.displayName}</p>
                                            </div>
                                            <div>
                                                <Link onClick={handleLogOut} className="btn btn-sm bg-[#ee62a8] text-xs text-white px-2 border-0">Logout</Link>
                                            </div>
                                        </div>
                                        :
                                        <div className="">
                                            <div>
                                                <Link to={'/login'} className="btn btn-sm bg-[#ee62a8] text-white px-5 border-0">Login</Link>
                                            </div>
                                        </div>
                                }
                            </li>
                        </ul>
                    </div>
                    <img className="w-16 h-16 rounded-full" src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-3xl font-wedding text-[#ee62a8ff]">Wedding Destiny</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="hidden md:block navbar-end">
                    {
                        user?.email ?
                            < div className="flex items-center justify-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <div>
                                    <p className="text-black mx-1 border-0">{user.displayName}</p>
                                </div>
                                <div>
                                    <Link onClick={handleLogOut} className="btn btn-sm bg-[#ee62a8] text-xs text-white px-2 border-0">Logout</Link>
                                </div>
                            </div>
                            :
                            <div className="flex items-center justify-end">
                                <div>
                                    <Link to={'/login'} className="btn btn-sm bg-[#ee62a8] text-white px-5 border-0">Login</Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;