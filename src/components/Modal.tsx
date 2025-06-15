"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

export default function Modal({
  images,
  onClose,
}: {
  images: string[];
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative max-w-3xl w-full flex items-center justify-center">
        <button
          onClick={prevImage}
          className="absolute left-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
        >
          <ChevronLeft size={32} />
        </button>

        <Image
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          width={500}
          height={500}
          className="max-h-[80vh] object-contain rounded-lg"
        />

        <button
          onClick={nextImage}
          className="absolute right-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
        >
          <ChevronRight size={32} />
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl p-2 hover:text-red-500 transition"
        >
          <X size={32} />
        </button>
      </div>
    </div>
  );
}
