import React from "react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
        <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
          {testimonial.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-300">{testimonial.title}</p>
      </div>
    </div>
  );
}
