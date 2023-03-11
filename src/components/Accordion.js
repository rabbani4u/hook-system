import React from "react";

function Accordion({ items }) {
  const renderedItems = items.map(item => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="title active">{item.content}</div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;
