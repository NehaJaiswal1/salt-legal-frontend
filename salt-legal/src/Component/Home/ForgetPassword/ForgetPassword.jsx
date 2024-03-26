





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
import { useNavigate} from 'react-router';
import { useParams } from 'react-router-dom';
// import { useAuth } from '../AuthContext/Auth';



function ForgotPassword() {

  const navigate = useNavigate();
  // const { authData, saveAuthData } = useAuth();
  const { userId } = useParams();

  const [email, setEmail] = useState("");
  // const some = useParams();
  //   console.log("oyeeee1",some)

  // const { username } = useParams();

  const handleSendLink = async () => {
    try {
      const response = await fetch(
        `https://login-signup-0dmg.onrender.com/verification/forgotPasswordClient`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        console.log("Link sent successfully!");
        const { token } = responseData.data; 
        // saveAuthData({ token: token, email: formData.data.email });
        navigate(`/reset-password/${token}`);
      } else {
        console.error("Not able to send link", responseData);
      }
    } catch (error) {
      console.error("Error during sending link for verification", error);
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
             VERIFY EMAIL
            </Typography>
            <p className="div-p1">The verification otp will be sent to the mailbox.Please Check it.</p>
            
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
              />
            </FormControl>
            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1, }}
                onClick={handleSendLink}
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

export default ForgotPassword;