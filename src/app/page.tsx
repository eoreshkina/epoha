import Head from "next/head";
import Link from "next/link";
import Collections from "@/components/Collections";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800">
      <Head>
        <title>Art Portfolio</title>
        <meta name="description" content="Custom art and design projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full p-4 relative bg-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-['Limelight'] mb-2 sm:mb-0 pl-8 bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent">
            EpoHa Studio
          </h1>
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-5 font-['Limelight'] text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <Link
              legacyBehavior={true}
              href="https://epohastudio.etsy.com"
              passHref
            >
              <a className="hover:text-amber-300 transition-colors">Shop</a>
            </Link>
            <Link legacyBehavior={true} href="/collection" passHref>
              <a className="hover:text-purple-500 transition-colors">
                Collection
              </a>
            </Link>
            <Link
              legacyBehavior={true}
              href="https://www.instagram.com/epoha.studio?igsh=dDRocDh1M2xidHg0&utm_source=qr"
              passHref
            >
              <a className="hover:text-indigo-700 transition-colors">
                Instagram
              </a>
            </Link>
            <Link legacyBehavior={true} href="" passHref>
              <a className="hover:text-gray-500 transition-colors">Kontakt</a>
            </Link>
          </nav>
        </div>
      </header>

      <Introduction />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <Collections />

        <p className="mt-16 text-white text-center text-sm md:text-base max-w-md">
          Custom-made art pieces and products created with passion and
          imagination
        </p>
      </main>
    </div>
  );
}
