import {TextField} from "@mui/material";

const CustomTextField = ({onChange, value, ...props}) => {
    return (
        <TextField
            fullWidth
            InputLabelProps={{
                style: {textAlign: 'center'},
                shrink: true
            }}
            size="small"
            {...props}
            onChange={e => onChange(e)}
            sx={{background: "white",}}
            value={value !== undefined ? value : ''}
        />
    );
};

export default CustomTextField;
