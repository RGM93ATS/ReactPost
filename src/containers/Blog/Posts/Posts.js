import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import withClass from '../../../hoc/withClass';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('/posts.json/')
            .then(response => {
                const ps = response.data;
                const posts = Object.keys(ps)
                .map(psKey => {
                    return ps[psKey]
                })
                //onst posts = [response.data];
                console.log('ps',ps)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true})
            }) 
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>¡Algo ha fallado!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post   
                        key={post}
                        title={post.title} 
                        description={post.description}
                        author={post.author} 
                    />
                )
            });
        }
        return(
            <div>
                <section>
                    {posts}
                </section>
            </div>
        );
    }
}

export default withClass(Posts, "Posts");