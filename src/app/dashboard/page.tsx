import DashNav from "@/components/chatGroup/Dashnav";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";

const Dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
    </div>
  );
};

export default Dashboard;
