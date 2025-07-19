"use client";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useState } from "react";
import Link from "next/link";

const tables = {
  title: "Tables",
  slug: "tables",
  coverImage: "/images/tables/cover.png",
  images: [
    {
      images: ["/images/tables/igel-1.png", "/images/tables/igel-2.png"],
      price: 500,
      status: "Verfügbar",
    },
    {
      images: ["/images/tables/green-1.png", "/images/tables/green-2.png"],
      price: 250,
      status: "Verfügbar",
    },
    {
      images: [
        "/images/tables/rosenpracht-1.png",
        "/images/tables/rosenpracht-2.png",
      ],
      price: 250,
      status: "Ausverkauft",
    },
    {
      images: ["/images/tables/wald-1.png", "/images/tables/wald-2.png"],
      price: 300,
      status: "Verfügbar",
    },
    { images: ["/images/tables/white.png"], price: 190, status: "Ausverkauft" },
    {
      images: ["/images/tables/pusteblume.png"],
      price: 180,
      status: "Verfügbar",
    },
  ],
};

export default function CollectionDetail() {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">{tables.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tables.images.map((item, index) => (
          // Correct: Wrap the entire card (image + button) in one parent div
          <div
            key={index}
            className="flex flex-col items-center rounded-lg overflow-hidden shadow p-4"
          >
            {/* Image container */}
            <div
              onClick={() => setSelectedImages(item.images)}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
            >
              <Image
                src={item.images[0]} // Show the first image
                alt={`Table ${index + 1}`}
                width={500}
                height={500}
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute bottom-5 left-5 bg-black text-white text-lg font-semibold px-3 py-1 rounded"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4a59e4, #ec4899)",
                }}
              >
                €{item.price}
              </div>

              {item.status && (
                <div
                  className={`absolute top-5 right-5 text-white text-sm font-bold px-3 py-1 rounded ${
                    item.status === "Ausverkauft"
                      ? "bg-purple-900"
                      : "bg-blue-700"
                  }`}
                >
                  {item.status === "Ausverkauft" ? "Ausverkauft" : "Verfügbar"}
                </div>
              )}
            </div>

            {/* Button under the image */}
            <div className="mt-4 self-start">
              <Link legacyBehavior href="https://epohastudio.etsy.com">
                <a
                  className={`inline-block px-6 py-2 rounded-lg transition
                        ${
                          item.status === "Ausverkauft"
                            ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                            : "bg-black text-white hover:bg-[#4a59e4]"
                        }
                      `}
                >
                  {item.status === "Ausverkauft"
                    ? "Nicht verfügbar"
                    : "Shop Now"}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImages && (
        <Modal
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}
    </section>
  );
}
