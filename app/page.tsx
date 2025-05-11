import Head from 'next/head';
import Link from 'next/link';
import Collections from "@/components/Collection";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-500">
      <Head>
        <title>Art Portfolio</title>
        <meta name="description" content="Custom art and design projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header className="w-full bg:blue backdrop-blur-sm border-b border-white/20 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Art Portfolio</h1>
      <nav className="flex gap-4">
        <Link legacyBehavior={true} href="https://epohastudio.etsy.com" passHref>
          <a className="text-white hover:text-yellow-200 transition-colors">Shop</a>
        </Link>
        <Link legacyBehavior={true} href="https://www.instagram.com/epoha.studio?igsh=dDRocDh1M2xidHg0&utm_source=qr" passHref>
          <a className="text-white hover:text-cyan-200 transition-colors">Instagram</a>
        </Link>
      </nav>
    </header>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">

        <Collections />

        <p className="mt-16 text-white/60 text-center text-sm md:text-base max-w-md">
          Custom-made art pieces and products created with passion and imagination
        </p>
      </main>
    </div>
  );
}