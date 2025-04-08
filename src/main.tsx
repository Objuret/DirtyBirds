// Project: react-ts-template
// Description: This is a React TypeScript template project. It includes a basic setup with React, TypeScript, and Material-UI. The project is designed to be a starting point for building React applications with TypeScript and Material-UI.
// The template includes a simple folder structure, a basic App component, and a main entry point. It is designed to be easily extendable and maintainable, with a focus on best practices and modern web development techniques.
// The project is set up with TypeScript for type safety and better developer experience. It includes basic configurations for ESLint and Prettier to ensure code quality and consistency. The project is designed to be easily integrated with other libraries and frameworks, making it a versatile starting point for any React application.
// The template is suitable for building a wide range of applications, from simple static sites to complex web applications. It is designed to be flexible and adaptable, allowing developers to customize it according to their needs. The project includes a basic setup for routing, state management, and styling, making it a comprehensive starting point for any React application.
// License: MIT

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import '@fontsource/merriweather/700.css';
import '@fontsource/cinzel/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);