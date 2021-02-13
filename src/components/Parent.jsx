import React from "react";
import { useState } from "react";

function Child(props) {
  return <GrandChild value={props.value} />;
}

function GrandChild(props) {
  return <h1>{props.value}</h1>;
}

export default function Parent() {
  const [name, setName] = useState("");

  function changeText(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <Child value={name}></Child>
      <input
        type="text"
        // value={name}
        onChange={changeText}
        placeholder="change name here"
      />
    </div>
  );
}
