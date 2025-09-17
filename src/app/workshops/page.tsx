"use client";

import DesktopWorkshops from "@/components/workshops/DesktopWorkshops";
import MobileWorkshops from "@/components/workshops/MobileWorkshops";

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen">
      {/* Desktop version (hidden on small screens) */}
      <div className="hidden sm:block">
        <DesktopWorkshops />
      </div>

      {/* Mobile version (only visible on small screens) */}
      <div className="block sm:hidden">
        <MobileWorkshops />
      </div>
    </div>
  );
}
