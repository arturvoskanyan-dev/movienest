import Hero from "../../components/Hero/Hero";
import HomeGenres from "../../components/HomeGenres/HomeGenres";
import Devices from "../../components/Devices/Devices";
import Questions from "../../components/Questions/Questions";
import Trail from "../../components/Trail/Trail";
import Plan from "../../components/Plan/Plan";

export default function HomePage() { 
  return (
    <section>
      <Hero />
      <HomeGenres />
      <Devices />
      <Questions />
      <Plan />
      <Trail />
    </section>
  )
}
