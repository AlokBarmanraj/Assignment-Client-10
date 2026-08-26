import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user || null;
};

export const requireRole = async (role) => {
  const user = await getUserSession();

  if (!user) {
    redirect("/auth/login");
  }

//   console.log("Logged in user:", user);
//   console.log("User role:", user.role);
//   console.log("Required role:", role);

  if (user.role?.toLowerCase() !== role.toLowerCase()) {
    redirect("/unauthorized");
  }

  return user;
};