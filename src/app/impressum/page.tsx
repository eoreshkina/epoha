export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="rounded-2xl inline-block shadow-lg text-center max-w-3xl mx-auto my-8">
        <div
          className="w-full bg-gray-400 rounded-t-2xl p-4"
          style={{
            backgroundImage: "linear-gradient(to right, #453377, #D9A5B3)",
          }}
        >
          <h1 className="text-4xl font-['Limelight'] text-white mb-6 flex items-center justify-center gap-2 pt-4">
            Impressum
          </h1>
        </div>
        <div className="py-8 gap-y-6 flex flex-col text-lg text-left px-5">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Elizaveta Oreshkina
              <br />
              Eppendorfer Weg 122
              <br />
              20259 Hamburg
              <br />
              E-Mail: epoha.studio@outlook.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Vertreten durch</h2>
            <p>Elizaveta Oreshkina</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Steuernummer</h2>
            <p>42/176/05453</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>Elizaveta Oreshkina, Eppendorfer Weg 122, 20259, Hamburg</p>
          </section>
        </div>
      </div>
    </div>
  );
}
