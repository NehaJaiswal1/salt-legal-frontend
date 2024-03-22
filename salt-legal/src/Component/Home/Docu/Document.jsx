import React from "react";
import { topDocument } from "../../../Data/data";
import "./Document.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import com from '../../../assets/image/com.png';
import { faChevronCircleDown, faChevronDown, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Document() {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBrowseMore = () => {
    navigate('/register'); // Navigate to the "/register" route
  };
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
            <img
              src={com}
              style={{
                marginRight: "20px",
                alignText: "center",
                color: "#02244a",
                width:'35px',
                marginLeft: "20px",
              }}
            />

<h4>{document.name}</h4>
            <FontAwesomeIcon icon={faChevronDown} size="xs" className="chevron-icon" />
          </div>
        ))}
        
      </div>
      <div className="center-button">
        <button onClick={handleBrowseMore}>BROWSE MORE</button> 
      </div>
    </div>
  );
}

export default Document;