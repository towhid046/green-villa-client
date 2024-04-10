/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const socialIcons = [
    <FaFacebook />,
    <FaWhatsapp />,
    <FaInstagram />,
    <FaXTwitter />,
  ];

  return (
    <>
      <footer className="bg-neutral">
        <div className="footer container border-b mx-auto px-4 p-10 text-neutral-content">
          <div className="max-w-md">
            <Link
              to="/"
              className="font-bold md:text-3xl text-2xl bg-gradient-to-r from-green-600 to-indigo-300  text-transparent bg-clip-text"
            >
              GreenVilla
            </Link>
            <p>
              GreenVilla is your premier destination for luxurious estate living
              nestled amidst nature's embrace.{" "}
            </p>
            <ul className="mt-4 flex gap-3 text-xl items-center text-blue-400">
              {socialIcons.map((icon) => (
                <li className="cursor-pointer" key={icon}>
                  {icon}
                </li>
              ))}
            </ul>
          </div>
          <nav>
            <h6 className="footer-title text-lg">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">FAQ</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg">Services</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg">Contact</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
      <footer className="  bg-neutral ">
        <div className=" container md:flex-row flex-col flex justify-between  mx-auto px-4 items-center py-4 text-neutral-content text-[13px] gap-3">
            <p>Copyright &copy; 2024 - All right reserved</p>
              <ul className="flex gap-3">
                <li>Terms of use</li> |
                <li>Privacy policy</li>
              </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
