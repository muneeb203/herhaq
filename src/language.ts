export type Language = 'en' | 'ur';

export const setLanguage = (lang: Language) => {
  localStorage.setItem('language', lang);
  window.location.reload(); // refresh to apply across components
};

export const getLanguage = (): Language => {
  return (localStorage.getItem('language') as Language) || 'en';
};
