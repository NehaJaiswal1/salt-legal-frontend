

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./ForgetPassword.css";
import { useNavigate, useParams } from 'react-router';
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



function ResetPassword() {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const { token } = useParams();

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `https://the-salt-legal-backend-1.onrender.com/updatePassword/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword: newPassword,
            confirmPassword: confirmPassword,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        console.log("Password Changed successfully!");
        // const { token } = responseData.data; 
        
        setSuccessMessage("Password Changed successfully!");
        
        setNewPassword("");
        setConfirmPassword("");
        setMessage("");
        navigate(`/`);
      } else {
        console.error("Not able to Change Password", responseData);
        setMessage(`Not able to Change Password: ${responseData?.message || "An unknown error occurred."}`);
      }
    } catch (error) {
      console.error("Error during Changing Password", error);
      setMessage("An unexpected error has occurred.");
    }
  };
  
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
             RESET PASSWORD
            </Typography>
            {message && <Typography variant="body1" color="error">{message}</Typography>}
            {successMessage && <Typography variant="body2" style={{ color: 'green', textAlign:'center' }}>{successMessage}</Typography>}

            {/* <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
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
             */}
            
            
            
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
              <Input
                id="standard-adornment-newpassword"
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
               
              />


            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
              <Input
                id="standard-adornment-newpassword"
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
               
              />


            </FormControl>
            {/* <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
              <Input
                id="standard-adornment-confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="envelop"></IconButton>
                  </InputAdornment>
                }
              />

              
            </FormControl> */}
            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1, }}
                onClick={handleUpdate}
              >
                Update
              </Button>
            </div>
            
           </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResetPassword;