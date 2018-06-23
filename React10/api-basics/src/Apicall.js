import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';

class Apicall extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            svr: 'space'
        }
        this.redditData = this.redditData.bind(this);
    }
    componentWillMount() {
        this.redditData();
    }
    redditData() {
        //axios.get(`https://www.reddit.com/r/${this.state.svr}.json`)
        request.get(`https://www.reddit.com/r/${this.state.svr}.json`)
            .end((error, response)=>{
            console.log(response.body);
            const posts = response.body.data.children.map(obj=>obj.data);
            if (!error && response) {
                this.setState({ posts: posts });
            } 
        })
//        .then(results => {
//            const posts = results.data.data.children.map(obj=>obj.data);
//            console.log(posts);
//            this.setState({
//                posts
//            });
//        });
    }
    
    render() {
        return (
        <div>
            <h1>{`/r/${this.state.svr}`}</h1>
            <ul>
            {
                this.state.posts.map(post => {
                   return <li key={post.id}>{post.title}</li> 
                })
            }
               
            </ul>
        </div>
        );
    }
}

export default Apicall;