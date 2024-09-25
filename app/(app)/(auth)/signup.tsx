import SignUpScreen from "../../../screens/SignUp";

export default function SignUp() {
  const routePathnames = {
    login: "/(auth)/login",
  };

  return <SignUpScreen routePathnames={routePathnames} />;
}
