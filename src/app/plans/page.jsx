"use client";

import {
  FaUserMd,
  FaCheckCircle,
  FaCrown,
  FaStar,
  FaRocket,
} from "react-icons/fa";

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      title: "Basic",
      price: "Free",
      icon: <FaUserMd size={40} />,
      color: "text-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600",
      features: [
        "Book up to 3 appointments / month",
        "Search doctors",
        "View doctor profiles",
        "Appointment history",
        "Basic customer support",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Standard",
      price: "$9.99",
      duration: "/month",
      icon: <FaStar size={40} />,
      color: "text-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        "Unlimited appointments",
        "Priority booking",
        "Video consultation",
        "Appointment reminders",
        "Doctor chat support",
        "Faster customer support",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "Premium",
      price: "$19.99",
      duration: "/month",
      icon: <FaCrown size={40} />,
      color: "text-yellow-500",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      features: [
        "Everything in Standard",
        "24/7 doctor consultation",
        "Family member management",
        "Digital prescription history",
        "Free appointment cancellation",
        "Priority specialist access",
        "Premium customer support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black-800">
            Choose Your Healthcare Plan
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Select the perfect plan for your healthcare journey. Upgrade anytime
            and enjoy premium healthcare services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl shadow-lg border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "border-blue-600 scale-105" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-2">
                    <FaRocket />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`mb-5 ${plan.color}`}>{plan.icon}</div>

              <h3 className="text-2xl font-bold text-black-800">
                {plan.title}
              </h3>

              <div className="flex items-end mt-5">
                <span className="text-5xl font-bold text-black-900">
                  {plan.price}
                </span>

                {plan.duration && (
                  <span className="text-gray-500 ml-2 mb-2">
                    {plan.duration}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <form action="/api/checkout_sessions" method="POST">
              <input type="hidden" name="plan_id" value={plan.id} />
                <section>
                  <button
                    type="submit"
                    role="link"
                    className={`w-full mt-10 py-3 rounded-xl text-white font-semibold transition ${plan.buttonColor}`}
                  >
                    Checkout
                  </button>
                </section>
              </form>
              {/* <button
                className={`w-full mt-10 py-3 rounded-xl text-white font-semibold transition ${plan.buttonColor}`}
              >
                {plan.price === "Free" ? "Get Started" : "Subscribe Now"}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
