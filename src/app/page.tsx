import Collections from "@/components/Collections";
import Introduction from "@/components/introduction/Introduction";
import MobileIntroduction from "@/components/introduction/MobileIntroduction";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800">
      <Introduction />
      <MobileIntroduction />

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
