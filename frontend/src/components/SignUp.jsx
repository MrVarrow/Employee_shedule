import React from "react";
import { useForm } from "react-hook-form";
import {Container, Box, Paper, Typography, Avatar, Button} from "@mui/material";
import MyDatePickerField from "./forms/MyDatePickerField.jsx";
import MyTextField from "./forms/MyTextField.jsx";
import LockOutlinedIcon  from '@mui/icons-material/LockOutlined';

const Signup = () => {
    const {handleSubmit, reset, setValue, control, watch} = useForm()
    const password = watch("user_password");

  const submission = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(submission)}>
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #2196F3, #64B5F6)"
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3
          }}
        >
        <Box sx={{display:'flex', width: '100%', p:4, flexDirection: 'column', justifyContent: 'space-around', gap:3, alignItems: 'center'}}>

            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign Up</Typography>

            <MyTextField
                label="Full name"
                name="full_name"
                control={control}
                rules={{ required: "Full name is required" }}
                placeholder="Enter your full name..."
                width='100%'
            />

            <MyTextField
                label="Username"
                name="username"
                control={control}
                rules={{ required: "Username is required" }}
                placeholder="Enter your username..."
                width='100%'
            />

            <MyTextField
                label="E-mail"
                name="user_email"
                control={control}
                rules={{ required: "E-mail is required" }}
                placeholder="Enter your email..."
                width='100%'
            />

            <MyTextField
                label="Password"
                name="user_password"
                control={control}
                rules={{ required: "Password is required" }}
                placeholder="Enter your password..."
                width='100%'
                type="password"
            />

            <MyTextField
                label="Confirm password"
                name="confirm_password"
                control={control}
                rules={{ required: "Confirm password is required",
                validate: (value) =>
                    value === password || "Passwords do not match"
                }}
                placeholder="Confirm your password..."
                width='100%'
                type="password"
            />

            <MyDatePickerField
                label="Birth date"
                name="birth_date"
                control={control}
                width='100%'
                rules={{ required: "Birth date is required" }}
            />

            <Button variant="contained" type="submit" sx={{width:'100%'}}>
                Sign Up
            </Button>

        </Box>

        </Paper>
      </Container>
    </Box>
    </form>
  );
};

export default Signup;