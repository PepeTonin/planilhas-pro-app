import WelcomeScreen from "../../../screens/Welcome";

export default function Home() {
  const routePathnames = {
    login: "/(auth)/login",
    signup: "/(auth)/signup",
  };

  return <WelcomeScreen routePathnames={routePathnames} />;
}
