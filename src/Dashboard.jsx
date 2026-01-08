import { Outlet } from "react-router";
import { useNavigation, NavLink } from "react-router";
import { useAuth } from "./hooks/useAuth";
import Spinner from "./components/Spinner";
import defaultPic from './assets/photos/dp.jpg';

function Dashboard() {

  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const { user, logoutUser } = useAuth();

  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
     <>

     <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <div className="flex-1">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
              {/* Sidebar toggle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 -2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <div className="px-4">
              <NavLink to="/" className="text-2xl font-bold pacifico-regular text-amber-600">HomeNest</NavLink>
              <span className="ml-2 text-sm opacity-70">Dashboard</span>
            </div>
          </div>
          
          <div className="flex-none">
            {user && (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-auto rounded-full">
                    <img className="w-full" src={user?.photoURL || defaultPic} alt={user?.displayName || 'Default Profile Pic'} />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-5 mt-3 w-52 p-2 shadow">
                  <li className="p-1">{user.displayName}</li>
                  <li className="p-1">{user.email}</li>
                  <li><a onClick={logoutUser} className="btn btn-soft bg-red-400 text-white">Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* Dashboard Home */}
            <li>
              <NavLink to='/dashboard' end className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                {/* Dashboard icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                <span className="is-drawer-close:hidden">Dashboard</span>
              </NavLink>
            </li>

            {/* Properties Section */}
            <li className="menu-title is-drawer-close:hidden">
              <span>Properties</span>
            </li>
            
            <li>
              <NavLink to='/dashboard/my-properties' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Properties">
                {/* Properties icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path></svg>
                <span className="is-drawer-close:hidden">My Properties</span>
              </NavLink>
            </li>

            <li>
              <NavLink to='/dashboard/add-property' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Property">
                {/* Add icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                <span className="is-drawer-close:hidden">Add Property</span>
              </NavLink>
            </li>

            <li>
              <NavLink to='/dashboard/my-ratings' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Ratings">
                {/* Star icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <span className="is-drawer-close:hidden">My Ratings</span>
              </NavLink>
            </li>

            {/* Navigation Section */}
            <li className="menu-title is-drawer-close:hidden">
              <span>Navigation</span>
            </li>

            <li>
              <NavLink to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Home">
                {/* Home icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>
                <span className="is-drawer-close:hidden">Back to Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink to='/all-properties' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Properties">
                {/* List icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>
                <span className="is-drawer-close:hidden">Browse All</span>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>

</div>
     </>
  );
}

export default Dashboard;