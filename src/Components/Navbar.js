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
                    <a href="https://github.com/kirirotha" target="_blank">
                        <button className="github"></button>
                    </a>
                    <a href="https://www.linkedin.com/in/kiri-um" target="_blank">
                        <button className="linkedin"></button>
                    </a>
                    <a href="https://www.facebook.com/rotha.um/" target="_blank">
                        <button className="facebook"></button>
                    </a>
                    <a href="https://www.youtube.com/user/kirirotha" target="_blank">
                        <button className="youtube"></button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Navbar