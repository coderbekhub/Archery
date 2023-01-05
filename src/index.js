import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import { HashRouter } from 'react-router-dom';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedlngs: ['en', 'uz', 'ru'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'] 
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HashRouter >
    <React.StrictMode>
      <App />
    </React.StrictMode>   
  // </HashRouter>
);
