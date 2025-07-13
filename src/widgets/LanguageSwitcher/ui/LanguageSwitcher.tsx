import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import '../../../../config/jest/jest.config';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames([cls['language-switcher'], className])}
    >
      {t('Язык')}
    </Button>
  );
};
