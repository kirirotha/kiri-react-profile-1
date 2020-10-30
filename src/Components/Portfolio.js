import React from 'react';

class Portfolio extends React.Component {

    render(){
        return (
            <div className="center-panel-portfolio">
                <div className="vid-box">
                    <h1>Projekt Camp</h1>
                    <iframe title="Projekt Camp" width="560" height="315" src="https://www.youtube.com/embed/gLrrX8T-_j8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p>This is my capstone project I created for Flatiron School Software Engineering Bootcamp. This was built using Ruby on Rails backend with Javascript and React for the frontend. This application fetched from 4 different web APIs along with a custom built one on the backend. Learning how to use Mapbox was a great experience for me and I hope to use it on more projects in the future.</p>
                </div>
                <hr/>
                <div className="vid-box">
                    <h1>Crabble</h1>
                    <p>This is my mod 4 project I built for Flatiron School software engineering bootcamp. The backend was built with Ruby on Rails and the frontend was made with React and Javascript. I learned alot creating this project. I had to build drag and drop functionality from scratch along with implementing a robust game logic based around Scrabble. This project is where I started to get really familiar with css.</p>
                    <iframe title="Crabble"width="560" height="315" src="https://www.youtube.com/embed/ol5RBCK9_VU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   
                </div>
                <hr/>
                <div className="vid-box">
                    <h1>Tactics Lite</h1>
                    <iframe title="Tactics Lite"width="560" height="315" src="https://www.youtube.com/embed/i0NvsCT_Pa4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                    <p>This the project I submitted for mod 3 of Flatiron School software engineering bootcamp. This was built using Ruby on Rails backend and Javascript for the frontend. My partner on this project, Ted Neben, made the majority of the artwork used. Designing the game logic and character attributes was really interesting. We built game board and the playable grid using canvas.
                    </p>
                </div>
                <hr/>
                <div className="vid-box">
                    <h1>Jmakon</h1>
                    <p>This was my mod 2 project for Flatiron School software engineering bootcamp. We built this using strictly Ruby on Rails and HTML. I worked on this project with Joe Gomez. This was the first e-commerce application that I built. It was really fun to think about all of the functionality that goes into building a store website and try to implement them on our own. When we made this, we did not have any knowledge of Javascript yet. It would be nice to remake this application using React.</p>
                    <iframe title="Jmakon" width="560" height="315" src="https://www.youtube.com/embed/JJou4egZLu4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                   
                </div>
                <hr/>
                <div className="vid-box">
                    <h1>Compendium</h1>
                    <iframe title="Compendium" width="560" height="315" src="https://www.youtube.com/embed/u64NSyRjAZI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                    <p>This was my mod 1 project for Flatiron School Software Engineering Bootcamp. This CLI app was built entirely with Ruby. My partners on this project were Ed Gonzales and Tom Lai. This was my first bootcamp project and it was a great experience learning how to code on a team, using version control with Github and turning our idea into something real.

                    </p>
                </div>
            </div>
        )
    }
}
export default Portfolio