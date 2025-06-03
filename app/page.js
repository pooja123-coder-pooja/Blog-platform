"use client";
import React, { useRef, useEffect, useState } from "react";
import PlanCard from "@/components/PlanCard";
import TestimonialCard from "@/components/TestimonialCard";
import Typed from "typed.js";


const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$19/mo",
    features: [
      "Access to all basic features",
      "Email support",
      "50 GB storage",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$49/mo",
    features: [
      "Everything in Basic",
      "Priority email support",
      "200 GB storage",
      "Custom domain",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$99/mo",
    features: [
      "Everything in Standard",
      "Phone & chat support",
      "Unlimited storage",
      "Advanced analytics",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    text: "This service has been a game-changer for our business. Highly recommend!",
    name: "John Doe",
    title: "CEO, Company A",
  },
  {
    text: "Amazing experience! The team was professional and the results were outstanding.",
    name: "Jane Smith",
    title: "Marketing Director, Company B",
  },
  {
    text: "Exceptional service and support. We couldn't be happier with the results.",
    name: "Michael Brown",
    title: "CTO, Company C",
  },
];

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(2); // Default to Standard Plan
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
      ],
      typeSpeed: 50,
      loop: true,
      backSpeed: 25,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen py-12">
       {/* Hero Section */}
       <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community{" "}
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps,
            projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {plans.map((plan) => (
              <div key={plan.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <PlanCard
                  plan={plan}
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
