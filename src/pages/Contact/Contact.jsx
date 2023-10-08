import React, { useRef } from "react";
import Container from "../../components/Container/Container";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { IoMailOutline } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
import { ScrollLink } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dzzsmjc",
        "template_zuekuc9",
        form.current,
        "zYW_IYqNLKr_VokYL"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const title = (
    <>
      Let's Work <span className="text-[#28E98C]">Together</span>
    </>
  );

  return (
    <section className="py-[90px] overflow-hidden relative" id="contact">
      <Container>
        <SectionContainer>
          <SectionHeader title={title} name={"contact"} Icon={IoMailOutline} />
          {/* Contact Form */}
          <div className="py-16 text-white">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex items-center gap-5 mb-8">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="from_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full text-sm text-neutral-400 bg-transparent border-0 border-b border-neutral-600 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="off"
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="from_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-neutral-400 bg-transparent border-0 border-b border-neutral-600 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="off"
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address <span className="text-red-600">*</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-8">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="phone"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-neutral-400 bg-transparent border-0 border-b border-neutral-600 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="off"
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone{" "}
                    <span className="text-xs text-neutral-400">(optional)</span>
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="subject"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-neutral-400 bg-transparent border-0 border-b border-neutral-600 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject <span className="text-red-600">*</span>
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="text"
                  name="budget"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-neutral-400 bg-transparent border-0 border-b border-neutral-600 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Budget{" "}
                  <span className="text-xs text-neutral-400">(optional)</span>
                </label>
              </div>
              {/* <div className="mb-8">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="file_input"
                >
                  Add an Attachment
                </label>
                <input
                  name="file"
                  className="block w-full text-sm text-neutral-400 border-b border-neutral-600 cursor-pointer bg-transparent"
                  id="file_input"
                  type="file"
                />
              </div> */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block py-2.5 px-0 w-full text-sm text-neutral-400 bg-transparent border-0 border-b border-neutral-600 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>

              {/* <ScrollLink to="contact" smooth={true} duration={1000}>
                <div className="flex items-center gap-2 bg-[#28E98C] rounded-full py-3 justify-center text-black text-lg hover:bg-transparent hover:border-[#28E98C] border-[#28E98C] border-2 hover:text-[#28E98C]  transition-colors duration-300">
                  {" "}
                  <AiOutlineMail /> <button>HIRE ME!</button>
                </div>
              </ScrollLink> */}

              <button
                type="submit"
                className="w-full md:w-[250px] bg-[#28E98C] rounded-full py-3 text-black text-lg hover:bg-transparent hover:border-[#28E98C] border-[#28E98C] border-2 hover:text-[#28E98C] transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <GrSend /> <span className="uppercase">Send Message</span>
              </button>
            </form>
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Contact;
