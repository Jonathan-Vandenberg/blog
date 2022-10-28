import TechStack from "../components/TechStack";
import Hero from "../components/Hero";
import Profile from "../components/Profile";

export default function App() {
  return (
    <>
      <div className="py-12">
        <Hero />
      </div>
      <TechStack />
      <Profile />
    </>
  );
}
