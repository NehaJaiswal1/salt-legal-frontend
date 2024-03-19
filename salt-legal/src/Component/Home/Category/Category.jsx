
import React from "react";
import { categoryData } from "../../../Data/data";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Category.css";

function Category() {
  return (
    <div className="category-container">
      <div>
        <h2 className="container1">
          Reimagining Your Business Management with Comprehensive Templates
        </h2>
        {/* <p>
          Transform your business operations with our complete suite of
          customizable templates for every facet of your enterprise.
        </p> */}
        <p>5,000+ Templates | 10+ Business Departments</p>
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
                    style={{ color: "gray", textShadow: '0px 0px 1px red' }}
                    />
                </CardMedia>
                <div className="card-style-1">
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ textAlign: "center"}}>
                    {item.name}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Category;
