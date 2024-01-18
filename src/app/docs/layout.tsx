import OnThisPage from "@/components/docs/on-this-page";
import SideNavigation from "@/components/docs/side-navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center items-start min-h-screen pt-10">
      <SideNavigation />
      <main className="space-y-40 w-full">
        <div className="max-w-3xl mx-auto space-y-20">{children}</div>
      </main>
      <OnThisPage />
    </div>
  );
}
