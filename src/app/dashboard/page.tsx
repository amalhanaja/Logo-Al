import { LogoList } from "@/components/logo-list";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8">
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <LogoList />
      </Suspense>
    </main>
  );
}
