import React, { useState } from "react";

function Accordion({ items }) {
  const [aciveIndex, setActiveIndex] = useState(null);
  const onTitleClick = index => {
    console.log("clicked index", index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="title active">{item.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{aciveIndex}</h1>
    </div>
  );
}

export default Accordion;
