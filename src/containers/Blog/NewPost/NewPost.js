import React, { Component } from 'react';
import axios from '../../../axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import Aux from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClass';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props)
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            description: this.state.content,
            author: this.state.author
        }

        axios.post('/posts.json/', post)
            .then(response => {
                console.log(response)
                this.props.history.push('/posts')
                // this.setState({submitted: true})
            });
    }

    render () {
        let redirect = null;
        if(this.state.submitted) {
            redirect = <Redirect to="/posts" />;
        }
        return (
            <Aux>
                {redirect}
                <h1>¡Añade un Post!</h1>
                <label>Título</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Descripción</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                <button onClick={this.postDataHandler}>Subir Post</button>
            </Aux>
        );
    }
}

export default withClasses(NewPost, "NewPost");