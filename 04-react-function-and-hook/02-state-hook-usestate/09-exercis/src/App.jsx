import React, { useState } from "react";

function App() {
  // adding state here.
  // [stateVariable, stateMethod] = useState(init);
  const [options, setOptions] = useState();
  const [rowsData, setRowsData] = useState([]);

  const addTableRows () => {
    const rowsInput={
        FullName: '',
        Age: '',
        Picture: ''
    }
    setRowsData([...rowsData, rowsInput])

  }


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

// function TableInfo() {
//   return (
//     <div>
//       <input type="text" placeholder="TFullname" style={{ margin: "4px" }} />
//     </div>
//   );
// }

function DisplayInfo(props) {
  let element;
  if (props.options === "Fullname") {
    element = <h2>Meow Meow</h2>;
  } else if (props.options === "Age") {
    element = <h2>99</h2>;
  } else if (props.options === "Picture") {
    element = (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRCv5FR_Cwd5cBZ3-BF95ZX00tNZcEJt5Xi9D065i-g&s"
        alt="Placeholder"
      />
    );
  } else {
    element = <p>Please select an option.</p>;
  }

  return <div>{element}</div>;
}

export default App;
