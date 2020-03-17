import React from "react";

export default function Child(props) {
  console.log(props.name, "these are my props");
  return (
    <div>
      <p>Name: {props.names}</p>
      <p>Job: {props.occ}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
