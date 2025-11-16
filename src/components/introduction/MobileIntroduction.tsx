import Image from "next/image";

export default function MobileIntroduction() {
  return (
    <div className="flex flex-col text-left px-4 py-8 text-gray-800 sm:hidden">
      <h1 className="font-['Limelight'] text-xl mb-4">Hallo, ich bin Liza.</h1>
      <p className="mb-2">
        Ich kreiere exklusive Kunstwerke aus Epoxidharz – jedes Stück ist
        handgefertigt und ein Unikat.
      </p>
      <p className="mb-2">
        Hier findest du bereits fertiggestellte Werke, die sofort verfügbar
        sind.
      </p>
      <p className="mb-4">
        Du kannst aber auch gerne dein persönliches Wunschstück bei mir in
        Auftrag geben.
      </p>
      <p className="font-bold mb-2">Was kannst du bei mir bestellen?</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Tische</li>
        <li>Uhren</li>
        <li>Spiegel</li>
        <li>Bilder</li>
      </ul>
      <p className="mb-4">
        Wenn du etwas bestellen möchtest, drück einfach hier:
      </p>
      <button className="w-fit px-12 py-1 bg-black text-white rounded-lg cursor-pointer mb-8">
        <a href="/order" className="text-white">
          Bestellen
        </a>
      </button>
      <div className="w-full">
        <Image
          src="/images/intro.png"
          alt="Intro"
          width={800}
          height={600}
          className="w-full h-auto rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
