import Collections from "@/components/Collections";
import Introduction from "@/components/introduction/Introduction";
import MobileIntroduction from "@/components/introduction/MobileIntroduction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800">
      <Introduction />
      <MobileIntroduction />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <div className="w-full relative bg-cover bg-center bg-no-repeat">
          <h1 className="text-5xl font-['Limelight'] text-gray-800 mb-6 flex justify-left gap-2 px-32">
            Collection
          </h1>
        </div>
        <Collections />
      </main>

      <Footer />
    </div>
  );
}
