import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  }


  return (
    <div>
      <BugButton></BugButton>
      {t('Главная страница')}
      <Counter />
      <Input placeholder='Input text' value={value} onChange={onChange}/>
    </div>
  );
};

export default MainPage;
