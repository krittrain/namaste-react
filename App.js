import React from "react";
import ReactDOM from "react-dom/client"


const elem = <span>React Element</span>
const title = (
    <h1 className="head">
    {elem}
     Namaste React Title component
    </h1>
  );

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

 



