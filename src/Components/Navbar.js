import React from 'react';

class Navbar extends React.Component {
    state={
        mode: ""
    }

    render(){
        return (
            <div className="nav-bar">
                <h1>Kiri Um</h1>
                <div className="nav-button-container">
                    <button className="github"></button>
                    <button className="linkedin"></button>
                    <button className="facebook"></button>
                    <button className="youtube"></button>
                </div>
            </div>
        )
    }
}
export default Navbar