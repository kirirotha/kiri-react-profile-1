import React from 'react';

class BlogWindow extends React.Component {

    renderBlog = () =>{
        return(
            {__html: this.props.blog.content}
        )
    }

    render(){
        return (
            <div className="blog-window">
                <h1>{this.props.blog.title}</h1>
                <div dangerouslySetInnerHTML={this.renderBlog()}></div>
            </div>
        )
    }
}
export default BlogWindow