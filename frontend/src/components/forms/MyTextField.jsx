import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from "react-hook-form";

export default function MyTextField(props) {
    const {label, width, placeholder, name, control, type, rules} = props
    return (
        <Controller
            name = {name}
            control={control}
            rules={rules}
            render= {({
                field:{onChange, value},
                fieldState:{error},
                formState,

                }) => (

                <TextField
                    sx={{width:{width}}}
                    onChange={onChange}
                    value={value}
                    id="standard-basic"
                    label={label}
                    variant="outlined"
                    placeholder={placeholder}
                    error={!!error}
                    helperText={error ? error.message : ""}
                    type={type}
                />
                )
                }
        />
    );
}
