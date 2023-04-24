import React, { useState } from "react";
import { ReactComponent as PlusButton } from "../../assets/Images/PlusButton.svg";
import { ReactComponent as MinusButton } from "../../assets/Images/MinusButton.svg";

export default function ExpandableContainer({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="expandable-container">
      <div className="expandable-container--title" onClick={toggleContent}>
        {isOpen ? (
          <MinusButton className="minus--button" />
        ) : (
          <PlusButton className="plus--button" />
        )}
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="expandable-container--content">
          <p className="expandable-container--paragraph">{content}</p>
        </div>
      )}
    </div>
  );
}
