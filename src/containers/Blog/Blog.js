import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import Navbar from '../../components/NavBar/NavBar';

class Blog extends Component {
    render () {
        return (
            <Aux>
                <Navbar/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </Aux>
        );
    }
}

export default withClass(Blog, "Blog");