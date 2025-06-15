import Collections from "@/components/Collections";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="w-full relative bg-cover bg-center bg-no-repeat">
        <div className="w-full bg-gray-400 p-4 bg-gradient-to-r from-purple-900 to-pink-500">
          <h1 className="text-4xl font-['Limelight'] text-white mb-6 flex items-center justify-center gap-2 pt-4">
            Collection
          </h1>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <Collections />
      </main>
    </div>
  );
}
