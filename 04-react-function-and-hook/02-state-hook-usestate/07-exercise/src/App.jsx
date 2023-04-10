import React, { useState } from "react";

function App() {
  // adding state here.
  // [stateVariable, stateMethod] = useState(init);
  const [options, setOptions] = useState();

  // const handleClick = (value) => {
  //   // code here.
  // };

  return (
    <div>
      <button onClick={() => setOptions("Fullname")}>Fullname</button>
      <button onClick={() => setOptions("Age")}>Age</button>
      <button onClick={() => setOptions("Picture")}>Picture</button>
      <DisplayInfo options={options} />
    </div>
  );
}

function DisplayInfo(props) {
  let element;
  if (props.options === "Fullname") {
    element = <h2>John Doe</h2>;
  } else if (props.options === "Age") {
    element = <h2>30</h2>;
  } else if (props.options === "Picture") {
    element = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    element = <p>Please select an option.</p>;
  }

  return <div>{element}</div>;
}

export default App;
