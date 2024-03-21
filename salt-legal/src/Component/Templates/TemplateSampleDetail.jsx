import React from "react";
import "./TemplateSampleDetail.css";
import Navbar from "../Navbar/Navbar";
import { Card, CardContent, Typography, Button } from "@mui/material";
import ts1 from "../../assets/template/t-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faCircleCheck,
  faFileWord,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

function TemplateSampleDetail() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="templateSampleContainer">
        <h2 className="templateSampleContainer-h2">
          Creating a <span>Comprehensive Employee </span>Handbook
        </h2>
        <p className="templateSampleContainer-p">
          Templates / Human Resources / Company Policies
        </p>

        <div className="template-sample-card-div">
          <Card className="template-sample-card">
            <CardContent>
              <img src={ts1} />
            </CardContent>
          </Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card className="template-sample-subcard">
              <CardContent>
                <div className="template-sample-subcard-div">
                  ADDITIONAL BENEFITS
                </div>
                <div className="template-sample-sub-subcard">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Free storage Services</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Life time Access</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Simple to pay and Edit</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Simple to share</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>20 GB cloud storage Templates</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>20 GB cloud storage Templates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="template-sample-subcard-1">
              <CardContent>
                <div className="template-sample-sub-subcard">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">File Type </p>
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      style={{
                        marginRight: "5px",
                        color: "#02244a",
                        marginTop: "5px",
                        marginLeft: "30px",
                      }}
                      size="2x"
                    />
                    <p className="template-sample-sub-subcard-p">Word</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">File Type </p>
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      style={{
                        marginRight: "5px",
                        color: "#02244a",
                        marginTop: "5px",
                        marginLeft: "30px",
                      }}
                      size="2x"
                    />
                    <p className="template-sample-sub-subcard-p">Word</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">File Size</p>

                    <p
                      className="template-sample-sub-subcard-p"
                      style={{ marginLeft: "20px" }}
                    >
                      200kb
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">Pages</p>

                    <p
                      className="template-sample-sub-subcard-p"
                      style={{ marginLeft: "40px" }}
                    >
                      34
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <Card>
          <CardContent>
            <h2>
              Creating a Comprehensive Employee Handbook View the key components
              of an Employee Handbook
            </h2>
            <p>
              Crafting an Employee Handbook is a critical step for any business
              owner. It's a tool that not only communicates your company's
              culture and expectations but also legally safeguards your
              business. Our employee handbook template at Business in a Box
              offers a streamlined way to create a professional and thorough
              staff manual.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TemplateSampleDetail;
