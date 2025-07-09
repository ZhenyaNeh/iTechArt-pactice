import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import './style/index.scss';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page-wrapper">
          <div className="content-page">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
