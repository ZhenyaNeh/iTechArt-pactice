import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
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
