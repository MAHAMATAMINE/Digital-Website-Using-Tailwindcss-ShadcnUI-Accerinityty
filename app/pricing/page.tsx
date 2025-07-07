"use client";

import { useState } from "react";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: "US $499",
    features: [
      "Fully responsive on all screens",
      "Design + Development",
      "Private communication channel",
      "1-3 days turnaround time",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "US $1299",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3-5 days turnaround time",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    price: "Let's Talk!",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      "Priority Development Queue",
      "Dedicated Project Manager",
    ],
    style:
      "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
      />

      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl pb-10 md:pb-20 text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50 px-6 text-center">
          Simple Pricing <br /> Choose your plan
        </h1>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6"
            >
              <div className={plan.style}>
                <div className="text-4xl flex items-center font-medium">
                  {plan.name}
                  {plan.button === "Contact Us" && (
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4">
                      Contact Us
                    </span>
                  )}
                </div>
                <div className="text-3xl pt-6">{plan.price}</div>
                <p className="py-6">{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center"
                    >
                      <PiCheckCircleFill
                        className={
                          plan.button === "Contact Us"
                            ? "text-blue-400 mr-2 text-xl"
                            : "text-green-600 mr-2 text-xl"
                        }
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {plan.button === "Buy Now" && (plan.index === 0 || plan.index === 1) && (
                  <Link
                    href="https://dashboard.stripe.com/register/checkout"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center items-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {plan.button === "Contact Us" && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
