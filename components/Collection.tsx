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
        title: "Mirror",
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
        <div
                className="w-full relative py-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/your-image.jpg')" }}
              >
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg inline-block">
                      <h2 className="text-5xl font-['Limelight'] mb-2 text-white">Collection</h2>
                      <p className="text-xl text-gray-200 mb-4">Footer tbd</p>
                    </div>
                  </div>
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
