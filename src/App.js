import  React from "react";
import "./Styles.css"



const Row = ({ children, spacing }) => {
const childStyle = {
  marginLeft: `${spacing}px`,
}

  return (
    <div className="Row">
  {React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        ...(index > 0 ? childStyle : {}),
      },
    }) 
  })}
</div>
  )
}

function App() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>Sam</p>
      </Row>
      <p>Hello do you see me?</p>

    </div>
  );
}

export default App;
