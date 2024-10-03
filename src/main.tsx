import React from 'react';
import { createRoot } from 'react-dom/client';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

import './index.css';
import App from './App.tsx';
import TodoListContextProvider from './context/TodoListContextProvider.tsx';
import AuthContextProvider from './context/AuthContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <KindeProvider
    clientId="c2573105650447bb936aa39b95465a9c"
    domain="https://nikdev.kinde.com"
    redirectUri="https://byte-grad-todo.vercel.app"
    logoutUri="https://byte-grad-todo.vercel.app"
  >
    <AuthContextProvider>
      <TodoListContextProvider>
        <App />
      </TodoListContextProvider>
    </AuthContextProvider>
  </KindeProvider>
);
