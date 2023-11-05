import { useState } from "react";

function Button() {
  const [value, setValue] = useState("");

  function handleOnClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleOnClick}>
      {value}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="board">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
