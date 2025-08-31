import Link from "next/link";

export default function DesktopHeader() {
  return (
    <header className="w-full p-4 relative bg-white/10 hidden sm:block">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1
          className="text-3xl font-['Limelight'] mb-2 sm:mb-0 pl-8 bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #4a59e4, #ec4899)",
          }}
        >
          <Link legacyBehavior={true} href="/" passHref>
            EpoHa Studio
          </Link>
        </h1>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-5 font-['Limelight'] text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <Link legacyBehavior={true} href="/collection" passHref>
            <a className="hover:text-purple-500 transition-colors">
              Collection
            </a>
          </Link>
          <Link legacyBehavior={true} href="/order" passHref>
            <a className="hover:text-amber-600 transition-colors">Bestellen</a>
          </Link>

           <Link legacyBehavior={true} href="/workshop" passHref>
              <a className="hover:text-pink-600 transition-colors">Workshops</a>
           </Link>

          <Link
            legacyBehavior={true}
            href="https://www.instagram.com/epoha.studio?igsh=dDRocDh1M2xidHg0&utm_source=qr"
            passHref
          >
            <a className="hover:text-indigo-700 transition-colors">Instagram</a>
          </Link>
          <Link
            legacyBehavior={true}
            href="https://epohastudio.etsy.com"
            passHref
          >
            <a className="hover:text-green-800 transition-colors">Shop</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
