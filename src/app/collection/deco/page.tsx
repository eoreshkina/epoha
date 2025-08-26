"use client";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useState } from "react";
import Link from "next/link";

const deco = {
  title: "Memory Frames",
  slug: "deco",
  coverImage: "/images/deco/cover.png",
  images: [
    {
      images: ["/images/deco/birthdayflowers2.png", "/images/deco/birthdayflowers3.png", "/images/deco/birthdayflowers4.png", "/images/deco/cover.png"],
      price: 200,
      status: "Auf Nachfrage",
    }
  ],
};

export default function CollectionDetail() {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">{deco.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {deco.images.map((item, index) => (
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
                src={item.images[0]}
                alt={`Memory Frames ${index + 1}`}
                width={500}
                height={500}
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Price + Button */}
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="text-lg font-semibold text-black">
                €{item.price}
              </div>

              {item.status === "Auf Nachfrage" && (
                <Link legacyBehavior href={`https://wa.me/4915901756444`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg bg-[#453377] text-white hover:bg-[#D9A5B3] transition"
                  >
                    Auf Nachfrage
                  </a>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImages && (
        <Modal images={selectedImages} onClose={() => setSelectedImages(null)} />
      )}
    </section>
  );
}
