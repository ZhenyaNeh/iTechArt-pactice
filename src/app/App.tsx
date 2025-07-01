import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemePovidor";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import "./style/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(["app", theme])}>
      <button onClick={toggleTheme}>theme {theme}</button>
      <nav>
        <Link to={"/"}>MainPage</Link>
        <span> / </span>
        <Link to={"/about"}>AboutPage</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
