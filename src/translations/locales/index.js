import enLocales from './en.json';
import huLocales from './hu.json';
// import huPageMeta from './pageMeta.hu.json';
// import enPageMeta from './pageMeta.en.json';
// import enValidationLocales from './validation.en.json';
// import huValidationLocales from './validation.hu.json';


// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
// const language = (navigator.languages && navigator.languages[0]) ||
//                     navigator.language ||
//                     navigator.userLanguage;
const language = 'en'; //TODO: use dynamic language
// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const localeData = {
  hu: Object.assign(huLocales),
  // hu: Object.assign(huLocales, huValidationLocales),
  en: Object.assign(enLocales)
  // en: Object.assign(enLocales, enValidationLocales)
};

const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.hu;

export default {
  language,
  messages
};
