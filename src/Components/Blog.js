import React from 'react';

class Blog extends React.Component {

    renderBlogList = () =>{
        let index = 0
        return this.props.blogData.items.map(blog =>{
            index++
            return(
                <div key={index} className="blog-item" onClick={()=> this.handleBlogClick(blog)}>
                    <h1>{blog.title}</h1>
                </div>
            ) 
        })
    }

    handleBlogClick = (blog) =>{
        this.props.selectBlog(blog)
    }

    render(){
        return (
            <div className="blog-list">
                {this.renderBlogList()}
            </div>
        )
    }
}
export default Blog