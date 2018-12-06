import React from 'react';
import './Footer.css';

export default function Footer(props) {
    const links = ["View The Source Code"];
    const footerButtons = links.map((item, index) => {
        return <li key={index} className={item}><a href="https://github.com/escottalexander/house-flip-tools-client">{item}</a></li>
    })
    return (
        <footer className="Footer">
            <ul>
                {footerButtons}
            </ul>
        </footer>
    );

};
