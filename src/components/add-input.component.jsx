import { useState } from "react";

export default function AddInput({ onClick, onReset }) {
  const [addText, setAddText] = useState("");
  const errorText = "Please add what you are going to do.";
  return (
    <div className="main-input">
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (!addText) {
              alert(errorText);
              return;
            }
            onClick(addText);
            setAddText("");
          }
        }}
        onChange={(e) => setAddText(e.target.value)}
        value={addText}
      />
      <button
        onClick={() => {
          if (!addText) {
            alert(errorText);
            return;
          }
          onClick(addText);
          setAddText("");
        }}
      >
        add
      </button>
      <button onClick={(e) => onReset()}>Remove All</button>
    </div>
  );
}
