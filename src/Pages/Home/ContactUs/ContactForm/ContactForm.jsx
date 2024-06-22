import { useForm } from "react-hook-form";
import { BsSendFill } from "react-icons/bs";
const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex flex-col gap-10 p-4 border-2 md:p-8 rounded-3xl mt-14 md:flex-row">
        <div className="relative w-full md:w-2/5">
          <h1 data-aos="fade-right" className="text-4xl font-bold">
            Send Us An Email
          </h1>
          <p data-aos="fade-down" className="pt-8 text-justify text-slate-400">
            {`Need help? Contact us at email@example.com or call (+880) 1719 199967.
          We're here to assist you with your orders and inquiries.`}
          </p>
          <h1 className="pt-6 pb-2 text-2xl font-bold">Our Address</h1>
          <p className="text-slate-400">Mirpur 10, Dhaka, Bangladesh</p>
          <h1 className="pt-6 pb-2 text-2xl font-bold">Call Now</h1>
          <p className="text-slate-400">+8800 1719 199967</p>
          <p className="text-slate-400">+8800 1326 142663</p>
        </div>
        <div data-aos="fade-left" className="w-full md:w-3/5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              className="px-4 py-2 bg-transparent border rounded-md outline-none"
              type="text"
              placeholder="Your name"
              {...register("Your name", { required: true, maxLength: 80 })}
            />
            <input
              className="px-4 py-2 bg-transparent border rounded-md outline-none"
              type="text"
              placeholder="Your Email"
              {...register("Your Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <input
              className="px-4 py-2 bg-transparent border rounded-md outline-none"
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            <input
              className="px-4 py-2 bg-transparent border rounded-md outline-none"
              type="text"
              placeholder="Subject"
              {...register}
            />
            <textarea
              className="px-4 py-2 bg-transparent border rounded-md outline-none h-36"
              placeholder="Your Message"
              {...register("Your Message", { min: 10 })}
            />
            <button className="flex items-center justify-center gap-2 px-2 py-2 font-semibold text-white duration-150 border-2 rounded-md cursor-pointer bg-firstColor hover:text-firstColor active:scale-95 hover:bg-transparent border-firstColor">
              Send <BsSendFill />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
