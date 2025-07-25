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
      link: "https://epohastudio.etsy.com/listing/4338411073"
    },
    {
      images: ["/images/tables/green-1.png", "/images/tables/green-2.png"],
      price: 250,
      status: "Verfügbar",
      link: "https://epohastudio.etsy.com/listing/4338405614"
    },
    {
      images: [
        "/images/tables/rosenpracht-1.png",
        "/images/tables/rosenpracht-2.png",
      ],
      price: 250,
      status: "Ausverkauft",
      link: ""
    },
    {
      images: ["/images/tables/wald-1.png", "/images/tables/wald-2.png"],
      price: 300,
      status: "Verfügbar",
      link: "https://epohastudio.etsy.com/listing/4337996500"
    },
    { images: ["/images/tables/white.png"], price: 190, status: "Ausverkauft" },
    {
      images: ["/images/tables/pusteblume.png"],
      price: 180,
      status: "Verfügbar",
      link: ""
    },
{
      images: ["/images/tables/bottles-1.png", "/images/tables/bottles-2.png", "/images/tables/bottles-3.png" ],
      price: 300,
      status: "Verfügbar",
      link: "https://epohastudio.etsy.com/listing/4338405255"
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
              {item.status === "Ausverkauft" ? (
                <Link
                  legacyBehavior
                  href={`https://wa.me/4915901756444`}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-lg bg-purple-800 text-white hover:bg-[#ec4899] transition"
                  >
                    Auf Nachfrage
                  </a>
                </Link>
              ) : (
                <Link legacyBehavior href={item.link || "https://www.etsy.com/shop/epohastudio"}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-lg bg-black text-white hover:bg-[#4a59e4] transition"
                  >
                    Shop Now
                  </a>
                </Link>
              )}
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
