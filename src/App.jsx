import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Works from "./sections/Works";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import HeroTwo from "./sections/HeroTwo";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <title>이지현 | 프론트엔드 개발자</title>
      <meta
        name="description"
        content="안녕하세요. 프론트엔드 개발자 이지현입니다. React와 GSAP을 활용하여 사용자 친화적이고 다이나믹한 웹 인터랙션을 구현을 추구합니다."
      />
      <meta property="og:title" content="프론트엔드 포트폴리오" />
      <meta
        property="og:description"
        content="안녕하세요. 프론트엔드 개발자 이지현입니다. React와 GSAP을 활용하여 사용자 친화적이고 다이나믹한 웹 인터랙션을 구현을 추구합니다."
      />
      <meta property="og:url" content="https://dlwlgus.vercel.app/" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-neutral-100 dark:bg-neutral-800">
              {/* <Hero /> */}
              <HeroTwo />
              <Profile />
              <Works />
              <Footer />
            </div>
          }
        />
        <Route path="/:projectId" element={<ProjectDetailPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-4xl text-neutral-600 dark:text-neutral-300">
              잘못된 경로입니다.
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
