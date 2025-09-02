export default function Footer() {
  return (
    <footer
      className="w-full text-gray-200 py-2 mt-12"
      style={{
        backgroundImage: "linear-gradient(to right, #453377, #D9A5B3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EpoHa Studio. All rights reserved.
        </p>
        <p className="md:text-base max-w-md">
          Custom-made art pieces and products created with passion and
          imagination
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:underline">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
