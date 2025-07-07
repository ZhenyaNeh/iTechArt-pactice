import { classNames } from 'shared/lib/classNames/classNames';
import Separator from 'shared/ui/Separator/Separator';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Burger } from 'widgets/Burger';
import { LanguageSwither } from 'widgets/LanguageSwither';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames([cls['navbars-wrapper'], className])}>
      <div
        className={classNames([cls['navbars-container'], cls['navbars-width']])}
      >
        <div className={classNames([cls['navbars-left']])}>logo</div>
        <div className={classNames([cls['navbars-center']])}>
          <AppLink to="/">{t('Ссылка на главную страницу')}</AppLink>
          <Separator variant="vertical" />
          <AppLink to="/about">{t('Ссылка на сраницу о сайте')}</AppLink>
        </div>
        <div className={classNames([cls['navbars-right']])}>
          <ThemeSwitcher />
          <Separator variant="vertical" className={cls.separator} />
          <LanguageSwither />
        </div>
        <div className={classNames([cls['navbars-burger']])}>
          <Burger />
        </div>
      </div>
      <Separator
        variant="horizontal"
        className={classNames([cls['navbars-width']])}
      />
    </div>
  );
};
