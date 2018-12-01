import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <main className="LandingPage">
            <section className="gray">
                <h2 className="header">House Flip Tools</h2>
                <p>House Flip Tools is a useful house flipping cost analyzer that aims to help you discover the financial feasibility of a "flip".</p>

                <p>Login to view your properties or click the button below to see an example account.</p>
                <button onClick={() => window.location.replace('/dashboard')}>Example Account</button>
            </section>
        </main>
    );
};
