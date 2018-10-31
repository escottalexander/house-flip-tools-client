import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <main className="LandingPage">
            <section className="gray">
                <h2>House Flipping Cost Analyzer</h2>
                <button><Link to="/dashboard">Example Account</Link></button>
                <img className="fake" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus sapien, elementum vel posuere
                    nec, porttitor a dolor. Nulla pharetra enim eu turpis semper tempus. Donec vestibulum nulla eget ex
                    vulputate imperdiet id lobortis tellus. Maecenas tempor semper quam, id molestie ex vulputate a. Proin
                    dictum lectus neque, id vestibulum mauris lacinia a. Fusce ultrices hendrerit dui id congue. Pellentesque
                    vehicula maximus gravida. Quisque vehicula luctus justo mattis luctus. Duis eget erat eget massa auctor
                    aliquet eget sed dolor. Morbi rhoncus vitae nulla non iaculis. Donec eu enim vitae lacus tempus dictum.
                    Etiam dictum massa at ligula sodales gravida. Donec purus neque, condimentum a cursus ut, pharetra sed
                    elit. Cras ipsum lorem, ultrices nec porta sit amet, ultrices eu nibh. Fusce lacinia accumsan eros sit amet
            gravida. Nullam vel mi tempor, aliquet tellus ut, elementum nisi.</p>
                <img className="fake" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus sapien, elementum vel posuere
                    nec, porttitor a dolor. Nulla pharetra enim eu turpis semper tempus. Donec vestibulum nulla eget ex
                    vulputate imperdiet id lobortis tellus. Maecenas tempor semper quam, id molestie ex vulputate a. Proin
                    dictum lectus neque, id vestibulum mauris lacinia a. Fusce ultrices hendrerit dui id congue. Pellentesque
                    vehicula maximus gravida. Quisque vehicula luctus justo mattis luctus. Duis eget erat eget massa auctor
                    aliquet eget sed dolor. Morbi rhoncus vitae nulla non iaculis. Donec eu enim vitae lacus tempus dictum.
                    Etiam dictum massa at ligula sodales gravida. Donec purus neque, condimentum a cursus ut, pharetra sed
                    elit. Cras ipsum lorem, ultrices nec porta sit amet, ultrices eu nibh. Fusce lacinia accumsan eros sit amet
            gravida. Nullam vel mi tempor, aliquet tellus ut, elementum nisi.</p>
            </section>


        </main>
    );
};
