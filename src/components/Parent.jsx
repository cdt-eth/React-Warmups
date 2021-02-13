import React from "react";
import { useState } from "react";

function Child(props) {
  return <GrandChild value={props.value} />;
}

function GrandChild(props) {
  return <h1>{props.value}</h1>;
}

export default function Parent() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <Child value={value}></Child>
    </div>
  );
}
