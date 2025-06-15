import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="rounded-2xl inline-block shadow-lg text-center max-w-3xl mx-auto my-8 ">
        <div
          className="w-full bg-gray-400 rounded-t-2xl p-4"
          style={{
            backgroundImage: "linear-gradient(to right, #4a59e4, #ec4899)",
          }}
        >
          <h1 className="text-4xl font-['Limelight'] text-white mb-6 flex items-center justify-center gap-2 pt-4">
            Bestellungen
          </h1>
        </div>

        <div className="py-8 gap-y-6 flex flex-col text-lg text-left px-5">
          <h3 className="text-xl font-bold flex items-center gap-2">
            Fertige Stücke
          </h3>
          <p>
            Du kannst direkt über meinen{" "}
            <Link legacyBehavior href="https://epohastudio.etsy.com" passHref>
              <a
                className="hover:text-amber-600 transition-colors underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Etsy-Shop
              </a>
            </Link>{" "}
            bestellen.
          </p>

          <h3 className="text-xl font-bold flex items-center gap-2">
            Dein persönliches Unikat
          </h3>
          <p>
            Für ein individuelles Kunstwerk schreibe mir einfach über
            <Link
              legacyBehavior
              href="https://wa.me/message/6HMPN24NU6XHN1"
              passHref
            >
              <a
                className="hover:text-amber-600 transition-colors underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                WhatsApp.
              </a>
            </Link>{" "}
          </p>
          <p>
            Ich begleite dich Schritt für Schritt zu deinem perfekten Stück.
          </p>

          <h3 className="text-xl font-bold flex items-center gap-2">
            {/*<ListOrdered />*/}
            Fragen zur Vorbereitung
          </h3>
          <p>
            Hier ein paar Fragen, die dir helfen, deine Idee zu konkretisieren:
          </p>
          <ol className="list-decimal list-inside space-y-2 ">
            <li>Welche Größe soll dein Kunstwerk haben?</li>
            <li>Welche Farben wünschst du dir?</li>
            <li>
              Welche Füllung soll dein Kunstwerk haben? (z. B. Blumen, Holz,
              eine Miniatur-Szene oder etwas anderes)
            </li>
            <li>
              Hast du schon eine Idee für das Tischgestell? Wenn ja, teile mir
              gern mehr dazu mit.
            </li>
          </ol>

          <p className="pt-4 italic">
            Ich freue mich darauf, dein einzigartiges Stück für dich zu
            gestalten!
          </p>
        </div>
      </div>
    </div>
  );
}
