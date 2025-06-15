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
  },
  {
    title: "Clocks",
    slug: "clocks",
    coverImage: "/images/clocks/cover.jpg",
  },*/
];

export default function Collections() {
  return (
    <section className="text-center py-12 px-4">
      <div className="w-full relative py-20 bg-cover bg-center bg-no-repeat">
        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg inline-block">
          <h2 className="text-5xl font-['Limelight'] mb-2 text-white">
            Collection
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {collections.map((item: Collection, index: number) => (
          <Link href={`/collection/${item.slug}`} key={index}>
            <ItemCard image={item.coverImage} title={item.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
