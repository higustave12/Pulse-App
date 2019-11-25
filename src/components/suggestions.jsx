import React from "react";

const Suggestions = props => {
  return (
    <React.Fragment>
      {props.suggestions.map(suggestion => {
        return (
          <div key={suggestion.userId} onClick={props.updateSearch}>
            {`${suggestion.firstName} ${suggestion.lastName}`}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Suggestions;
