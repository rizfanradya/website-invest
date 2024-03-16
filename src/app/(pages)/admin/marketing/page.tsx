import AdminLayout from "@/app/components/adminMainLayout";

export default function Marketing() {
  return (
    <AdminLayout>
      <title>Blibli - Marketing</title>
      <div className="bg-white rounded-xl">
        <div className="overflow-x-auto">
          <table className="table overflow-hidden">
            <thead className="bg-info text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
