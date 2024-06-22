import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
// import usePayment from "../../Hooks/usePayment";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSec from "../../Hooks/useAxiosSec";
// import Swal from "sweetalert2";

const PricingSection = () => {
  const data = "Platinum";
  return (
    <>
      <section
        id="package"
        className="py-12"
        style={{
          background:
            "radial-gradient(circle, rgba(86,28,134,0.3841911764705882) 18%, rgba(30,41,59,1) 100%)",
        }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-xl text-purple-200">
              You unlock your service as per your requirement
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="relative p-6 overflow-hidden duration-300 rounded-lg shadow-lg hover:bg-white hover:bg-opacity-10 hover:scale-110">
              <div className="absolute top-0 right-0 m-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full">
                  Silver
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Basic Pack
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">$49</span>
                <span className="text-xl font-medium text-purple-200">/mo</span>
              </div>
              <ul className="mb-8 space-y-4 text-purple-200 h-36">
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Limited number of food orders per month</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Access to basic hostel services</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Basic customer support</span>
                </li>
              </ul>
              {data === "Silver" ? (
                <button
                  //   onClick={handleActive}
                  className="block w-full px-6 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Activated Plan
                </button>
              ) : (
                <Link
                  //   onClick={handlePay}
                  to={"/checkout/Silver"}
                  className="block w-full px-6 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Purchase Plan
                </Link>
              )}
            </div>

            {/* Pro Plan */}
            <div className="relative p-6 overflow-hidden duration-300 rounded-lg shadow-lg hover:bg-white hover:bg-opacity-10 hover:scale-110">
              <div className="absolute top-0 right-0 m-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-yellow-100 rounded-full">
                  Gold
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white capitalize">
                  Standard Pack
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">$199</span>
                <span className="text-xl font-medium text-purple-200">/mo</span>
              </div>
              <ul className="mb-8 space-y-4 text-purple-200 h-36">
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>More food orders per month</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Access to advanced hostel services</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Priority customer support</span>
                </li>
              </ul>
              {data === "Gold" ? (
                <button
                  //   onClick={handleActive}
                  className="block w-full px-6 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                >
                  Activated Plan
                </button>
              ) : (
                <Link
                  //   onClick={handlePay}
                  to={"/checkout/Gold"}
                  className="block w-full px-6 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                >
                  Purchase Plan
                </Link>
              )}
            </div>

            {/* Enterprise Plan */}
            <div className="relative p-6 overflow-hidden duration-300 rounded-lg shadow-lg hover:bg-white hover:bg-opacity-10 hover:scale-110">
              <div className="absolute top-0 right-0 m-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-yellow-800 bg-green-100 rounded-full">
                  Platinum
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Premium Pack
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">$399</span>
                <span className="text-xl font-medium text-purple-200">/mo</span>
              </div>
              <ul className="mb-8 space-y-4 text-purple-200 h-36">
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Unlimited food orders</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Access to all hostel servicess</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span>Premium customer support</span>
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-2xl text-green-400">
                    <MdDone />
                  </span>
                  <span> laundry service, gym access</span>
                </li>
              </ul>
              {data === "Platinum" ? (
                <button
                  //   onClick={handleActive}
                  className="block w-full px-6 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  Activated Plan
                </button>
              ) : (
                <Link
                  //   onClick={handlePay}
                  to={"/checkout/Platinum"}
                  className="block w-full px-6 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  Purchase Plan
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
