import React, { useState } from 'react';
import { useEffect } from 'react';
import { applyTheme } from '../utils/theme';

const themes = ['light', 'dark', 'solarized'];

const ThemeSwitcher: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<string>('light');

    useEffect(() => {
        applyTheme(currentTheme);
    }, [currentTheme]);

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentTheme(event.target.value);
    };

    return (
        <div className="theme-switcher">
            <label htmlFor="theme-select">Select Theme:</label>
            <select id="theme-select" value={currentTheme} onChange={handleThemeChange}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ThemeSwitcher;