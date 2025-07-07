import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { ThemeProvidor } from 'app/providers/ThemePovidor';

import 'shared/config/i18n/i18n';

const domNode = document.getElementById('root');

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <BrowserRouter>
      <ThemeProvidor>
        <App />
      </ThemeProvidor>
    </BrowserRouter>
  );
} else {
  console.error('element #root not found');
}
