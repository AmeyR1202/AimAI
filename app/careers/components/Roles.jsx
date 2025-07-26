import React from "react";
import { Palette, Code, PieChart } from "lucide-react"; // Icons for each role

const roles = [
  {
    title: "Product Design",
    description:
      "Starlight launches branded products with a proprietary systematic flow that gives you the highest return on investment in the online advertising world.",
    icon: <Palette className="w-16 h-16 text-yellow-400" />,
  },
  {
    title: "Product Development",
    description:
      "Starlight launches branded products with a proprietary systematic flow that gives you the highest return on investment in the online advertising world.",
    icon: <Code className="w-16 h-16 text-yellow-400" />,
  },
  {
    title: "Marketing",
    description:
      "Starlight launches branded products with a proprietary systematic flow that gives you the highest return on investment in the online advertising world.",
    icon: <PieChart className="w-16 h-16 text-yellow-400" />,
  },
];

const CareerCardsDark = () => {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center transition hover:shadow-xl"
          >
            <div>{role.icon}</div>
            <h3 className="text-xl font-bold mt-6 text-white">{role.title}</h3>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              {role.description}
            </p>
            <button className="mt-6 px-6 py-2 rounded-full bg-yellow-400 text-sm font-bold text-black hover:bg-yellow-500 transition">
              VIEW OPENINGS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCardsDark;
