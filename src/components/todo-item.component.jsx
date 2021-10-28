import React from "react";

export default function TodoItem({ onClick, text }) {
  return (
    <li>
      {text}
      <button onClick={onClick}>x</button>
    </li>
  );
}
