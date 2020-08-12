import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        isSelected: null,
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: "Max",
                }
            });
            this.setState({posts: updatedPost});
        });
    }

    postSelectedHandler = (id) => {
        this.setState({isSelected: id});
    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.isSelected} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;