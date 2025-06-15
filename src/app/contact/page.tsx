import Link from "next/link";

export default function Contact() {
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
            Kontakt
          </h1>
        </div>
        <div className="py-8 gap-y-6 flex flex-col text-lg text-left px-5">
          <p className="mb-6 text-gray-600">
            Wenn Sie Fragen haben, können Sie mich gerne über das untenstehende
            Formular kontaktieren.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-400 rounded-lg p-2"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-400 rounded-lg p-2"
                placeholder="Ihre E-Mail"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Nachricht
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-400 rounded-lg p-2 h-32"
                placeholder="Ihre Nachricht"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#4a59e4] transition"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
