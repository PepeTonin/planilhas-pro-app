import LoginScreen from "../../../screens/Login";

export default function Login() {
  const routePathnames = {
    resetPassword: "/(auth)/reset-password",
    signup: "/(auth)/signup",
  };

  return <LoginScreen routePathnames={routePathnames} />;
}
