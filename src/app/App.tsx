import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import './style/index.scss';
import { PageLoader } from 'widgets/PageLoader';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page-wrapper">
          <Modal />
          <div className="content-page">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
