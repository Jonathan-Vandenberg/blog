import HeroSvg from "../public/Moon.svg";
import AnimatedShapes from "../public/AnimatedShapes.svg";
import Image from "next/image";

export default function App() {
  return (
    <section>
      {/* <Image src={HeroSvg} alt="hero image" /> */}
      <Image src={AnimatedShapes} alt="hero image" />
    </section>
  );
}
