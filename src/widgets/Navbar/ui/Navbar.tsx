import { classNames } from 'shared/lib/classNames/classNames';
import Separator from 'shared/ui/Separator/Separator';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Burger } from 'widgets/Burger';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames([cls['navbar-wrapper'], className])}>
      <div
        className={classNames([cls['navbar-container'], cls['navbar-width']])}
      >
        <div className={classNames([cls['navbar-left']])}>logo</div>
        <div className={classNames([cls['navbar-center']])}>
          <AppLink to="/">{t('Ссылка на главную страницу')}</AppLink>
          <Separator variant="vertical" />
          <AppLink to="/about">{t('Ссылка на сраницу о сайте')}</AppLink>
        </div>
        <div className={classNames([cls['navbar-right']])}>
          <ThemeSwitcher />
          <Separator variant="vertical" className={cls.separator} />
          <LanguageSwitcher />
        </div>
        <div className={classNames([cls['navbar-burger']])}>
          <Burger />
        </div>
      </div>
      <Separator
        variant="horizontal"
        className={classNames([cls['navbar-width']])}
      />
    </div>
  );
};
