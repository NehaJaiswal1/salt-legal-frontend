







import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ForgetPassword.css";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate, useParams} from 'react-router';



function VerifyOTP() {

  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const {userId} = useParams();

  const handleVerifyOtp=async () =>{
    try {
      const response = await fetch(
        "https://login-signup-0dmg.onrender.com/verifyOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        }
      )
      const responseData = await response.json();
      console.log(responseData);
      if(response.ok){
        console.log("otp verified successfully!");
        navigate('/reset-password')
      }
      else{
        console.error("Not able to verify otp", responseData);

      }
    } catch (error) {
      console.error("Error during verifying otp", error);
    }
  }
 
  return (
    <div className="section-div">
      <Card
        className="section-card"
        sx={{
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          background: "white",
          opacity: "0.8",
          backgroundSize: "cover",
          position: "absolute",
        }}
      >
        <CardContent>
          <Box
            sx={{
              m: 8,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography className="card-heading"
              sx={{
                color: "#404040",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
             VERIFY OTP
            </Typography>
            <p className="div-p1">Please copy otp which is send to verified email and then you will be able to change your password.</p>
            
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="envelop"></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-OTP">OTP</InputLabel>
              <Input
                id="standard-adornment-OTP"
                type="text"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="envelop"></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1, }}
                onClick={handleVerifyOtp}
              >
                Submit
              </Button>
            </div>
            
           </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default VerifyOTP;