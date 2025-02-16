import React from 'react';
import {useForm} from "react-hook-form";
import {Avatar, Typography, Box, Paper, Container, Button} from "@mui/material";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import MyTextField from "./forms/MyTextField.jsx";
import AxiosInstance from "./Axios.jsx";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
    const defaultValues = {
        username: "",
        password: "",

    }
    const {handleSubmit, reset, setValue, control, watch} = useForm({defaultValues: defaultValues})

    const submission = (data) => {
        AxiosInstance.post(
            `accounts/login/`, {
                username: data.username,
                password: data.password,
            })
            .then((res) =>{
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);

                navigate(`/logged-user`)
            })
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
                <LockOpenOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign In</Typography>

            <MyTextField
                label="Username"
                name="username"
                control={control}
                rules={{ required: "Username is required" }}
                placeholder="Enter your username..."
                width='100%'
            />

            <MyTextField
                label="Password"
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                placeholder="Enter your password..."
                width='100%'
                type="password"
            />

            <Button variant="contained" type="submit" sx={{width:'100%'}}>
                Login
            </Button>


        </Box>

        </Paper>
      </Container>
    </Box>
        </form>

    );
};

export default SignIn;