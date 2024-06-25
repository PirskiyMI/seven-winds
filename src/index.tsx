import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';

import './styles/global.style.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);
