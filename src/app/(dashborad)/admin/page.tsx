export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { alluser, getAllHouseAction } from "@/services/admin";
import Link from "next/link";

const Dashboard = async () => {
  const { data } = await alluser();
  const { data: houses } = await getAllHouseAction();
  console.log(houses);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 ">
      {/* Page Title */}
      <div className="flex gap-3 items-center mb-6">
        <Link href={"/"}>
          <Button>Back to home page</Button>
        </Link>
        <h1 className="text-3xl font-semibold ">Admin Dashboard</h1>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-md border text-center">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-center">{data.length}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border text-center">
          <CardHeader>
            <CardTitle>total house listing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{houses.length}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border text-center">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,450</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border text-center">
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md border">
          <ul className="space-y-3">
            <li className="p-3 bg-white rounded-lg shadow-sm">
              <span className="font-semibold">John Doe</span> placed an order
              for <b>3 items</b>.
            </li>
            <li className="p-3 bg-white rounded-lg shadow-sm">
              <span className="font-semibold">Admin</span> approved a refund
              request.
            </li>
            <li className="p-3 bg-white rounded-lg shadow-sm">
              <span className="font-semibold">Jane Smith</span> updated product
              details.
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
