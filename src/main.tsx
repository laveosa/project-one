import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import TodoListContextProvider from './context/TodoListContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <TodoListContextProvider>
    <App />
  </TodoListContextProvider>
);
