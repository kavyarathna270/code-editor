import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { saveToLocalStorage } from '../utils/localStorage';

const ShareLink: React.FC = () => {
    const [link, setLink] = useState('');
    const router = useRouter();

    const generateLink = () => {
        const code = localStorage.getItem('code') || '';
        const theme = localStorage.getItem('theme') || 'light';
        const encodedCode = encodeURIComponent(code);
        const encodedTheme = encodeURIComponent(theme);
        const shareableLink = `${window.location.origin}?code=${encodedCode}&theme=${encodedTheme}`;
        setLink(shareableLink);
        saveToLocalStorage('code', code);
        saveToLocalStorage('theme', theme);
    };

    return (
        <div>
            <button onClick={generateLink}>Generate Shareable Link</button>
            {link && (
                <div>
                    <p>Share this link:</p>
                    <input type="text" value={link} readOnly />
                </div>
            )}
        </div>
    );
};

export default ShareLink;