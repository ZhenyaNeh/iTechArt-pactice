import { Link } from "react-router";
import { classNames } from "shared/lib/classNames/classNames";
import Separator from "shared/ui/Separator/Separator";
import cls from "./Navbar.module.scss";
import { useTheme } from "app/providers/ThemePovidor";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = "" }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames([cls["navbars-container"], className])}>
      <div className={classNames([cls["navbars-left"]])}>logo</div>
      <div className={classNames([cls.navbars])}>
        <Link to="/">main</Link>
        <Separator variant="vertical" />
        <Link to="/about">about</Link>
      </div>
      <div className={classNames([cls["navbars-right"]])}><button onClick={toggleTheme}>theme {theme}</button></div>
    </div>
  );
};
