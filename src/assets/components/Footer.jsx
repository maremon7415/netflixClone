import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-[#b3b3b3] px-4 md:px-[6%] py-10 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white text-2xl transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white text-2xl transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white text-2xl transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-white text-2xl transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6 text-sm">
          <a href="#" className="hover:underline">
            Audio Description
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Legal Notices
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="hover:underline">
            Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Media Center
          </a>
          <a href="#" className="hover:underline">
            Account
          </a>
        </div>
        <p className="text-xs mb-2">&copy; 1997-2025 Netflix, Inc.</p>
        <p className="text-xs">
          This is a Netflix clone for educational purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
