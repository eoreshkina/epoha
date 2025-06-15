import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ItemCardProps {
  image: string;
  title: string;
}

export default function ItemCard({ image, title }: ItemCardProps) {
  return (
    <div className="relative group cursor-pointer rounded-b-2xl rounded-t-2xl">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="rounded-2xl"
      />
      <div className="absolute top-5 left-5 flex items-center text-white text-2xl bg-black font-bold ">
        <ChevronRight />
        <span className="px-4 text-center">{title}</span>
      </div>
    </div>
  );
}
