export const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
    editorBackground: '#f5f5f5',
    editorColor: '#000000',
  },
  dark: {
    background: '#1e1e1e',
    color: '#ffffff',
    editorBackground: '#2d2d2d',
    editorColor: '#ffffff',
  },
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  const selectedTheme = themes[theme] || themes.light;

  root.style.setProperty('--background', selectedTheme.background);
  root.style.setProperty('--color', selectedTheme.color);
  root.style.setProperty('--editor-background', selectedTheme.editorBackground);
  root.style.setProperty('--editor-color', selectedTheme.editorColor);
};

export const toggleTheme = (currentTheme) => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  return newTheme;
};

export const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || 'light');
};