import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Blog from './Blog'
import BlogWindow from './BlogWindow'
import Resume from './Resume'
import Contact from './Contact'


class Main extends React.Component {
    state={
        mode: "home",
        blogData: null,
        selectedBlog: null
    }

    componentDidMount = () =>{
        this.fetchBlog()
    }

    changeMode = (mode) =>{
        this.setState({
            ...this.state,
            mode: mode
        })
    }

    selectBlog = (blog) =>{
        this.setState({
            ...this.state,
            mode: "showBlog",
            selectedBlog: blog
        })
    }

    fetchBlog = () =>{
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kirirotha')
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            this.setState({
                ...this.state,
                blogData: data
            })
        })
    }

    render(){
        return (
            <div className="main-container">
                <div></div>
                <Navbar/>
                <Sidebar changeMode={this.changeMode} mode={this.state.mode}/>
                {this.state.mode === "home" ? <Home/> : null}
                {this.state.mode === "about me" ? <AboutMe/> : null}
                {this.state.mode === "resume" ? <Resume/> : null}
                {this.state.mode === "portfolio" ? <Portfolio/> : null}
                {this.state.mode === "blog" ? <Blog blogData={this.state.blogData} selectBlog={this.selectBlog}/> : null}
                {this.state.mode === "showBlog" ? <BlogWindow blog={this.state.selectedBlog}/> : null}
                {this.state.mode === "contact" ? <Contact/> : null}
                <div className = "footer"> This was built by me, Kiri Um, using React</div>
            </div>
        )
    }
}
export default Main