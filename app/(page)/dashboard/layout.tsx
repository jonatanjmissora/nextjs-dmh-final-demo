import DashboardMenu from "@/app/components/Dashboard/DashboardMenu";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="dashboard-container tracking-wider relative">
      <DashboardMenu />
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
      <Toaster
        className="fixed bottom-20 right-4 sm:bottom-40 xl:bottom-20"
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'bg-green-400',
          },
        }}
      />
    </section>
  );
}
