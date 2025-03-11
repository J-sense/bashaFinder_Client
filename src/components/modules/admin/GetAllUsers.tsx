"use client";

import { useState } from "react";
import { BTable } from "@/components/ui/core/BTable";
import { ColumnDef } from "@tanstack/react-table";
import { UpdateRoleModel } from "./EditRoleModel"; // Import ShadCN Modal
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteUserAction } from "@/services/admin";
import { toast } from "sonner";

type User = {
  _id: string;
  username: string;
  email: string;
  role: "admin" | "landlord" | "tenant";
};

const GetAllUsers = ({ data }: { data: User[] }) => {
  console.log(data);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // ShadCN modal control

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true); // Open the modal
  };
  const handleDelete = async (id: string) => {
    const res = await deleteUserAction(id);
    console.log(res);
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };
  //   const handleCloseModal = () => {
  //     setIsModalOpen(false);
  //     setSelectedUser(null); // Reset user data when closing
  //   };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "username",
      header: "UserName",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => handleOpenModal(row.original)} // Open modal with user data
        >
          Edit Role
        </button>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <Button variant="outline" className="px-4">
          {row.original.role}
        </Button>
      ),
    },
    {
      accessorKey: "action",
      header: "Actions",
      cell: ({ row }) => (
        <Trash onClick={() => handleDelete(row.original._id)} />
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">All Users</h1>
      <BTable columns={columns} data={data} />

      {/* Pass selected user data & control modal state */}
      <UpdateRoleModel
        userInfo={selectedUser}
        open={isModalOpen}
        onOpenChange={setIsModalOpen} // Ensure modal closes properly
      />
    </div>
  );
};

export default GetAllUsers;
