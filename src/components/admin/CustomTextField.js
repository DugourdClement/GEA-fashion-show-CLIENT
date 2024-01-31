import {TextField} from "@mui/material";

const CustomTextField = ({label, required = true, onChange, value, style, disable = false}) => {
    return (
        <TextField
            fullWidth
            disabled={disable}
            multiline
            label={label}
            InputLabelProps={{
                style: {textAlign: 'center'},
                shrink: true
            }}
            size="small"
            {...style}
            required={required}
            onChange={e => onChange(e)}
            sx={{background: "white",}}
            value={value !== undefined ? value : ''}
        />
    );
};

export default CustomTextField;
