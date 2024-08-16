// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files (You can create separate JSON files for each language)
const resources = {
    en: {
        translation: {
            "indiaGuide": "India Guide",
            "explorersEverywhere": "For Explorers Everywhere",
            "subscribe": "SUBSCRIBE",
            "get20Off": "Get 20% off your first order.",
            "topDestinations": "TOP DESTINATIONS",
            "travelInterests": "TRAVEL INTERESTS",
            "shop": "SHOP",
            "aboutUs": "ABOUT US",
            "changeLanguage": "Change your language",
            "privacyPolicy": "Privacy Policy",
            "termsOfUse": "Terms of Use",
            "accessibility": "Accessibility",
            // Add more translations as needed
        }
    },
    es: {
        translation: {
            "indiaGuide": "Guía de la India",
            "explorersEverywhere": "Para Exploradores en Todas Partes",
            "subscribe": "SUSCRÍBETE",
            "get20Off": "Obtén un 20% de descuento en tu primer pedido.",
            "topDestinations": "DESTINOS PRINCIPALES",
            "travelInterests": "INTERESES DE VIAJE",
            "shop": "TIENDA",
            "aboutUs": "SOBRE NOSOTROS",
            "changeLanguage": "Cambia tu idioma",
            "privacyPolicy": "Política de Privacidad",
            "termsOfUse": "Términos de Uso",
            "accessibility": "Accesibilidad",
            // Add more translations as needed
        }
    }
    // Add other languages here
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
