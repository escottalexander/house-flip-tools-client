import React from 'react';

import './RegisterPage.css';

export default function RegisterPage() {
    return (
        <main className="RegisterPage">
            <h2>Register</h2>

            <p>Fill out this form to create an account so you can begin estimating properties</p>
            <form>
                <label>email address: <input className="email" /></label>
                <label>username: <input className="username" /></label>
                <label>password: <input className="password" /></label>
                <label>repeat password: <input className="password-again" /></label>
                <label>Where are you in your house flipping journey?
        <select name="journey">
                        <option value="just begun">Beginner</option>
                        <option value="flipped one house">Flipped One House</option>
                        <option value="few">Flipped a few</option>
                        <option value="several">Flipped several</option>
                    </select>
                </label>
                <button className="register">Register</button>
            </form>

        </main>
    );
};
