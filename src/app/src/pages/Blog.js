import './Blog.css'; 
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/wordpressActions';
import BlogPost from '../components/BlogPost';


class Blog extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {
        console.log(this.props.posts);
        return (
            <div className="container">
                {this.props.posts.map(post => (
                        <BlogPost key={post.id} {...post}  />
                    ))}
            </div>
        );
    }
}

Blog = connect((store) => {
  return {
    posts: store.wordpress.posts,
    postsFetched: store.wordpress.fetched,
  };
})(Blog);

export default Blog;
