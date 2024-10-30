// src/DataTypes.tsx

import React from 'react';

const DataTypes: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Understanding Data Types in Python</h1>
            <p>
                Python has various data types that define the kind of value a variable can hold. 
                Here are some of the most common data types:
            </p>
            <h2>1. Integers</h2>
            <p>Whole numbers, positive or negative.</p>
            <pre><code>my_integer = 42</code></pre>

            <h2>2. Floats</h2>
            <p>Numbers with decimal points.</p>
            <pre><code>my_float = 3.14</code></pre>

            <h2>3. Strings</h2>
            <p>Sequences of characters.</p>
            <pre><code>my_string = "Hello, World!"</code></pre>

            <h2>4. Booleans</h2>
            <p>True or False values.</p>
            <pre><code>is_active = True</code></pre>

            <h2>Try It Out</h2>
            <p>Use the embedded Python compiler below to test your code:</p>
            <iframe
                title="Python Compiler"
                src="https://trinket.io/embed/python/c602fdf514fe"
                style={{ width: '100%', height: '600px', border: 'none' }}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DataTypes;
