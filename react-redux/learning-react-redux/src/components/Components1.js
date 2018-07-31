import React, { Component } from 'react';

class Component1 extends Component {
constructor(props) {
  super(props)
  this.state={
    title: '',
    body: ''
  };

  this.onChange= this.onChange.bind(this);
  this.submit = this.submit.bind(this);
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}
   
submit(e) {

  const post = {
    title: this.state.title,
    body: this.state.body
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
 'content-type': 'application/json'
  },
  body: JSON.stringify(post) 
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
        <label>Title: </label>
        <input type="text" name="title" onChange={this.onChange} 
        value={this.state.title} />
        </div>
        <br />
        <div>
        <label>Body: </label>
        <br />
        <textarea name="body" onChange={this.onChange} value={this.state.body} />
          </div>
          <br />
          <div>
            <input type ="submit" onClick={this.submit} />
          </div>
        </form>
      </div>
    );
  }
}

export default Component1;
