import Image from "next/image";

const tables = {
  title: "Tables",
  slug: "tables",
  coverImage: "/images/tables/cover.png",
  images: [
    "/images/tables/igel-2.png",
    "/images/tables/igel-1.png",
    "/images/tables/green-1.png",
    "/images/tables/green-2.png",
    "/images/tables/rosenpracht-1.png",
    "/images/tables/rosenpracht-2.png",
    "/images/tables/wald-1.png",
    "/images/tables/wald-2.png",
    "/images/tables/white.png",
    "/images/tables/pusteblume.png",
  ],
};

export default function CollectionDetail() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">{tables.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tables.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${tables.title} ${index + 1}`}
            width={500}
            height={500}
            className="object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </section>
  );
}
