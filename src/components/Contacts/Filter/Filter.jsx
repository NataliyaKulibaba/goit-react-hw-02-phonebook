import React from "react";

import s from "./Filter.module.css";

function Filter({ filter, changeFilter }) {
  return (
    <label className={s.filter}>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

export default Filter;
