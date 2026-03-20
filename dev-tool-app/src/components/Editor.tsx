import React, { useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

interface EditorProps {
    code: string;
    setCode: (code: string) => void;
    onRun?: () => void;
}

const Editor: React.FC<EditorProps> = ({ code, setCode, onRun }) => {
    const language = 'javascript';

    // ✅ Load saved code on mount
    useEffect(() => {
        const savedCode = getFromLocalStorage('code');
        if (savedCode) {
            setCode(savedCode);
        } else {
            setCode('');
        }
    }, [setCode]);

    // ✅ Keyboard shortcut: Ctrl + Enter to run code
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                onRun && onRun(); // call run function from parent
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onRun]);

    // ✅ Handle editor changes
    const handleCodeChange = (newCode: string | undefined) => {
        const updatedCode = newCode || '';
        setCode(updatedCode);
        saveToLocalStorage('code', updatedCode);
    };

    // ✅ Monaco editor options (VS Code-like)
    const editorOptions = {
        selectOnLineNumbers: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        cursorSmoothCaretAnimation: true,
        minimap: { enabled: false },
        fontSize: 14,
        lineHeight: 22,
        tabSize: 2,
        wordWrap: 'on',
        quickSuggestions: true,
        suggestOnTriggerCharacters: true,
        scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
        },
    };

    return (
        <div style={{ flex: 1, overflow: 'hidden' }}>
            <MonacoEditor
                width="100%"
                height="100%"
                language={language}
                value={code}
                theme="vs-dark"
                options={editorOptions}
                onChange={handleCodeChange}
            />
        </div>
    );
};

export default Editor;