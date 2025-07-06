import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Burger.module.scss";
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Hamburger } from "lucide-react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import Separator from "shared/ui/Separator/Separator";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwither } from "widgets/LanguageSwither";
import { useTranslation } from "react-i18next";

interface BurgerProps {
  className?: string;
}

export const Burger = ({ className = "" }: BurgerProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames([cls.burger], { [cls.collapsed]: collapsed })}>
      <Button onClick={onToggle}>
        <Hamburger />
      </Button>

      <div className={cls.menuContent}>
        <AppLink to="/" className={cls.menuLink} onClick={onToggle}>
          {t("Ссылка на главную страницу")}
        </AppLink>
        <Separator variant="horizontal" />
        <AppLink to="/about" className={cls.menuLink} onClick={onToggle}>
          {t("Ссылка на сраницу о сайте")}
        </AppLink>
        <Separator variant="horizontal" />
        <div className={cls.themeSwitcherWrapper}>
          <ThemeSwitcher />
          <Separator variant="vertical" />
          <LanguageSwither />
        </div>
      </div>
    </div>
  );
};
