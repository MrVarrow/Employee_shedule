import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/employee-schedule-animation.json"; // Replace with your Lottie JSON file

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2196F3 30%, #E3F2FD 90%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" fontWeight="bold">
          Start your journey with Employee Schedule
        </Typography>
      </motion.div>

      <Box sx={{ mt: 4, width: "400px"}}>
        <Lottie animationData={animationData} loop autoplay />
      </Box>

      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button variant="contained" color="primary" size="large">
            Get Started →
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button variant="outlined" color="inherit" size="large">
            Learn More
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
