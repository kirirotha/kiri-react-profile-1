import React from 'react';

class Portfolio extends React.Component {

    render(){
        return (
            <div className="center-panel-portfolio">
                <div className="vid-box">
                    <iframe title="Projekt Camp" width="560" height="315" src="https://www.youtube.com/embed/gLrrX8T-_j8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>This is my capstone project I created for Flatiron School Software Engineering Bootcamp. This was built using Ruby on Rails backend with React for the frontend.</p>
                </div>
                <hr/>
                <div className="vid-box">
                    <iframe title="Crabble"width="560" height="315" src="https://www.youtube.com/embed/ol5RBCK9_VU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>This is my mod 4 project I built for Flatiron School software engineering bootcamp. The backend was built with Ruby on Rails and the frontend was made with React and Javascript.

                    </p>
                </div>
                <hr/>
                <div className="vid-box">
                    <iframe title="Tactics Lite"width="560" height="315" src="https://www.youtube.com/embed/i0NvsCT_Pa4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>This the project I submitted for mod 3 of Flatiron School software engineering bootcamp. This was built using Ruby on Rails backend and Javascript for the frontend.

                    </p>
                </div>
            </div>
        )
    }
}
export default Portfolio