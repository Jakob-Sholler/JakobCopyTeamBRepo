// src/components/AuthPage.tsx

import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

interface AuthPageProps {
    onLogin: () => void;
}

const AuthPage = (props: AuthPageProps): JSX.Element => {
    const [isLogin, setIsLogin] = useState<boolean>(true); // State to toggle between login and signup

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div className="container">
            <h1>Welcome to the App</h1>
            {isLogin ? (
                <>
                    <Login onLogin={props.onLogin} />
                    <p>
                        Don't have an account?{' '}
                        <button onClick={toggleForm}>Sign Up</button>
                    </p>
                </>
            ) : (
                <>
                    <Signup />
                    <p>
                        Already have an account?{' '}
                        <button onClick={toggleForm}>Log In</button>
                    </p>
                </>
            )}
        </div>
    );
};

export default AuthPage;
