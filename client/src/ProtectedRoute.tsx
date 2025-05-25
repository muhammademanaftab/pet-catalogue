import { Navigate } from "react-router";
import { useAuthStore } from "./useAuthStore";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
