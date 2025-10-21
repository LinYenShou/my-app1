import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import AItest from './AItest';
import reportWebVitals from './reportWebVitals';

// 主 React Root（綁定到 #root）
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 額外 AI Chat Root（綁定到 #react-root，如果存在於 HTML 中）
const chatEl = document.getElementById('react-root');
if (chatEl) {
  const chatRoot = createRoot(chatEl);
  chatRoot.render(
    <React.StrictMode>
      <AItest />
    </React.StrictMode>
  );
}

// （可選）效能測試
reportWebVitals();
