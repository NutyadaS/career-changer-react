import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
// Code below!!!!

class Header extends React.Component {
  // Pass by hard code javascript

  render() {
    let temperature = 30;
    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
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
        <span>____ Oc</span>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <button onClick={this.props.increase}>Up</button>
        <button onClick={this.props.decreate}>Down</button>
      </footer>
    );
  }
}

export default App;
