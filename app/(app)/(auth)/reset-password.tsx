import ResetPasswordScreen from "../../../screens/ResetPassword";

export default function ResetPassword() {
  const routePathnames = {
    login: "/(auth)/login",
  };

  return <ResetPasswordScreen routePathnames={routePathnames} />;
}
