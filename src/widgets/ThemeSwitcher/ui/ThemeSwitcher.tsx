import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemePovidor';
// import LightIcon from 'shared/assets/icons/theme-light.svg';
// import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Moon, Sun } from 'lucide-react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      title="Toggle theme"
      theme={ThemeButton.CLEAR}
      className={classNames([className])}
      onClick={toggleTheme}
    >
      {/* {theme === Theme.LIGHT ? <LightIcon />: <DarkIcon />} */}
      {theme === Theme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  );
};
