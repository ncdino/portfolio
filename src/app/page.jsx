import Hero from "./components/Section/Hero";
import Insight from "./components/Section/Insight";
import InsightDetail from "./components/Section/InsightDetail";
import MyProfile from "./components/Section/MyProfile";
import Profile from "./components/Section/Profile";
import TiltCard from "./components/Section/TiltCard";
import Works from "./components/Section/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <Insight />
      <InsightDetail />
      <Profile />
      <Works id="works" />
      <TiltCard />
      <MyProfile />
    </>
  );
}
