"use client";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useState } from "react";
import Link from "next/link";

const clocks = {
  title: "Clocks",
  slug: "clocks",
  coverImage: "/images/clocks/black1.png",
  images: [
    {
      images: ["/images/clocks/black1.png", "/images/clocks/black2.png"],
      price: 200,
      status: "Ausverkauft",
      link: "https://epohastudio.etsy.com/listing/4338411073"
    }
  ],
};

export default function CollectionDetail() {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">{clocks.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {clocks.images.map((item, index) => (
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



              {item.status && (
                <div
                  className={`absolute top-5 right-5 text-black text-sm font-bold px-3 py-1 rounded ${
                    item.status === "Ausverkauft"
                      ? "bg-[#F7F2BC]"
                      : "bg-[#D0BBEA]"
                  }`}
                >
                  {item.status === "Ausverkauft" ? "Ausverkauft" : "Verfügbar"}
                </div>
              )}
            </div>



            {/* Price + Button under the image */}
            <div className="mt-4 flex items-center justify-between w-full">
              {/* Price on the left */}
              <div className="text-lg font-semibold text-black">
                €{item.price}
              </div>

              {/* Button on the right */}
              {item.status === "Ausverkauft" ? (
                <Link legacyBehavior href={`https://wa.me/4915901756444`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg bg-[#453377] text-white hover:bg-[#D9A5B3] transition"
                  >
                    Auf Nachfrage
                  </a>
                </Link>
              ) : (
                <Link legacyBehavior href={item.link || "https://www.etsy.com/shop/epohastudio"}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg bg-[#333333] text-white hover:bg-[#4a59e4] transition"
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
