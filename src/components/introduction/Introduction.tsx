import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex h-screen hidden sm:block">
      <div className="w-1/2 px-32 py-30 gap-y-4 flex flex-col text-xl text-gray-800">
        <h1 className="font-['Limelight'] text-2xl">Hallo, ich bin Liza.</h1>
        <p>
          Ich kreiere exklusive Kunstwerke aus Epoxidharz – jedes Stück ist
          handgefertigt und ein Unikat.
        </p>
        <p>
          Hier findest du bereits fertiggestellte Werke, die sofort verfügbar
          sind.
        </p>
        <p>
          Du kannst aber auch gerne dein persönliches Wunschstück bei mir in
          Auftrag geben.
        </p>
        <div className="py-1" />
        <h1 className="font-bold">Was kannst du bei mir bestellen?</h1>
        <ul className="list-disc pl-5">
          <li>Tische</li>
          <li>Tischplatten</li>
          <li>Uhren</li>
          <li>Dekorationsobjekte</li>
        </ul>
        <div className="py-1" />
        <p>Wenn du etwas bestellen möchtest, drück einfach hier:</p>
        <button className="w-fit px-12 py-1 bg-black text-white rounded-lg cursor-pointer hover:bg-[#4a59e4]">
          <a href="/order" className="text-white">
            Bestellen
          </a>
        </button>
      </div>
      <div className="w-1/2 absolute top-0 right-0 h-full -z-10">
        <Image
          src="/images/intro.png"
          alt="Intro"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
