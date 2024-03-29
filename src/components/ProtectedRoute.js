import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session.data) {
      router.push("/login"); // Redirect to login page if not authenticated
    } else {
      router.push("/addnew"); // Redirect to add new page if authenticated
    }
  }, [session, router]);

  return children;
};

export default ProtectedRoute;
