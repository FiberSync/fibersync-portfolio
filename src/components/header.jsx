import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";


export default function Header({hidden=false}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthStatus, setAuthStatus] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if(sessionStorage.getItem("token")){
      setAuthStatus(true);
    }
    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = ()=>{
    sessionStorage.removeItem("orgName");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("plan");
    setAuthStatus(false);
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50  ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="jos max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
      <h2 className='font-poppins font-bold text-colorGreen text-3xl'><Link to='/'>FiberSync</Link></h2>
        
     
        {/* Navigation */}
      
        <nav className={`lg:flex items-center hidden lg:static`}>
  <ul style={{fontWeight: 500}} className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 text-white font-body text-base">
    <li className="relative dropdown dropdown-hover">
      <Link to="#" role="button" className="flex items-center gap-1 hover:text-colorGreen">Features</Link>
      <ul  className="dropdown-content bg-white rounded-md text-black shadow-lg mt-2 ">
      <Link to="/features_im"> <li  className=" hover:text-colorGreen mx-4 py-2">Inventory Management</li></Link>
      <Link to="/features_fa" > <li className=" hover:text-colorGreen  mx-4 py-2">Field Agent App</li></Link>
       <Link to="/" > <li className=" hover:text-colorGreen  mx-4 py-2">Adming Portal</li></Link>
        <Link to="/" ><li className=" hover:text-colorGreen  mx-4 py-2">Blockchain</li></Link>
      </ul>
    </li>
    <li><Link to="/" className="hover:text-colorGreen">About</Link></li>
    <li className="relative dropdown dropdown-hover">
      <Link to="#" role="button" className=" hover:text-colorGreen flex items-center gap-1">Services</Link>
      <ul className="dropdown-content rounded-md bg-white text-black shadow-lg mt-2">
      <Link to="/plans" className=" hover:text-colorGreen block px-4 py-2"><li>Services</li></Link>
        <Link to="/" className=" hover:text-colorGreen block px-4 py-2"><li>Service Details</li></Link>
      </ul>
    </li>
    {/* Additional menu items as needed */}
  </ul>
</nav> 
        {/* User Actions */}
        <div className="flex items-center gap-4">
        {
          isAuthStatus ? (
            <>
              <div
                className="hidden border-b-2 border-transparent font-bold text-white transition-all duration-300 hover:border-colorGreen hover:text-colorGreen lg:inline-block"
              >
                {sessionStorage.getItem("orgName")}
              </div>
              <div
                onClick={handleLogout}
                className="button w-auto hidden h-full cursor-pointer rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white lg:inline-block"
              >
                Log out
              </div>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="hidden border-b-2 border-transparent font-bold text-white transition-all duration-300 hover:border-colorGreen hover:text-colorGreen lg:inline-block"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="button w-auto hidden h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white lg:inline-block"
              >
                Login
              </Link>
            </>
          )
        }
          

          {/* Mobile Menu Button */}
          <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer" onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-black">
            <span className={` block w-6 h-0.5 bg-white mb-1.5`}></span>
            <span className={` block w-6 h-0.5 bg-white mb-1.5`}></span>
            <span className={` block w-6 h-0.5 bg-white mb-1.5`}></span>
          </label>
          <div className="drawer-side ">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-slate-800  text-base-content min-h-full w-[90vw] px-4">
            {/* Sidebar content here */}
            <li className="my-2 cursor-pointer font-spaceGrotesk hover:font-bold text-white"><Link to="/">Home</Link> </li>
            <li className="my-2 cursor-pointer font-spaceGrotesk hover:font-bold text-white"> <Link to="/login">Login</Link>  </li>
            <li className="my-2 cursor-pointer font-spaceGrotesk hover:font-bold text-white"><Link to="/sign">Sign Up</Link> </li>
            <li className="my-2 cursor-pointer font-spaceGrotesk hover:font-bold text-white"><Link to="/plans">Plans</Link> </li>
           {isAuthStatus? <li className="my-2 badge-outline badge font-spaceGrotesk hover:font-bold text-white">{sessionStorage.getItem("orgName")}</li>: <li className="my-2 badge-outline badge font-spaceGrotesk hover:font-bold text-white">Guest Mode</li>} 
           {isAuthStatus && <li className="my-2 badge-outline badge font-spaceGrotesk hover:font-bold text-colorGreen">Plan: {sessionStorage.getItem("plan")}</li>} 
            </ul> 
        </div>
          </div>
        </div>
      </div>
    

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-10 lg:hidden" onClick={() => setMenuOpen(false)}></div>
      )} 
      
    </header>
  );
}
