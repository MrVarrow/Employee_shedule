import React from "react";
import { TextField } from "@mui/material";

const MyNumberField = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      type="number"
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default MyNumberField;