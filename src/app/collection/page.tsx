import Collections from "@/components/Collections";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen text-white">
      <header className="w-full backdrop-blur-sm border-b border-white/20 p-4 relative">
        <h1 className="text-3xl font-['Limelight'] text-center">Collections</h1>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        <Collections />
      </main>
    </div>
  );
}
