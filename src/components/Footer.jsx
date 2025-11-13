// icons
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Footer() {
  return (
    
   <footer className="footer footer-horizontal footer-center bg-base-200 rounded p-16 mt-[100px]">  
        <nav className="grid sm:grid-flow-col gap-4 text-amber-500">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
            <a href="#">
                <FaXTwitter className="text-2xl"></FaXTwitter>
            </a>
            <a href="#">
               <FaYoutube className="text-3xl"></FaYoutube>
            </a>
            <a href="#">
                <FaFacebookF className="text-2xl"></FaFacebookF>
            </a>
            </div>
        </nav>
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="pacifico-regular">HomeNest</span> Ltd</p>
        </aside>
    </footer>
    
  );
}

export default Footer;