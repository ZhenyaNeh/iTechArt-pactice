import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import './style/index.scss';
import { Suspense } from 'react';
import { Loader } from 'lucide-react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={<Loader size={32} />}>
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
