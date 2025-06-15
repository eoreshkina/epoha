export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>
        </div>
        <div className="py-8 gap-y-6 flex flex-col text-lg text-left px-5">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">1. Verantwortlicher</h2>
            <p>
              EpoHa Studio
              <br />
              Elizaveta Oreshkina
              <br />
              E-Mail: epoha.studio@outlook.com
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">2. Zugriffsdaten</h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen durch
              den Server unseres Hosting-Anbieters erfasst (sogenannte
              Server-Logfiles). Erfasst werden unter anderem:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
            </ul>
            <p className="mt-2">
              Die Erhebung dieser Daten ist technisch erforderlich, um die
              Website anzuzeigen. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen findet nicht statt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">3. Externe Links</h2>
            <p>
              Unsere Website enthält Links zu externen Webseiten, auf deren
              Inhalte wir keinen Einfluss haben. Bitte beachten Sie die
              Datenschutzerklärungen der jeweiligen Anbieter:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <a
                  href="https://www.etsy.com/de/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-900 hover:underline"
                >
                  Etsy Datenschutzerklärung
                </a>
              </li>
              <li>
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy-eea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-900 hover:underline"
                >
                  WhatsApp Datenschutzerklärung
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">4. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:
              epoha.studio@outlook.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
