import React from "react";

class App extends React.Component {
  // build state
  constructor(props) {
    super(props);
    this.state = {
      temperature: 40,
    };
  }
  render() {
    return (
      <div id="app">
        <Header temperature={this.state.temperature} />
        <Content temperature={this.state.temperature} />
        <Footer temperature={this.state.temperature} />
      </div>
    );
  }
}
// Code below!!!!

class Header extends React.Component {
  // code here.
  // hint: how to create props in React class component?
  render() {
    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: {this.props.temperature}</p>
      </header>
    );
  }
}

class Content extends React.Component {
  // code here.
  // hint: how to create props in React class component?
  render() {
    return (
      <main>
        <Temperature temperature={this.props.temperature} />
      </main>
    );
  }
}

class Temperature extends React.Component {
  render() {
    return (
      <div id="temperature">
        <span>{this.props.temperature}°C</span>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
    );
  }
}

export default App;
