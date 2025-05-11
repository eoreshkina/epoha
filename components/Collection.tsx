// src/components/Collections.jsx
import React from "react";
import ItemCard from "@/components/ItemCard";

const collections = [
    {
        title: "Tables",
        image: (
            <svg className="w-full h-64 bg-gray-800 text-white" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 200 100">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Mock Image 1</text>
            </svg>
        ),
    },
    {
        title: "Coasters",
        image: (
            <svg className="w-full h-64 bg-gray-700 text-white" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 200 100">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Mock Image 2</text>
            </svg>
        ),
    },
    {
        title: "Clocks",
        image: (
            <svg className="w-full h-64 bg-gray-600 text-white" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 200 100">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Mock Image 3</text>
            </svg>
        ),
    }
];

export default function Collections() {
    return (
        <section className="text-center py-12 px-4">
            <h2 className="text-4xl font-light mb-2">Collection</h2>
            <p className="text-xl text-gray-700 mb-10">
                Footer tbd
            </p>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${collections.length} gap-6 max-w-7xl mx-auto`}>
                {collections.map((item, index) => (
                    <ItemCard
                        image={item.image}
                        title={item.title}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}
