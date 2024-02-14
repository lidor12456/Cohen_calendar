import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  console.log(children);
  useEffect(() => {
    if (!session.data) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, [session, router]);

  return children;
};

export default ProtectedRoute;
