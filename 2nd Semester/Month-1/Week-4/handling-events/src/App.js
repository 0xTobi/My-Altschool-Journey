import "./App.css";
import Counter from "./Counter";
import Form from "./Form";
import MouseHover from "./MouseHover";
import Row from "./Row";

const cars = ["a", "b", "c", "d"]

const carRow = cars.map(car => {
  return <Row item = {car} key={car}/>
})

// Render
function App() {
  return (
    <div className="App">
      <Counter />
      <Form /> 
      <MouseHover/>
      <ul>
        {carRow}
      </ul>
    </div>
  );
}

export default App;
