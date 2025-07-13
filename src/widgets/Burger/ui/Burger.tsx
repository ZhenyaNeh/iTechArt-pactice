import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Burger.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Hamburger } from 'lucide-react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import Separator from 'shared/ui/Separator/Separator';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface BurgerProps {
  className?: string;
}

export const Burger = ({ className = '' }: BurgerProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="burger"
      className={classNames([cls.burger, className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <Button data-testid="burger-button" onClick={onToggle}>
        <Hamburger />
      </Button>

      <div data-testid="burger-menu" className={cls['menu-content']}>
        <AppLink to="/" className={cls['menu-link']} onClick={onToggle}>
          {t('Ссылка на главную страницу')}
        </AppLink>
        <Separator variant="horizontal" />
        <AppLink to="/about" className={cls['menu-link']} onClick={onToggle}>
          {t('Ссылка на страницу о сайте')}
        </AppLink>
        <Separator variant="horizontal" />
        <div className={cls['theme-switcher-wrapper']}>
          <ThemeSwitcher />
          <Separator variant="vertical" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
