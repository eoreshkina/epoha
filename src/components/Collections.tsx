import Link from "next/link";
import ItemCard from "@/components/ItemCard";
import { Collection } from "@/types/collection";

const collections: Collection[] = [
  {
    title: "Tables",
    slug: "tables",
    coverImage: "/images/tables/cover.png",
  },
  /* {
    title: "Mirror",
    slug: "mirror",
    coverImage: "/images/mirror/cover.jpg",
  },*/
  {
    title: "Clocks",
    slug: "clocks",
    coverImage: "/images/clocks/black1.png",
  },
  {
      title: "Memory Frames",
      slug: "deco",
      coverImage: "/images/deco/cover.png",
    },
];

export default function Collections() {
  return (
    <section className="text-center py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {collections.map((item: Collection, index: number) => (
          <Link href={`/collection/${item.slug}`} key={index}>
            <ItemCard image={item.coverImage} title={item.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
