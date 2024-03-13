import AdminLayout from "@/app/components/adminMainLayout";
import prisma from "@/utils/db";
import UpdateUser from "./update";
import DeleteUser from "./delete";

export default async function UserManagement() {
  const user = await prisma.user.findMany();

  return (
    <AdminLayout>
      <title>Blibli - User Management</title>
      <div className="bg-white rounded-xl">
        <div className="overflow-x-auto">
          <table className="table overflow-hidden">
            <thead className="bg-info text-white">
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Referral</th>
                <th>Telepon</th>
                <th>Saldo</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {user.map((doc, index) => (
                <tr key={doc.id}>
                  <th>{index + 1}</th>
                  <td>{doc.username}</td>
                  <td>{doc.email}</td>
                  <td>{doc.referral}</td>
                  <td>{doc.noHp}</td>
                  <td>{doc.balance.toLocaleString("id-ID")}</td>
                  <td className="uppercase">{doc.role}</td>
                  <td className="flex items-center gap-4">
                    <UpdateUser doc={doc} />
                    <DeleteUser doc={doc} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
