
export default function ProtectedRoute  ({ children }) {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/LoginForm" />;
  }
  return children;
};