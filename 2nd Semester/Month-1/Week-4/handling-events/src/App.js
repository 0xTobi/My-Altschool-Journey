import "./App.css";
import Counter from "./Counter";
import Form from "./Form";
import MouseHover from "./MouseHover";
import Row from "./Row";
import RenderCars from "./Props";
import { App as SimpleLoader } from "./Loader";

// A list of items to be displayed in the DOM.
const cars = ["a", "b", "c", "d"];

// Iterating over the list and calling the Row componennt for each iteration.
const carRow = cars.map((car) => {
  return <Row item={car} key={car} />;
});

// Render
function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
      <MouseHover />
      <ul>{carRow}</ul>
      <RenderCars />
      <SimpleLoader />
    </div>
  );
}

export default App;
