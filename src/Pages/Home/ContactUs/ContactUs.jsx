import { MdCall, MdLocationCity, MdWhatsapp } from "react-icons/md";
const images = "https://i.ibb.co/6Fw6dV5/meals6.jpg";
const img1 = "https://i.ibb.co/nz0bF1T/meals5.jpg";
const img2 = "https://i.ibb.co/NymD7JN/meals4.jpg";
const img3 = "https://i.ibb.co/VwRt3zN/meals3.png";
const img4 = "https://i.ibb.co/RhFxYvd/mealssss.png";

import { SiGmail } from "react-icons/si";
import ContactForm from "./ContactForm/ContactForm";
const ContactUs = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col-reverse justify-between gap-4 mt-10 md:flex-row-reverse md:gap-8 lg:gap-28">
        <div className="w-full md:w-3/5">
          <h1
            data-aos="fade-right"
            className="inline-block text-4xl font-bold border-b-4 md:text-5xl text-redLi border-secondColor"
          >
            Contact Us
          </h1>

          <p data-aos="fade-down" className="max-w-[600px] text-slate-400 my-6">
            {`Connect with Fueled Student easily through our Contact Us section. Reach out for inquiries, collaborations, or assistance, and let's create together!`}
          </p>
          <div className="grid grid-cols-2 gap-2 mt-10 rounded-lg shadow-lg h-80">
            <div
              data-aos="fade-down"
              className="flex items-center justify-center w-full bg-red-300 rounded-md rounded-tl-lg"
            >
              <div className="w-full h-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full overflow-hidden bg-fixed rounded-md"
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.6)" }}
                  ></div>
                  <div className="absolute z-30 w-full text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span className="inline-block mx-auto text-6xl">
                      <MdLocationCity />
                    </span>
                    <p className="w-full text-white">
                      Mirpur 10, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex items-center justify-center w-full bg-red-300 rounded-md rounded-tl-lg"
            >
              <div className="w-full h-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full overflow-hidden bg-fixed rounded-md"
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.6)" }}
                  ></div>
                  <div className="absolute z-30 w-full text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span className="inline-block mx-auto text-6xl">
                      <MdCall />
                    </span>
                    <p className="text-white">+880 124534643</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex items-center justify-center w-full bg-red-300 rounded-md rounded-tl-lg"
            >
              <div className="w-full h-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full overflow-hidden bg-fixed rounded-md"
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.6)" }}
                  ></div>
                  <div className="absolute z-30 w-full text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span className="inline-block mx-auto text-6xl">
                      <MdWhatsapp />
                    </span>
                    <p className="text-white">+880 124534643</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="flex items-center justify-center w-full bg-red-300 rounded-md rounded-tl-lg"
            >
              <div className="w-full h-full overflow-hidden rounded-md">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] rounded-md"
                  style={{
                    backgroundImage: `url(${img4})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full overflow-hidden bg-fixed rounded-md"
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.6)" }}
                  ></div>
                  <div className="absolute z-30 w-full text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span className="inline-block mx-auto text-6xl">
                      <SiGmail />
                    </span>
                    <p className="text-white">farhanmazumder0@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[55%] lg:w-[45%] flex items-center">
          <div
            data-aos="zoom-out-down"
            className="w-full h-72 md:min-h-[350px] lg:min-h-[510px] rounded-3xl border-2 border-secondColor"
            style={{
              backgroundImage: `url(${images})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={images} alt="" /> */}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
