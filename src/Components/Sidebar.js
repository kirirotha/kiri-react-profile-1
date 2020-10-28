import React from 'react';

class Sidebar extends React.Component {

    handleClick = (e) =>{
        // console.log(e.target.innerHTML.toLowerCase())
        this.props.changeMode(e.target.innerHTML.toLowerCase())
    }

    render(){
        return (
            <div className="sidebar">
                <div className="sidebar-item"  onClick={this.handleClick} style={this.props.mode === "home" ? {color: 'aquamarine'} : null}>
                    <h1 >Home</h1>
                </div>
                <div className="sidebar-item"  onClick={this.handleClick} style={this.props.mode === "about me" ? {color: 'aquamarine'} : null}>
                    <h1 >About Me</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "portfolio" ? {color: 'aquamarine'} : null}>
                    <h1>Portfolio</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "blog" ? {color: 'aquamarine'} : null}>
                    <h1>Blog</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "resume" ? {color: 'aquamarine'} : null}>
                    <h1>Resume</h1>
                </div>
                <div className="sidebar-item" onClick={this.handleClick} style={this.props.mode === "contact" ? {color: 'aquamarine'} : null}>
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
}
export default Sidebar