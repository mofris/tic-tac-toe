import { useState } from "react";

export default function Button() {
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
