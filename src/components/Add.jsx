import { useState } from "react";

export default function Add({ value, setValue, addList }) {
  function handleChange(e) {
    if (e.length < 50) setValue(e);
  }

  return (
    <div className="add">
      <input
        type="text"
        name=""
        id=""
        className="input-add"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Input text here."
      />
      <button className="add-btn" onClick={addList}>
        Add
      </button>
    </div>
  );
}
