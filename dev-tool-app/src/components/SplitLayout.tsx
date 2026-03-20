import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import ThemeSwitcher from './ThemeSwitcher';
import ShareLink from './ShareLink';
import Accessibility from './Accessibility';

const SplitLayout: React.FC = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const handleRun = () => setOutput(code);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, borderRight: '1px solid #888787;', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <Editor
                    code={code}
                    setCode={setCode}
                    onRun={handleRun}
                />
                <button onClick={handleRun} style={{ marginTop: '10px', width: '50%', alignSelf: 'flex-end', background: 'linear-gradient(135deg, #1a61cbe1, #e72c7a)' }}>Execute</button>
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                <Preview code={output} />
            </div>
        </div>
    );
};

export default SplitLayout;