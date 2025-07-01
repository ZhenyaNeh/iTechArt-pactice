import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemePovidor";
import { AppRouter } from "app/providers/routes";
import { Navbar } from "widgets/Navbar";
import "./style/index.scss";

const App = () => {
  const {theme} = useTheme();
  
  return (
    <div className={classNames(["app", theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
