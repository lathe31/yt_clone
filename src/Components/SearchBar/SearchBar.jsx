import React from "react";
import Style from "./SearchBar.module.css";
import { Segment, Input } from "semantic-ui-react";

const SearchBar = ({ value, onInputChange, onInputSubmit, heading }) => {
  return (
    <div className={Style.SearchContainer}>
      <Segment raised color="grey">
        <h3>{heading}</h3>
        <form onSubmit={onInputSubmit}>
          <Input
            icon="search"
            fluid
            onChange={onInputChange}
            value={value}
            placeholder="Search"
          />
        </form>
      </Segment>
    </div>
  );
};

export default SearchBar;
