import React from 'react';

const Preview = ({ code }) => {
    const srcDoc = `
        <html>
            <head>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #434343;
                        color: #f5f4f4;
                    }
                </style>
            </head>
            <body>
                <pre id="output"></pre>
                <script>
                    const log = (...args) => {
                        document.getElementById('output').textContent += args.join(' ') + '\\n';
                    };
                    console.log = log;
                    try {
                        ${code}
                    } catch (e) {
                        log(e);
                    }
                </script>
            </body>
        </html>
    `;
    
    return (
        <iframe
            title="Live Preview"
            sandbox="allow-scripts"
            className="w-full h-full border border-gray-300"
            srcDoc={srcDoc}
        />
    );
};

export default Preview;