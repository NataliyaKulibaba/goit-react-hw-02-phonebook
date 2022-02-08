import React from "react";

function Filter({ filter, changeFilter }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

export default Filter;
