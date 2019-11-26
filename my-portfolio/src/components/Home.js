import React, { Component } from 'react';

const myidentity = [
  'Aradhana Singh',
  'Web Developer',
  'A Blogger',
  'A Writer',
  'An Artist'
];
class Home extends Component {
  constructor() {
    super();
    this.state = { textIndex: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIndex = this.state.textIndex;
      this.setState({ textIndex: currentIndex + 1 });
    }, 1500);
  }
  componentDidUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let textChanges = myidentity[this.state.textIndex % myidentity.length];
    return (
      <div className='container'>
        <h1>Hi There !</h1>
        <h1>
          I'm <span className='mytitle'>{textChanges}</span>
        </h1>
        <p>A passionate web developer based in Bangaluru, India.</p>
      </div>
    );
  }
}

export default Home;
