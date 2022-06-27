import React from 'react';

function HomePage(){
    return (
        <div className="container">
        <div className="jumbotron">
        <h1>Pluralsight Course Administration</h1>
        <p>React , flux and react router for intermediate developers</p>

            <a href="/about">About </a>
    </div>
        </div>
    );
}

//every thing is private so we have to export the component to be able to access it
export default  HomePage;