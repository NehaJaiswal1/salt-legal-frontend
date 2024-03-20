import React from "react";
import { topDocument } from "../../../Data/data";
import "./Document.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function Document() {
  return (
    <div className="card-container1">
      <div className="card-container">
      <div>
        <h3>
          Whatever Business <span>or </span>Legal Document You Need,
          <span> We Have a Template </span> for You.
        </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo inventore quos officiis, natus nostrum,  </p>
        </div>
        {topDocument.map((document) => (
          <div key={document._id} className="card">
            <FontAwesomeIcon
              icon={faFolderOpen}
              style={{
                marginRight: "20px",
                alignText: "center",
                color: "#02244a",
                marginLeft: "20px",
              }}
            />

            <h4>{document.name}</h4>
          </div>
        ))}
        
      </div>
      <div className="center-button">
        <button>BROWSE MORE</button>
      </div>
    </div>
  );
}

export default Document;
