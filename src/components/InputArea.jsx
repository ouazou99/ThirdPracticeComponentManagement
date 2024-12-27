import React from "react";

function InputArea(props) {
  function handleChange() {}
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
