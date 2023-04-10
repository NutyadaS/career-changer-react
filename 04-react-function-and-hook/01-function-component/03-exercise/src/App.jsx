import React from "react";

const App = () => {
  return (
    <div id="app">
      <img
        width="150px"
        height="150px"
        src="https://i.pinimg.com/originals/ae/24/87/ae24874dd301843548c034a3d2973658.png"
      />
      <Info />
      <Social />
    </div>
  );
};

const Info = () => {
  let name = "Mai";
  let bio = "This is a bio";
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

const Social = () => {
  return (
    <div>
      <a href="">Facebook</a>
      <br></br>
      <a href="">Twitter</a>
    </div>
  );
};

export default App;
