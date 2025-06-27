import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import "./style/index.scss";
import { Suspense, useContext, useState } from "react";
import { preconnect } from "react-dom";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/ClassNames/ClassNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <button onClick={toggleTheme}>
        theme {theme}
      </button>
      <nav>
        <Link to={"/"} className="link">
          MainPage
        </Link>
        <span> / </span>
        <Link to={"/about"} className="link">
          AboutPage
        </Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
