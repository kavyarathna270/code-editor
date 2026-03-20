export type CodeSnippet = {
  id: string;
  code: string;
  language: 'javascript' | 'python';
};

export type Theme = {
  name: string;
  backgroundColor: string;
  color: string;
};

export type AccessibilitySettings = {
  keyboardNavigation: boolean;
  highContrastMode: boolean;
};