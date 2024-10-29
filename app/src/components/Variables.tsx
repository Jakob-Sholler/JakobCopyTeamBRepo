// src/Variables.tsx

import React from 'react';

const Variables: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Understanding Variables in Python</h1>
            <p>
                In Python, a variable is a name that refers to a value. You can think of it as a container for storing data values.
            </p>
            <h2>How to Create Variables</h2>
            <p>To create a variable in Python, simply assign a value to a name using the equals sign:</p>
            <pre>
                <code>
                    {`my_variable = 10\nname = "John"\nprice = 19.99\nis_active = True`}
                </code>
            </pre>
            <h2>Example of Variable Usage</h2>
            <p>Here is an example of how you might use variables in Python:</p>
            <pre>
                <code>
                    {`# Example code\nname = "Alice"\nage = 30\nprint(f"My name is {name} and I am {age} years old.")`}
                </code>
            </pre>
            <h2>Try It Out</h2>
            <p>Use the embedded Python compiler below to test your code:</p>
            <iframe
                title="Python Compiler"
                src="https://trinket.io/embed/python/c602fdf514fe"
                style={{ width: '100%', height: '600px', border: 'none' }}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <button className="run-button" onClick={() => alert('Run button clicked!')}>
                Run Code
            </button>
            <p>You can modify the code and run it directly within the embedded compiler!</p>
        </div>
    );
};

export default Variables;
