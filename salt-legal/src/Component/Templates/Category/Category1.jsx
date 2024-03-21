

import React from "react";
import { categoryData } from "../../../Data/data";
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Category.css";

function Category() {
  return (
    <div className="category-container">
      <div>
        <h2 className="container1">
          All the Templates You Need to<span> Plan, Start, Organize, Manage, Finance &
          Grow Your Business, </span>  in One Place.
        </h2>
        
        <p>8 Business Management Modules, In 1 Place.</p>
      </div>

      <div className="category-container">
        {categoryData.map((item, index) => (
          <Card key={index} className="card-style">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia>
                  <FontAwesomeIcon
                    icon={item.img}
                    size="3x"
                    style={{ color: "#d0a144", textShadow: "0px 0px 1px red" ,marginTop:'20px'}}
                  />
                </CardMedia>
               
                <div className="card-style-1">
                <hr
                  style={{
                   
                    backgroundColor: "gray",
                    height: '2px',width:'180px'
                  }}
                />
                  <Typography
                    variant="h6"
                    component="h2"
                    className="card-style-2"
                    style={{ textAlign: "center" }}
                  >
                    {item.name}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="register-button">REGISTER WITH US</Button>
    </div>
  );
}

export default Category;
