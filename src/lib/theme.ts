export const THEME_STORAGE_KEY = 'theme';

/** Inline <head> script: applies a saved light/dark choice before first paint, so there is no flash. */
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;
