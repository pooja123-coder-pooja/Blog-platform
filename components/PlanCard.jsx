import React from "react";
import { Button } from "@/components/ui/button";

export default function PlanCard({ plan, selectedPlan, setSelectedPlan }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 text-center ${
        selectedPlan === plan.id
          ? "bg-purple-600 text-white dark:bg-purple-700"
          : "bg-white dark:bg-gray-800"
      } ${plan.popular ? "border-2 border-purple-500" : ""}`}
    >
      <h3
        className={`text-2xl font-semibold ${
          selectedPlan === plan.id
            ? "text-white"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-4 ${
          selectedPlan === plan.id
            ? "text-purple-200"
            : "text-gray-500 dark:text-gray-300"
        }`}
      >
        {plan.price}
      </p>
      {plan.popular && (
        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
          Bestseller
        </span>
      )}
      <ul
        className={`mt-6 mb-6 space-y-4 ${
          selectedPlan === plan.id
            ? "text-purple-200"
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {plan.features.map((feature, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: feature }} />
        ))}
      </ul>
      <Button
        className="mx-1"
        variant={selectedPlan === plan.id ? "default" : "outline"}
        onClick={() => setSelectedPlan(plan.id)}
      >
        {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
      </Button>
    </div>
  );
}
