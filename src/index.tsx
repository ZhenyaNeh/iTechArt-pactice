import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';

const domNode = document.getElementById('root');

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
} else {
  console.error('element #root not found');
}
