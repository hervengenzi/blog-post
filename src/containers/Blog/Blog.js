import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch} from 'react-router-dom';
class Blog extends Component {
    render () {
            return (
                <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                style={{
                                    textDecoration: 'underline',
                                    color: 'fa923f',
                                }}>Posts</NavLink> </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-search=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts" component={Posts} />
                <Route path="/" component={Posts} />
                </Switch>
                
                </div>
            );
    
    }
}

export default Blog;