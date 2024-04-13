import SectionHeading from "./../shared/SectionHeading/SectionHeading";
import { LuPhone } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import customerSupportImage from "../../../src/assets/images/customer-support.png";
import { useEffect } from "react";
import { scrollToTop } from "../../utility/scrollToTop";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const sectionDescription = `We'd love to hear from you! If you have any questions, comments, or
    would like to get in touch with us, please don't hesitate to reach
    out. Your feedback and inquiries are important to us, and we're here
    to assist you in any way we can.`;

  const contacts = [
    { icon: <LuPhone />, text: "+11 23456789123" },
    { icon: <IoMailOutline />, text: "abc123@gmail.com" },
    {
      icon: <FiMapPin />,
      text: "127 Downtown Metropolis, New York",
    },
  ];

  return (
    <section className="py-12">
      <Helmet>
        <title>Green Villa | Contact</title>
      </Helmet>
      <div className=" container min-h-[90vh] mx-auto px-4">
        <div className="">
          <SectionHeading
            sectionTitle="Get in Touch"
            sectionDescription={sectionDescription}
          />
        </div>

        <div className="container flex justify-between bg-white rounded-lg border p-5 gap-8 flex-col lg:flex-row">
          <div
            data-aos-duration="1000"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
            className="lg:w-1/2"
          >
            <div className=" bg-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className=" bg-white border-l-4 border-green-300 shadow-sm p-4 mb-6 rounded-lg">
                <p className="text-blue-900">
                  Feel free to let us know if you have any questions or concerns
                  about Green Villa journey, we're happy to help!
                </p>
              </div>
              <ul className=" text-blue-900 space-y-3">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-lg">{contact.icon}</span>
                    <span>{contact.text}</span>
                  </li>
                ))}
              </ul>
              <div className="customatSupport flex justify-center">
                <img
                  src={customerSupportImage}
                  alt="Customer Support Image"
                  className="w-60"
                />
              </div>
            </div>
          </div>

          <div
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
            data-aos="fade-left"
            className="lg:w-1/2"
          >
            <form className="space-y-3">
              <div className="flex flex-col xl:flex-row items-center gap-4">
                <div className="w-full">
                  <label className="label">
                    <strong className="label-text">Your Name</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="label">
                    <strong className="label-text">Email</strong>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Subject</strong>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your Subject"
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Message</strong>
                </label>
                <textarea
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3] textarea  text-base xl:h-60 h-40"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full rounded-lg hover:bg-black text-white bg-[#2B3440]">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
