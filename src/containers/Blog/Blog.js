import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
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
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} />: null}
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts" />
                </Switch>
                
                </div>
            );
    
    }
}

export default Blog;