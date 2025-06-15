import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex">
      <div className="pl-16 pr-70">
        <h2>Hallo, ich bin Liza.</h2>
            <p>Ich kreiere exklusive Kunstwerke aus Epoxidharz – jedes Stück ist handgefertigt und ein Unikat.</p>
            <p>Hier findest du bereits fertiggestellte Werke, die sofort verfügbar sind.</p>
            <p>Du kannst aber auch gerne dein persönliches Wunschstück bei mir in Auftrag geben.</p>
      </div>
      <div className="ml-auto">
        <Image
          src="/images/intro.png"
          alt="Intro"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}