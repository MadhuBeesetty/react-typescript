import React, { Component } from 'react';

class Component2 extends Component {
constructor(props) {
  super(props)
  this.state={
    posts: []
  }
}

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts ')
    .then(res => res.json())
    .then(data => this.setState({ posts: data }));
  }
  
  
  
  render() {
const postItems = this.state.posts.map(post => (
 <div key={post.id}>
 <h3>{post.title}</h3>
 <p>{post.body}</p>
  </div>
))

    return (
      <div>
        <p>post</p>
        {postItems}
      </div>
    );
  }
}

export default Component2;
