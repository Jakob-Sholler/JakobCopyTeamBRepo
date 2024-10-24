// src/components/LandingPage.tsx

import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import './LandingPage.css';

interface LandingPageProps {
    onLogout: () => void;
}

const LandingPage = (props: LandingPageProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>('exercises'); // State to track the active tab

    // Function to handle tab switching
    const openTab = (tabName: string): void => {
        setActiveTab(tabName);
    };

    const courses = [
        { id: 1, title: 'Artificial Intelligence', description: 'Explore AI concepts and applications.' },
        { id: 2, title: 'Machine Learning', description: 'Learn algorithms and data science.' },
        { id: 3, title: 'Web Development', description: 'Build modern web applications.' },
        { id: 4, title: 'Data Science', description: 'Dive into data analysis and visualization.' },
    ];

    useEffect(() => {
        // Show the first tab by default
        setActiveTab('exercises');
    }, []);

    return (
        <div className="container">
            <h1>Welcome, {auth.currentUser?.email}</h1>
            <button onClick={props.onLogout}>Logout</button>

            <h2>Your Dashboard</h2>
            <div className="tabs">
                <button className={`tablink ${activeTab === 'exercises' ? 'active' : ''}`} onClick={() => openTab('exercises')}>Interactive Exercises</button>
                <button className={`tablink ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => openTab('progress')}>Progress Tracking</button>
                <button className={`tablink ${activeTab === 'quizzes' ? 'active' : ''}`} onClick={() => openTab('quizzes')}>Quizzes</button>
                <button className={`tablink ${activeTab === 'feedback' ? 'active' : ''}`} onClick={() => openTab('feedback')}>Feedback</button>
                <button className={`tablink ${activeTab === 'streaks' ? 'active' : ''}`} onClick={() => openTab('streaks')}>Streaks</button>
            </div>

            {/* Tab Content */}
            <div id="exercises" className={`tabcontent ${activeTab === 'exercises' ? 'active' : ''}`}>
                <h2>Interactive Exercises</h2>
                <p>Complete the following exercises to sharpen your coding skills.</p>
                {/* Add interactive exercises content here */}
            </div>

            <div id="progress" className={`tabcontent ${activeTab === 'progress' ? 'active' : ''}`}>
                <h2>Progress Tracking</h2>
                <p>Track your progress through quizzes and exercises.</p>
                {/* Add progress tracking content here */}
            </div>

            <div id="quizzes" className={`tabcontent ${activeTab === 'quizzes' ? 'active' : ''}`}>
                <h2>Quizzes</h2>
                <p>Test your knowledge with these quizzes.</p>
                {/* Add quiz content here */}
            </div>

            <div id="feedback" className={`tabcontent ${activeTab === 'feedback' ? 'active' : ''}`}>
                <h2>Feedback</h2>
                <p>Get feedback on your coding progress and performance.</p>
                {/* Add feedback content here */}
            </div>

            <div id="streaks" className={`tabcontent ${activeTab === 'streaks' ? 'active' : ''}`}>
                <h2>Streaks</h2>
                <p>Maintain your learning streak and earn rewards.</p>
                {/* Add streaks content here */}
            </div>

            <h2>Select a Course</h2>
            <ul className="course-list">
                {courses.map((course) => (
                    <li className="course-item" key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button className="course-button">Enroll Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LandingPage;
