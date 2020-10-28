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
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        )
    }
}
export default Navbar