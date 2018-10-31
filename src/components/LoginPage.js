import React from 'react';

import './LoginPage.css';

export default function LoginPage() {
    return (
        <main className="LoginPage">

            <h2>Login</h2>

            <p>Fill out these fields with your username and password to view your properties</p>
            <form>
                <label>username or email address: <input className="username" /></label>
                <label>password: <input className="password" /></label>
                <button className="log-in">Log In</button>
            </form>



        </main>
    );
};
