import React from 'react';

class Sidebar extends React.Component {

    handleClick = (e) =>{
        // console.log(e.target.innerHTML.toLowerCase())
        this.props.changeMode(e.target.innerHTML.toLowerCase())
    }

    render(){
        return (
            <div className="sidebar">
                <div className="sidebar-item"  onClick={this.handleClick} style={this.props.mode === "home" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                    <h1 >Home</h1>
                </div>
                <div className="sidebar-item"  onClick={this.handleClick} style={this.props.mode === "about me" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                    <h1 >About Me</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "portfolio" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                    <h1>Portfolio</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "blog" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                    <h1>Blog</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "resume" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                    <h1>Resume</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "contact" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
}
export default Sidebar