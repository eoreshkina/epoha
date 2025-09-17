"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workshops = [
  {
    id: 1,
    title: "1-Tages Tischtraum",
    description:
      "Wähle Farben, Holz, Blumen oder persönliche Erinnerungen – und gestalte deinen eigenen Tisch.",
    process:
      "Du legst alles unter meine Anleitung in den Tisch ein, wir übergießen alles – und nach 2 Wochen kannst du dein fertiges Unikat abholen.",
    duration:
      "⏱ Dauer: 1,5–2 Stunden – ein intensives Erlebnis voller Kreativität!",
    image: "/images/workshops/rosenpracht.png",
  },
  {
    id: 2,
    title: "Dein Tisch von A bis Z",
    description:
      "Baue deinen Tisch komplett selbst – von der ersten Skizze bis zum letzten Schliff.",
    process:
      "Über mehrere Treffen begleite ich dich durch den gesamten Prozess – vom ersten Entwurf bis zum letzten Schliff. Du lernst nicht nur das Handwerk kennen, sondern erschaffst etwas, das dich viele Jahre begleitet..",
    duration: "⏱ Dauer: 6 Termine – ein kreativer Prozess, der dich mit Stolz erfüllt.",
    image: "/images/workshops/wald.png",
  },
  {
    id: 3,
    title: "Momente festgehalten",
    description: "Bewahre deine Erinnerungen in einem einzigartigen Bild:",
    descriptionList: [
          "🌸 Dein Hochzeitsstrauß",
          "🎂 Geburtstagsblumen",
          "💫 oder kleine Dinge, die dir etwas bedeuten",
     ],
    process:
      "Du bringst deine Blumen oder Erinnerungsstücke mit, und gestaltest dein Bild ganz nach deinem Gefühl. Nach ca. 2 Wochen kannst du dein fertiges Kunstwerk abholen.",
    duration: "⏱ Dauer: 1,5–2 Stunden – ein kreatives Erlebnis voller Emotionen",
    image: "/images/workshops/memoryframe.png",
  },
  {
    id: 4,
    title: "Kleine Kunstwerke",
    description:
      "Gestalte deine eigenen Untersetzer – individuell, kreativ und einzigartig 🌸",
    process:
      "Ideal zum Einstieg oder als besonderes Geschenk. Kreativität, Handwerk und Persönlichkeit in einem kleinen, feinen Projekt.",
    duration: " ⏱ Dauer: ca. 1.5 Stunden – schnell, einfach und voller Spaß!",
    image: "/images/workshops/coasters.png",
  },
];

export default function DesktopWorkshops() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      let next = prev + dir;
      if (next < 0) next = workshops.length - 1;
      if (next >= workshops.length) next = 0;
      return [next, dir];
    });
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <div className="min-h-screen flex items-center px-4">
      <div className="rounded-2xl shadow-lg text-center max-w-5xl w-full mx-auto my-8 overflow-hidden">
        {/* Header */}
        <div
          className="w-full bg-gray-400 rounded-t-2xl p-4"
          style={{ backgroundImage: "linear-gradient(to right, #453377, #D9A5B3)" }}
        >
          <h1 className="text-4xl font-['Limelight'] text-white mb-4 flex items-center justify-center gap-2 pt-2">
            Workshops
          </h1>
        </div>

        {/* Content */}
        <div className="py-10 px-8 flex justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
          <div className="relative w-full max-w-5xl">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) paginate(1);
                else if (info.offset.x > 100) paginate(-1);
              }}
              className="bg-white rounded-b-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={workshops[index].image}
                  alt={workshops[index].title}
                  className="w-full h-135 object-cover rounded-lg shadow"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-4">{workshops[index].title}</h2>
                <p className="text-gray-700 mb-2">{workshops[index].description}</p>

                {workshops[index].descriptionList && (
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {workshops[index].descriptionList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <h3 className="text-xl font-semibold mb-2">👉 So funktioniert’s:</h3>
                <p className="mb-3">{workshops[index].process}</p>

                <p className="font-semibold">{workshops[index].duration}</p>
              </div>
            </motion.div>

        </div>

        {/* Controls */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
     </AnimatePresence>
    </div>
     </div>
  );
}
