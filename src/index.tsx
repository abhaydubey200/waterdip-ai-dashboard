// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);  // Use createRoot
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
