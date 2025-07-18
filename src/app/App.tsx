import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { useAppDispatch } from './providers/StoreProvider/config/store';
import { userActions } from 'entities/Users';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
