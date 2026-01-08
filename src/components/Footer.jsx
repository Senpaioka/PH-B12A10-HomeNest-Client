// icons
import { FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 rounded p-16 mt-[100px]">
      {/* Footer Links */}
      <nav className="grid sm:grid-flow-col gap-4 text-amber-500">
        <a href="/about-us" className="link link-hover">
          About us
        </a>
        <a href="#" className="link link-hover">
          Contact
        </a>
        <a href="#" className="link link-hover">
          Jobs
        </a>
        <a href="#" className="link link-hover">
          Press kit
        </a>
      </nav>

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-6 text-amber-600">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter className="text-2xl hover:text-amber-700 transition" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="text-3xl hover:text-amber-700 transition" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-2xl hover:text-amber-700 transition" />
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p className="text-sm">
          © {new Date().getFullYear()} — All rights reserved by{" "}
          <span className="pacifico-regular font-semibold text-amber-600">
            HomeNest
          </span>{" "}
          Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
