import React from 'react';

class Portfolio extends React.Component {

    render(){
        return (
            <div className="center-panel-portfolio">
                <div className="vid-box">
                    <h1>Projekt Camp</h1>
                    <iframe title="Projekt Camp" width="560" height="315" src="https://www.youtube.com/embed/gLrrX8T-_j8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p>This is my capstone project I created for Flatiron School Software Engineering Bootcamp. This was built using Ruby on Rails backend with React for the frontend.</p>
                </div>
                <hr/>
                <div className="vid-box">
                    <h1>Crabble</h1>
                    <p>This is my mod 4 project I built for Flatiron School software engineering bootcamp. The backend was built with Ruby on Rails and the frontend was made with React and Javascript.</p>
                    <iframe title="Crabble"width="560" height="315" src="https://www.youtube.com/embed/ol5RBCK9_VU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   
                </div>
                <hr/>
                <div className="vid-box">
                    <h1>Tactics Lite</h1>
                    <iframe title="Tactics Lite"width="560" height="315" src="https://www.youtube.com/embed/i0NvsCT_Pa4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                    <p>This the project I submitted for mod 3 of Flatiron School software engineering bootcamp. This was built using Ruby on Rails backend and Javascript for the frontend.

                    </p>
                </div>
            </div>
        )
    }
}
export default Portfolio