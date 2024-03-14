import AdminLayout from "@/app/components/adminMainLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <title>Blibli - Admin Dashboard</title>
      <div className="w-full font-bold uppercase h-screen flex items-center justify-center text-4xl">
        Dashboards
      </div>
    </AdminLayout>
  );
}
